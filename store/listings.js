import axios from 'axios'

export const state = () => ({
  listings: [],
  SingleListing: {},
  frontendTechnologies: {},
})
export const mutations = {
  setListings (state, payload) {
    state.listings = payload.data.result.listings
  },
  setSingleListing (state, payload) {
    state.SingleListing = payload.context[0]
  },
  setTechnologies (state, payload) {
    state.frontendTechnologies.plateform = payload.frontend_plateform
    state.frontendTechnologies.framework = payload.frontend_framework
  }
}
export const actions = {
    fetchListings ({state, commit}, payload) {
      return axios.get('http://localhost:3000/api/v1/listings?limit=' + payload.limit + '&offset=' + payload.offset + '&order=' + payload.order + '')
        .then(function (response) {
          commit('setListings', response)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    fetchTechnologies ({state, commit}, payload) {
      axios.get('http://localhost:5000/api/v1/listings/technologies/fetch')
        .then(function (response) {
          commit('setTechnologies', response.data.technologies)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    fetchSingleListing (vuexContext, payload) {
      return axios.get('http://localhost:3000/api/v1/listings/' + payload.id + '/' + payload.title)
        .then(function (response) {
          vuexContext.commit('setSingleListing', response.data)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
}

export const getters = {
  getListings (state, rootState) {
    return state.listings
  },
  GetSingleListing (state, rootState) {
    return state.SingleListing
  },
  getFrontendTechnologies (state, rootState) {
    return state.frontendTechnologies
  }
}
