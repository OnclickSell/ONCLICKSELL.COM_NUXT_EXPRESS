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
  token: null,
  tokenExpiration: null
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
    Cookie.set('authUser', payload)
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
    axios.setHeader('Authorization', null)
    // localStorage.removeItem('token')
    // localStorage.removeItem('tokenExpiration')
  },
  clearAuthUser(state) {
    state.user = null
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
        commit('setTokenExpiration')
      })
      .catch(error => {
        console.log(error)
      })
  },
  signUp ({commit, state}, data) {
    axios.post('/auth/signUp', data)
      .then(response => {
        commit('setAuthUser', response.data.Context.user)
        commit('setToken', response.data.Context.token)
        commit('setTokenExpiration')
        this.$router.push('/register/preview')
      })
      .then(error => {
        console.log(error)
      })
  },
  logOut ({commit, state}, vuexContext) {
    commit('clearToken')
    commit('clearAuthUser')
  },
  fetchAuthUser ({commit, state}, vuexContext) {
    return axios.get('/users')
      .then(response => {
        console.log('Fetching the user')
        commit('setAuthUser', response.data.Context)
      })
      .catch(error => {
        console.log(error)
      })
  },
  initAuth(vuexContext, req) {
    if(process.server) {
      if(!req.headers.cookie) {
        console.log('faild twice')
        return
      }

      token = req.headers.cookie.split(';').find(c => c.trim().startsWith("token=")).split("=")[1]
      tokenExpiration = req.headers.cookie.split(';').find(c => c.trim().startsWith("token=")).split("=")[2]
      console.log(req.headers+ ' From authenticatino store')
      // authUser = req.headers.cookie.split(';').find(c => c.trim().startsWith("token=")).split("=")[3]
      if(process.isClient) {
        console.log('I found it out')
      }
    } else {
      token = vuexContext.state.token
      tokenExpiration = vuexContext.state.tokenExpiration
    }

    if (new Date().getTime() > +tokenExpiration || !token) {
      console.log("No token or invalid token");
      vuexContext.dispatch("logOut");
      return;
    }
    vuexContext.commit('setToken', token)
    // Cookie.set('authUser', authUser)
    vuexContext.state.tokenExpiration = tokenExpiration
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
