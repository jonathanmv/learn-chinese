<template lang="html">
  <b-container>
    <h1>Write Chinese</h1>
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
import hengModel from './heng-model.json'

const YI = 'Yī'
const ER = 'Er'
const SAN = 'Sān'

const slides = [
  {
    title: 'Draw a horizontal line',
    description: `Let's start with the basics of Chinese writing. Can you draw a horizontal line?`,
    goal: YI
  },
  {
    title: 'Draw a héng on top of another héng',
    description: `Great! The horizontal line is called héng and is also the number 1 in Chinese. If you draw a héng on top of another héng you will be drawing the number 2.`,
    goal: ER
  },
  {
    title: 'Draw the number 3 in Chinese',
    description: `Can you guess the number 3?`,
    goal: SAN
  }
]

export default {
  components: { Chalkboard },
  data: () => ({
    net: null,
    passed: false,
    eraser: false,
    slideIndex: 0
  }),
  computed: {
    slide () {
      return slides[this.slideIndex]
    }
  },
  methods: {
    newPaper () {
      this.$refs.paper.clear()
      this.eraser = false
      this.passed = false
    },
    checkIfPassed () {
      const { net, slideIndex } = this
      const vector = this.$refs.paper.getImageVector()
      const interpretation = brain.likely(vector, net)
      const { goal } = slides[slideIndex]
      console.log(slideIndex, interpretation, goal)
      return interpretation === goal
    },
    tryAgain () {
      this.newPaper()
    },
    next () {
      if (this.slideIndex + 1 < slides.length) {
        this.newPaper()
        this.slideIndex++
      } else {
        alert('Level completed! More coming soon')
      }
    },
    penUp () {
      this.passed = this.checkIfPassed()
      this.eraser = true && !this.passed
    }
  },
  mounted () {
    this.net = new brain.NeuralNetwork()
    this.net.fromJSON(hengModel.model)
  }
}
</script>

<style lang="css" scoped>
</style>
