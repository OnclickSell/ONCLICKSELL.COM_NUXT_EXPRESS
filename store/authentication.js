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
  setAuth (state, payload) {
    state.user = {
      ...payload,
      token: {
        value: payload.token.value,
        expiry: payload.token.expiry
      }
    },
    Cookie.set('token', payload.token.value)
    Cookie.set('token_expiry', payload.token.expiry)
  },
  clearAuth(state) {
    state.user = {}
    Cookie.remove('token')
    Cookie.remove('token_expiry')
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
  fetchAuthUser ({commit, state}, token) {
      return axios.post('http://localhost:4000/api/v1/auth/init', {token: token})
      .then(response => {
        commit('setAuth', response.data.Context)
      })
      .catch(error => {
        console.log(error)
      })
  },
  authentication ({commit, dispatch, state}, credentials) {
    return new Promise((resolve, reject) => {
      axios.post('http://localhost:4000/api/v1/auth/' + credentials.url, credentials)
      .then(response => {
        commit('setAuth', response.data.Context)
        resolve()
      })
      .catch(err => reject(err.response.data))
    })  
  },
  logOut ({commit, state}, vuexContext) {
    commit('clearAuth')
  },
  initAuth(vuexContext, req) {
    if(process.server) {
      if(!req.headers.cookie) {
        return
      }

      token = req.headers.cookie.split(';').find(c => c.trim().startsWith("token=")).split("=")[1]
      tokenExpiration = req.headers.cookie.split(';').find(c => c.trim().startsWith("token_expiry=")).split("=")[1]
      if (new Date().getTime() > +tokenExpiration || !token || !tokenExpiration) {
        console.log("No token or invalid token");
        vuexContext.dispatch("logOut");
        return
      }

      return vuexContext.dispatch('fetchAuthUser', token)
    }

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
    return true
  },
  GetAuthUser (state, getters, rootState) {
    return Object.keys(state.user).length > 0 ? state.user : false
  },
  GetAuthModuleState(state, getters, rootState) {
    return state.authModuleState
  }
}
