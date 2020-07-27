/**
 * @name:
 * @author: SunSeekerX
 * @Date: 2020-07-26 18:38:31
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2020-07-27 10:45:03
 */

import { request } from '@/utils/request/index'

export default {
  register({ username, password, email, nickname }) {
    return request({
      url: '/api/user',
      method: 'POST',
      data: { username, password, email, nickname },
    })
  },
}
