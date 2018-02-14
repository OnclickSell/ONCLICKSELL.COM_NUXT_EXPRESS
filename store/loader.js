export const state = () => ({
  login: false
})
export const getters = {
  login (state, rootState) {
    return state.login
  }
}
