<template>
  <b-container id="app" fluid>
    <b-row align-h="center">
      <b-col sm="12" md="8" lg="6">
        <router-view />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
