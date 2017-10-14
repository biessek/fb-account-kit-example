<template>
  <div id="app">
    <facebook-account-kit ref="accountKit"
      appId="193014614575624"
      version="v1.0"
      :fbAppEventsEnabled='true'
      :debug='true'
      state="somecrsf">
      <input value="+1" id="country_code" v-model="countryCode" />
      <input placeholder="phone number" id="phone_number" v-model="phoneNumber"/>
      <button @click="login(countryCode, phoneNumber)">Login via SMS</button>
    </facebook-account-kit>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
      return {
      countryCode : '+1',
      phoneNumber: ''    
    }
  },
  methods: {
    login (countryCode, phoneNumber) {
      console.log(this.$refs)
      this.$refs.accountKit.login({
        countryCode: countryCode, 
        phoneNumber: phoneNumber,
        display: 'modal'}, this.loginCallback)
    },
    loginCallback (response) {
      console.log(response)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
