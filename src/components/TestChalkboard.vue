<template lang="html">
  <v-layout row wrap>
    <v-flex xs12>
      <Chalkboard ref="paper" :canDraw="canDraw"/>
    </v-flex>
    <v-flex>
      <v-btn v-if="showClear" color="secondary" @click="clear">Try again!</v-btn>
    </v-flex>
    <v-flex>
      <v-btn v-if="showCheck" color="primary" @click="check">Check</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import Chalkboard from '@/components/Chalkboard'

export default {
  components: { Chalkboard },
  props: {
    canDraw: {
      type: Boolean,
      default: true
    },
    showCheck: {
      type: Boolean,
      default: true
    },
    showClear: {
      type: Boolean,
      default: false
    }
  },
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
