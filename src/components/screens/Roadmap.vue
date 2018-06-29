<template lang="html">
  <v-flex>
    <v-card v-for="level in levels" :key="level.pathName">
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">{{level.title}}</h3>
          <div>{{level.description}}</div>
        </div>
      </v-card-title>
      <v-card-actions>
        <v-btn @click="setCurrentLevel(level)" flat color="primary">Start</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
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
