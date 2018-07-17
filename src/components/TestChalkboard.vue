<template lang="html">
  <v-layout row wrap>
    <v-flex xs12>
      <Chalkboard class="elevation-1" ref="paper" :canDraw="canDraw"/>
    </v-flex>
    <v-flex xs8 offset-xs2>
      <v-btn v-bind:class="[showClear ? '' : 'invisible']" color="secondary" @click="clear">Clear</v-btn>
      <v-btn v-bind:class="[showCheck ? '' : 'invisible']" color="primary" @click="check">Check</v-btn>
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
      const vector = this.$refs.paper.getImageVector(10)
      this.$emit('check', vector)
    }
  }
}
</script>

<style lang="css" scoped>
  .invisible {
    visibility: hidden;
    transition: none;
  }
</style>
