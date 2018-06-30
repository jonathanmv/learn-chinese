<template>
  <v-app>
    <!-- <v-navigation-drawer app></v-navigation-drawer> -->
    <!-- <v-toolbar app>
      <v-toolbar-title>Chinese</v-toolbar-title>
    </v-toolbar> -->
    <v-content>
      <v-container fluid>
        <v-layout>
          <v-flex xs12 sm6 offset-sm3>
            <router-view />
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <!-- <v-footer app></v-footer> -->
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
