import Vue from 'vue'
import App from './App.vue'
import AccountKit from 'vue-facebook-account-kit'

Vue.use(AccountKit)

new Vue({
  el: '#app',
  render: h => h(App)
})
