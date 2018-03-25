import axios from 'axios'
import Cookie from 'js-cookie'



// import createPersistedState from 'vuex-persistedstate'


/*
|--------------------------------------------------------------------------
| OnclickSell.com
|--------------------------------------------------------------------------
|
| Generates a token expiration date in the future.
|
*/


const getExpirationDate = (expiresIn) => {
  return new Date().getTime() + expiresIn
}



/*
|--------------------------------------------------------------------------
| OnclickSell.com
|--------------------------------------------------------------------------
|
| This seciton contains the state of the authentication module.
|
*/
export const state = () => ({
  user: {},
  collection: {},
  listings: {},
  token: null,
  tokenExpiration: null,
  authModuleState: 'signin'
})

/*
|--------------------------------------------------------------------------
| OnclickSell.com
|--------------------------------------------------------------------------
|
| To add any plugins to the authentication module add it to the below
| plugins array.
|
*/

export const plugins = [
  // createPersistedState()
]


/*
|--------------------------------------------------------------------------
| OnclickSell.com
|--------------------------------------------------------------------------
|
| This seciton contains the mutations of the authentication module.
|
*/

export const mutations = {
  UpdateAuthModuleState(state, payload) {
    state.authModuleState = payload
  },
  setAuthUser (state, payload) {
    state.user = payload
  },
  setToken (state, payload) {
    state.token = payload
    Cookie.set('token', payload)
  },
  setTokenExpiration (state, payload) {
    state.tokenExpiration = getExpirationDate(3600000)
    Cookie.set('tokenExpiration', getExpirationDate(3600000))
  },
  persistToken (state, payload) {
    localStorage.setItem('token', payload)
    localStorage.setItem('tokenExpiration', getExpirationDate)
    Cookie.set('token', payload)
    Cookie.set('tokenExpiration', getExpirationDate)
  },
  clearToken(state) {
    state.token = null
    Cookie.remove('token')
    Cookie.remove('tokenExpiration')
    // localStorage.removeItem('token')
    // localStorage.removeItem('tokenExpiration')
  },
  clearAuthUser(state) {
    state.user = null
  },
  SetAuthCollection (state, payload) {
    state.collection = payload
  },
  SetAuthListings (state, payload) {
    state.listings = payload
  }
}


/*
|--------------------------------------------------------------------------
| OnclickSell.com
|--------------------------------------------------------------------------
|
| This seciton contains the actions of the authentication module.
|
*/

let token = null
let tokenExpiration = null

export const actions = {
  authentication ({commit, dispatch, state}, credentials) {
    return new Promise((resolve, reject) => {
      axios.post('http://localhost:4000/api/v1/auth/' + credentials.url, credentials.values)
      .then(response => {
        commit('setAuthUser', response.data.Context.user)
        commit('setToken', response.data.Context.token)
        commit('setTokenExpiration')
        commit('SetAuthListings', response.data.Context.listings)
        commit('SetAuthCollection', response.data.Context.collection)
        resolve()
      })
      .catch(err => reject(err.response.data))
    })  
  },
  updateUser ({commit, state}, data) {
    return new Promise( async(resolve, reject) => {
      try {
        const response = await axios.post('http://localhost:4000/api/v1/users?token=' + state.user.token , data)
        commit('setAuthUser', response.data.Context)
        resolve()
      }catch(err) {
        console.log(err)
        reject(err)
      }
    })
  },
  logOut ({commit, state}, vuexContext) {
    commit('clearToken')
    commit('clearAuthUser')
  },
  fetchAuthUser ({commit, state}) {
      return axios.get('http://localhost:4000/api/v1/users?token=' + state.token)
      .then(response => {
        commit('setAuthUser', response.data.Context.user)
        commit('SetAuthListings', response.data.Context.listings)
        commit('SetAuthCollection', response.data.Context.collection)
      })
      .catch(error => {
        console.log(error)
      })
  },
  initAuth(vuexContext, req) {
    if(process.server) {
      if(!req.headers.cookie) {
        return
      }

      token = req.headers.cookie.split(';').find(c => c.trim().startsWith("token=")).split("=")[1]
      tokenExpiration = req.headers.cookie.split(';').find(c => c.trim().startsWith("tokenExpiration=")).split("=")[1]

    } else {
      token = vuexContext.state.token
      tokenExpiration = vuexContext.state.tokenExpiration
    }

    if (new Date().getTime() > +tokenExpiration || !token || !tokenExpiration) {
      console.log("No token or invalid token");
      vuexContext.dispatch("logOut");
      return
    }
    vuexContext.commit('setToken', token)
    vuexContext.state.tokenExpiration = tokenExpiration
    return vuexContext.dispatch('fetchAuthUser')
  },
  resetPassword({commit, state}, data) {
    axios.post('http://localhost:4000/api/v1/auth/set-new-password', data)
      .then(response => {
        console.log(response)
        // commit('setAuthUser', response.data)
        // this.$router.push('/')
      })
      .then(error => {
        console.log(error)
      })
  }
}


/*
|--------------------------------------------------------------------------
| OnclickSell.com
|--------------------------------------------------------------------------
|
| This seciton contains the getters of the authentication module.
|
*/

export const getters = {
  isAuth (state, getters, rootState) {
    return state.token != null
  },
  GetAuthUser (state, getters, rootState) {
    return state.user
  },
  getToken (state, getters, rootState) {
    return state.token
  },
  GetAuthCollection(state, getters, rootState) {
    return state.collection
  },
  GetAuthListings(state, getters, rootState) {
    return state.listings
  },
  GetAuthModuleState(state, getters, rootState) {
    return state.authModuleState
  }
}
