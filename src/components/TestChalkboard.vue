<template lang="html">
  <v-flex>
    <Chalkboard ref="paper"/>
    <v-btn color="info" @click="clear">Try again!</v-btn>
    <v-btn color="primary" @click="check">Check</v-btn>
  </v-flex>
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
