import md5 from 'md5'

import store from '@/store/index'
import { guid, removeEmptyKey, rsaEncrypted, getUrlParams, base64Decode } from '@/utils'

const RSA_PUBLIC_KEY_BASE64 = process.env.VUE_APP_API_SIGN_RSA_PUBLIC_KEY_BASE64

const VUE_APP_API_SIGN_RSA_PUBLIC_KEY = RSA_PUBLIC_KEY_BASE64 ? base64Decode(RSA_PUBLIC_KEY_BASE64) : null

export function createSign(config) {
  const { TDOA } = store.state.config

  const uuidStr = guid()
  const timestampStr = String(new Date().getTime() - TDOA)
  let keys = [uuidStr, timestampStr]

  switch (config.method.toUpperCase()) {
    case 'POST':
    case 'DELETE':
    case 'PUT':
      // 处理参数为undefined情况
      removeEmptyKey(config.data, [undefined, null])
      const entries = Object.entries(config.data || {})
      if (entries.length) {
        const obj = {}
        for (const [key, value] of entries) {
          if (value instanceof File) {
            continue
          }
          obj[key] = value
        }
        // 合并post参数
        keys = keys.concat(Object.keys(obj))
        keys = keys.concat(Object.values(obj))
      }
      break
    case 'GET':
      removeEmptyKey(config.params, [undefined, null])
      // 合并get参数
      keys = keys.concat(Object.keys(config.params ?? {}))
      keys = keys.concat(Object.values(config.params ?? {}))
      break

    default:
      break
  }

  const urlParams = getUrlParams(config.url) || {}
  if (Object.keys(urlParams).length > 0) {
    keys = keys.concat(Object.keys(urlParams))
    keys = keys.concat(Object.values(urlParams))
  }

  const signStrArr = []
  for (const item of keys) {
    signStrArr.push(String(item))
  }

  const Sign = md5(signStrArr.sort().toString())
  const Nonce = rsaEncrypted(VUE_APP_API_SIGN_RSA_PUBLIC_KEY, `${uuidStr},${timestampStr}`)

  config.headers['Nonce'] = Nonce
  config.headers['Sign'] = Sign
}

export function createPureSign() {
  const { TDOA } = store.state.config

  const uuidStr = guid()
  const timestampStr = String(new Date().getTime() - TDOA)
  const keys = [uuidStr, timestampStr]

  const Sign = md5(keys.sort().toString())
  const Nonce = rsaEncrypted(VUE_APP_API_SIGN_RSA_PUBLIC_KEY, `${uuidStr},${timestampStr}`)

  return {
    Sign,
    Nonce,
  }
}
