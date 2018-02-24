import axios from 'axios'

export const state = () => ({
  plans: ''
})
export const mutations = {
  setPlans(state, payload) {
    state.plans = payload
  }
}
export const actions = {
    fetchPlans ({state, commit}, payload) {
      return axios.get('http://localhost:3000/api/v1/plans')
        .then(response => {
            commit('setPlans', response.data.Context)
        })
        .catch(err => console.log(err))
    }
}

export const getters = {
  getPlans (state, rootState) {
    return state.plans
  }
}
