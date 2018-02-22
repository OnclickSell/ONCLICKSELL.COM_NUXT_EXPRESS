<template>
    <div>
       <h1>Its actually working {{data}}</h1>
   </div>
</template>

<script>
import axios from 'axios'

// let instance = axios.create({
//   baseURL: 'http://localhost:3000/api/v1',
// })

export default {
    middleware: ['checkAuth'],

    data() {
        return {
            data: ''
        }
    }
}
</script>

<style lang='scss'>
</style>