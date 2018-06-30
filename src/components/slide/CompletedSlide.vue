<template lang="html">
  <v-layout row wrap class="text-xs-center">
    <v-flex xs12 class="my-5">
      <v-btn  outline dark icon color="blue lighten-2" class="huge">
        <v-icon>done</v-icon>
      </v-btn>
    </v-flex>
    <v-flex xs12>
      <h1 class="display-1">{{slide.title}}</h1>
    </v-flex>
    <v-flex xs12>
      <p class="blockquote px-0">{{slide.description}}</p>
    </v-flex>
    <v-flex xs12>
      <v-btn @click="levelCompleted" color="success">Next!</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['slide'],
  methods: {
    ...mapActions([
      'levelCompleted'
    ])
  }
}
</script>

<style lang="css" scoped>
  .huge {
    min-width: 150px;
    min-height: 150px;
  }
  .huge i {
    font-size: 6rem;
  }
</style>
