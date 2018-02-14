import { instance as axios } from '@/plugins/axios'
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


const getExpirationDate = new Date().getTime() + 3.6e+6



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
  token: null
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
  setAuthUser (state, payload) {
    state.user = payload
  },
  setToken (state, payload) {
    state.token = payload
    state.tokenExpiration = getExpirationDate
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
    localStorage.removeItem('token')
    localStorage.removeItem('tokenExpiration')
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
  logIn ({commit, dispatch, state}, credentials) {
    axios.post('/auth/signIn', credentials)
      .then(response => {
        commit('setAuthUser', response.data.Context.user)
        commit('setToken', response.data.Context.token)
        commit('persistToken', response.data.Context.token)
      })
      .catch(error => {
        console.log(error)
      })
  },
  signUp ({commit, state}, data) {
    axios.post('/auth/signUp', data)
      .then(response => {
        commit('setAuthUser', response.data)
        commit('setToken', response.data)
        commit('persistToken', response.data)
        this.$router.push('/register/preview')
      })
      .then(error => {
        console.log(error)
      })
  },
  logOut ({commit, state}, vuexContext) {
    commit('clearToken')
  },
  fetchAuthUser ({commit, state}, vuexContext) {
    return axios.get('/users')
      .then(response => {
        commit('setAuthUser', response.data.Context[0])
      })
      .catch(error => {
        console.log(error)
      })
  },
  initAuth(vuexContext, req) {
    if(req) {
      if(!req.headers.cookie) {
        return
      }

      token = req.headers.cookie.split(';').find(c => c.trim().startsWith("token=")).split("=")[1]
      tokenExpiration = req.headers.cookie.split(';').find(c => c.trim().startsWith("token=")).split("=")[2]

    } else {
      token = localStorage.getItem('token')
      tokenExpiration = localStorage.getItem('tokenExpiration')
    }

    if(new Date().getTime() > tokenExpiration || !token) {
        vuexContext.commit('clearToken')
        return
    }
      vuexContext.commit('setToken', token)
  },
  updateUser ({commit, state}, data) {
    axios.put('/users', data)
      .then(response => {
        commit('setAuthUser', response.data)
        this.$router.push('/')
      })
      .then(error => {
        console.log(error)
      })
  },
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
  }
}
