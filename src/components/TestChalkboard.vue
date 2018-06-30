<template lang="html">
  <v-layout row wrap>
    <v-flex xs12>
      <Chalkboard ref="paper"/>
    </v-flex>
    <v-flex>
      <v-btn color="info" @click="clear">Try again!</v-btn>
    </v-flex>
    <v-flex>
      <v-btn color="primary" @click="check">Check</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import Chalkboard from '@/components/Chalkboard'

export default {
  components: { Chalkboard },
  methods: {
    clear () {
      this.$refs.paper.clear()
    },
    check () {
      const vector = this.$refs.paper.getImageVector()
      this.$emit('check', vector)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
