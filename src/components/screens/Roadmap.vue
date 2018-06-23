<template lang="html">
  <div class="">
    <h1 class="text-center">Chinese</h1>
    <b-card-group deck>
      <b-card v-for="level in levels" :title="level.title" :key="level.pathName">
        <p class="card-text">
          {{level.description}}
        </p>
        <b-button @click="setCurrentLevel(level)" variant="primary">Start</b-button>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  methods: {
    ...mapActions([
      'setCurrentLevel'
    ])
  },
  computed: {
    ...mapGetters([
      'levels'
    ])
  }
}
</script>

<style lang="css">
</style>
