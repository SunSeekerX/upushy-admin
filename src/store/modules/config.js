import { getConfig } from '@/api/common'
import { SET_TDOA } from '@/store/mutation-types'

const config = {
  state: {
    // 是否更新
    isUpdated: false,
    // 时间差
    TDOA: 0,
  },
  mutations: {
    [SET_TDOA](state, tdoa) {
      state.TDOA = tdoa
      state.isUpdated = true
    },
  },
  actions: {
    async getConfig({ commit }) {
      const res = await getConfig()

      if (res.statusCode === 200) {
        // 计算和服务器时间差
        const timestamp = new Date().getTime()
        const TDOA = timestamp - res.data.serviceTime
        commit(SET_TDOA, TDOA)
      } else {
        return Promise.reject(res)
      }
    },
  },
}

export default config
