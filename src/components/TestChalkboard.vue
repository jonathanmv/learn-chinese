<template lang="html">
  <div>
    <Chalkboard ref="paper"/>
    <b-button variant="info" @click="clear">Try again!</b-button>
    <b-button variant="primary" @click="check">Check</b-button>
  </div>
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
