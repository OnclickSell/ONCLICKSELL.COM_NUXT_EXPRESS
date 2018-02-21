<template>
    <div>
       <h1>Its actually working {{data}}</h1>
   </div>
</template>

<script>
import axios from 'axios'

let instance = axios.create({
  baseURL: 'http://localhost:3000/api/v1',
})

export default {
    middleware: 'checkAuth',

    data() {
        return {
            data: ''
        }
    },
    fetch ({ store, req }) {
        if(process.server) {
            instance.interceptors.request.use(
            (config) => {
                if (store.state.authentication.token) {
                //Returning the old value of email
                console.log(req.headers.cookie.split(';').find(c => c.trim().startsWith("token=")).split("=")[1] + ' From axios')
                config.headers.common['Authorization'] = `Bearer ${req.headers.cookie.split(';').find(c => c.trim().startsWith("token=")).split("=")[1]}`
                }
                return config
            },
            (error) => Promise.reject(error)
            )
            return instance.get('/users').then(response => store.state.user = Object.keys(req))
        .catch(err => console.log(err))
        }
    }
}
</script>

<style lang='scss'>
</style>