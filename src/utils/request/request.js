import axios from 'axios'

import store from '@/store'
import router from '@/router'
import { createSign } from './request-sign'
import { ACCESS_TOKEN, LOGIN_OUT, RESET_ROUTERS } from '@/store/mutation-types'

/**
 * @name Create request object
 * @param { Object } options options for axios.create
 * @returns { Function } request function
 */
export default function createRequest(options) {
  // create an axios instance
  const instance = axios.create(
    Object.assign(
      {
        baseURL: process.env.VUE_APP_API_BASE_URL,
        withCredentials: false,
        timeout: 15000,
      },
      options
    )
  )

  // Error handler
  const errorHandler = (error) => {
    return {
      statusCode: error.response ? error.response.status : 500,
      message: error.message,
    }
  }

  // Request interceptor
  instance.interceptors.request.use((config) => {
    const { token } = store.getters
    token && (config.headers['Authorization'] = `Bearer ${token}`)
    // You can't return createSign(config) directly
    createSign(config)
    return config
  }, errorHandler)

  // Response interceptor
  instance.interceptors.response.use((response) => response.data, errorHandler)

  // Definition get new token api
  const getNewToken = ({ refreshToken }) =>
    instance({
      url: '/api/user/token',
      method: 'POST',
      data: {
        refreshToken,
      },
    })

  const request = async function (config) {
    const res = await instance(config)
    const { refreshToken } = store.getters
    if (res.statusCode === 401 && refreshToken) {
      const getNewTokenRes = await getNewToken({ refreshToken })
      if (getNewTokenRes.statusCode === 200) {
        store.commit(ACCESS_TOKEN, getNewTokenRes.data)
        return await instance(config)
      } else {
        store.commit(LOGIN_OUT)
        store.commit(RESET_ROUTERS)
        router.replace('/auth/login')
      }
    }
    return res
  }
  return request
}
