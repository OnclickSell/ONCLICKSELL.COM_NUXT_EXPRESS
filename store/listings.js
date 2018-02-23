import axios from 'axios'

export const state = () => ({
  listings: [],
  SingleListing: {},
  technologies: {
    frontend: {
      framework: '',
      plateform: ''
    },
    backend: {
      framework: '',
      plateform: ''
    }
  },
  listingsDetails: {
    title: '',
    summary: ''
  }
})
export const mutations = {
  setBasicInfo (state, payload) {
    console.log(payload)
    state.listingsDetails.title = payload.title
    state.listingsDetails.summary = payload.summary
  },
  setListings (state, payload) {
    state.listings = payload.data.result.listings
  },
  setSingleListing (state, payload) {
    state.SingleListing = payload.context[0]
  },
  setTechnologies (state, payload) {
    state.technologies.frontend.framework = payload.frontend.framework
    state.technologies.frontend.plateform = payload.frontend.plateforms
    state.technologies.backend.framework = payload.backend.framework
    state.technologies.backend.plateform = payload.backend.plateforms
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
      return axios.get('http://localhost:3000/api/v1/technologies')
        .then(function (response) {
          commit('setTechnologies', response.data.Context)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    fetchSingleListing (vuexContext, payload) {
      return axios.get('http://localhost:3000/api/v1/listings/' + payload.id + '/' + payload.title)
        .then(response => {
          vuexContext.commit('setSingleListing', response.data)
        })
        .catch(error => {
          console.log(error.response)
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
  getTechnologies (state, rootState) {
    return state.technologies
  }
}
