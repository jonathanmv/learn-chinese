<template lang="html">
  <b-container>
    <h1>{{levelTitle}}</h1>
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

import { model } from './shu-model.json'

const SHU = 'Shù'
const SHI = 'Shí'
const SHIYI = 'Shíyī'
const SHIER = 'Shí\'ér'
const ERSHI = 'Érshí'

export default {
  components: { Chalkboard },
  data: () => ({
    levelTitle: 'Write Chinese',
    model,
    slideIndex: 0,
    slides: [
      {
        title: 'Draw a vertical line',
        description: 'Another basic component of Chinese writing is the vertical line',
        goal: SHU
      },
      {
        title: 'Draw a cross',
        description: 'The vertical line in Chinese is a stroke called Shù. It doesn\'t have a meaning when standing alone, however if you cross it with a horizontal line you will have Shí, the number 10',
        goal: SHI
      },
      {
        title: 'Draw the number 11',
        description: 'So, a cross is the number 10 and a horizontal line is the number 1. In Chinese, the number 11 is written as the number 10 followed by the number 1',
        goal: SHIYI
      },
      {
        title: 'Draw the number 12',
        description: 'What about 12?',
        goal: SHIER
      },
      {
        title: 'Draw the number 20',
        description: 'When the number 10 is followed by the number 2 we get 12, however if we switch number, writing 2 first and then 10, we get the number 20, 2 times 10.',
        goal: ERSHI
      }
    ],
    eraser: false,
    passed: false,
    nextLevel: 'hengShuWords'
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
        this.$router.push({ name: this.nextLevel })
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
