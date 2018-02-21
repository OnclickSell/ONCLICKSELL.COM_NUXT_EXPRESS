import { instance as axios } from '@/plugins/axios'


/*
|--------------------------------------------------------------------------
| OnclickSell.com
|--------------------------------------------------------------------------
|
| This seciton contains the state of the authentication module.
|
*/
export const state = () => ({
  user: {}
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
    // console.log(payload)
    state.user = payload
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
   changePassword (vuexContext, payload) {
       return axios.put('/users/password', payload)
            .then(response => {
               vuexContext.commit('setUser', response.data)
            })
            .catch(error => {
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
}
