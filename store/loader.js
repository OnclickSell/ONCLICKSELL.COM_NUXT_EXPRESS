export const state = () => ({
 	loading: false
})

export const mutations = {
	startLoading(state, payload) {
		state.loading = true
	},
	stopLoading(state) {
		state.loading = false
	}
}

export const actions = {
  startLoading ({commit, dispatch, state}) {
   	commit('startLoading')
  },
  stopLoading ({commit, dispatch, state}) {
   	commit('stopLoading')
  }
}

export const getters = {
  isLoading(state, getters, rootState) {
    return state.loading
  },
  isloading(state, getters, rootState) {
    return state.loading
  }
}

