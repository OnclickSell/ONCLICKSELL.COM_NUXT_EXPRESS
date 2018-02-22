// import localStorage from '../plugins/localStorage'
export const state = () => ({
})
export const mutations = {
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

// export const getters = {
//   isAuth({getters}, context) {
//     return context.
//   }
// }
