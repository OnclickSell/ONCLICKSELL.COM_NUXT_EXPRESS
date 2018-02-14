// import localStorage from '../plugins/localStorage'
export const state = () => ({
})
export const mutations = {
}

export const actions = {
  nuxtServerInit({state, dispatch}, context) {
      return Promise.all([
        dispatch('listings/fetchListings', {
          limit: 20,
          offset: 0,
          order: 'id'
        }),
        dispatch('authentication/fetchAuthUser')
      ])
  }
}

// export const getters = {
//   isAuth({getters}, context) {
//     return context.
//   }
// }
