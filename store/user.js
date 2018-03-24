import axios from 'axios'


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
  listings: {}
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
  setUser (state, payload) {
    state.user = payload
  },
  SetUserCollection (state, payload) {
    state.collection = payload
  },
  SetUserListings (state, payload) {
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


export const actions = {
  async ResetPassword (context, payload) {
      try {
        const AuthToken = context.rootState.authentication.token
        const result = await axios.post('http://localhost:4000/api/v1/users?token=' + AuthToken, payload)
      // context.commit('SetUserListings', payload)
      }catch(err) {
        console.log(err)
      }
   },
   addToCollection(context, id) {
    const AuthToken = context.rootState.authentication.token
    return axios.post('http://localhost:4000/api/v1/collections/' + id + '?token=' + AuthToken)
      .then(function (response) {
        // commit('setListings', response.data.Context)
      })
      .catch(function (error) {
        console.log(error)
      })
   },
   SetUserCollection (context, payload) {
    context.commit('SetUserCollection', payload)
   },
   SetUserListings (context, payload) {
    context.commit('SetUserListings', payload)
   },
   async UpdateDescription (context, payload) {
    try {
      const AuthToken = context.rootState.authentication.token
      const result = await axios.post('http://localhost:4000/api/v1/users?token=' + AuthToken, payload)
      // context.commit('SetUserListings', payload)
    }catch(err) {
      console.log(err)
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
}
