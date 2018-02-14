import axios from 'axios'
// import { store } from '~/store'



let instance = axios.create({
  baseURL: 'http://localhost:3000/api/v1',
})
  

export default ({store}) => {
  // if (process.client) {
    // const swal = require('sweetalert2')
    instance.interceptors.request.use(
      (config) => {
        if (store.state.authentication.token) {
          config.headers.common['Authorization'] = `Bearer ${store.state.authentication.token}`
        }
        return config
      },
      (error) => Promise.reject(error)
    )
    instance.interceptors.response.use(
      response => response,
      (error) => {
        if (error.response.status >= 500) {
          console.log({
            type: 'error',
            title: 'Oops...',
            html: 'Something went wrong! Please try again.'
          })
        } else if (error.response.status === 401 && store.getters.authUser) {
          console.log({
            title: 'Session Expired!',
            html: 'Please log in again to continue.',
            allowOutsideClick: false
          })
          .then(() => store.dispatch('logout'))
          .catch(swal.noop)
        }
        return Promise.reject(error)
      }
    )
  // }

}
 
export { instance }
