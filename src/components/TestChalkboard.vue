<template lang="html">
  <div>
    <Chalkboard ref="paper" @pen-up="penUp"/>
    <b-button v-if="eraser" variant="info" @click="tryAgain">Try again!</b-button>
  </div>
</template>

<script>
import brain from 'brain.js'

import Chalkboard from '@/components/Chalkboard'

export default {
  components: { Chalkboard },
  properties: ['model', 'goal'],
  data: () => ({
    eraser: false,
    passed: false
  }),
  methods: {
    newPaper () {
      this.$refs.paper.clear()
      this.eraser = false
      this.passed = false
    },
    checkIfPassed () {
      const { net, slides, slideIndex } = this
      const vector = this.$refs.paper.getImageVector()
      const interpretation = brain.likely(vector, net)
      const { goal } = slides[slideIndex]
      return interpretation === goal
    },
    tryAgain () {
      this.newPaper()
    },
    penUp () {
      this.passed = this.checkIfPassed()
      this.eraser = true && !this.passed
      if (this.passed) {
        this.$emit('passed')
      }
    }
  },
  mounted () {
    this.net = new brain.NeuralNetwork()
    this.net.fromJSON(this.model)
  }
}
</script>

<style lang="css" scoped>
</style>
