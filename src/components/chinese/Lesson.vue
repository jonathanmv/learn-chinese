<template lang="html">
  <b-container v-if="slides && slides.length">
    <h1>{{lessonTitle}}</h1>
    <div>
      <p>{{slide.description}}</p>
      <h3>{{slide.title}}</h3>
      <Chalkboard ref="paper" @pen-up="penUp"/>
      <div>
        <b-button v-if="eraser" variant="info" @click="tryAgain">Try again!</b-button>
        <b-button v-if="passed" variant="primary" @click="next">Next!</b-button>
      </div>
    </div>
  </b-container>
</template>

<script>
import brain from 'brain.js'

import Chalkboard from '@/components/Chalkboard'

export default {
  components: { Chalkboard },
  properties: ['model', 'slides', 'title', 'nextLesson'],
  data: () => ({
    slideIndex: 0,
    eraser: false,
    passed: false
  }),
  computed: {
    slide () {
      return this.slides[this.slideIndex]
    }
  },
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
    next () {
      if (this.slideIndex + 1 < this.slides.length) {
        this.newPaper()
        this.slideIndex++
      } else {
        this.$router.push({ name: this.nextLesson })
      }
    },
    penUp () {
      this.passed = this.checkIfPassed()
      this.eraser = true && !this.passed
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
