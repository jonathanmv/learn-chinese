<template lang="html">
  <v-layout row wrap class="text-xs-center">
    <v-flex xs12>
      <h1 class="display-1">{{slide.title}}</h1>
    </v-flex>
    <v-flex xs8 offset-xs2>
      <v-avatar tile size="80%" class="my-5">
        <img :src="slide.sampleUri"/>
      </v-avatar>
    </v-flex>
    <v-flex xs12>
      <p class="blockquote px-0">{{slide.description}}</p>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: ['slide']
}
</script>

<style lang="css">
</style>
