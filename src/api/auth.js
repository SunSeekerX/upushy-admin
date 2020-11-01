/**
 * @name:
 * @author: SunSeekerX
 * @Date: 2020-07-27 12:17:08
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2020-11-01 21:29:40
 */

import { request } from '@/utils/request/index'

// 登录验证码
export function registerCaptcha() {
  return request({
    url: `/api/user/register/captcha?t=${Date.now()}`,
    method: 'GET',
  })
}

// 注册
export function register({
  username,
  password,
  email,
  nickname,
  imgCaptcha,
  imgCaptchaKey,
}) {
  return request({
    url: '/api/user',
    method: 'POST',
    data: { username, password, email, nickname, imgCaptcha, imgCaptchaKey },
  })
}

// 登录
export function login({ username, password, imgCaptcha, loginCaptchaKey }) {
  return request({
    url: '/api/user/login',
    method: 'POST',
    data: { username, password, imgCaptcha, loginCaptchaKey },
  })
}

// 登录验证码
export function loginCaptcha() {
  return request({
    url: `/api/user/login/captcha?t=${Date.now()}`,
    method: 'GET',
  })
}

// 刷新token
export function getNewToken({ refreshToken }) {
  return request({
    url: '/api/user/token',
    method: 'POST',
    data: {
      refreshToken,
    },
  })
}
