// import localStorage from '../plugins/localStorage'
export const state = () => ({
	loading: false
})
export const mutations = {
	startLoading(state, payload) {
		console.log('fasfsafsa')
		state.loading = true
	},
	stopLoading(state) {
		state.loading = false
	}
}

export const actions = {
  nuxtServerInit({state, dispatch}, context) {
      return dispatch('listings/fetchListings', {
          limit: 20,
          offset: 0,
          order: 'id'
        })
    
  }
}

export const getters = {
  isLoading(state, getters, rootState) {
    return state.loading
  }
}
