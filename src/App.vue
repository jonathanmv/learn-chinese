<template>
  <v-app>
    <v-content>
      <v-container fluid>
        <v-layout>
          <v-flex xs12 sm6 offset-sm3>
            <router-view />
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
