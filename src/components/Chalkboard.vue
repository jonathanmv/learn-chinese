<template lang="html">
  <canvas ref="canvas" class="border" width="200" height="200" :style="{ 'background-color': backgroundColor }"></canvas>
</template>

<script>
import SignaturePad from 'signature_pad'
import getVectorFromCanvas from '@/helpers/getVectorFromCanvas'

// https://www.designpieces.com/2014/02/chalkboard-look-and-feel/

export default {
  name: 'Chalkboard',
  props: {
    canDraw: {
      type: Boolean,
      default: true
    },
    penColor: {
      // default: '#f4f4f0'
      default: '#404047'
    },
    backgroundColor: {
      // default: '#404047'
      default: '#FFF'
    },
    showHits: {
      default: false
    }
  },
  watch: {
    canDraw (canDraw) {
      if (canDraw) {
        this.pad.on()
      } else {
        this.pad.off()
      }
    }
  },
  data: () => ({
    pad: null
  }),
  methods: {
    getImageVector (columns = 20) {
      const canvas = this.$refs.canvas
      const { showHits } = this
      return getVectorFromCanvas({ canvas, columns, showHits })
    },
    clear () {
      this.pad.clear()
    },
    resizeCanvas () {
      var ratio = Math.max(window.devicePixelRatio || 1, 1)
      const { canvas } = this.$refs
      canvas.width = canvas.offsetWidth * ratio
      canvas.height = canvas.offsetHeight * ratio
      canvas.getContext('2d').scale(ratio, ratio)
      this.pad.clear() // otherwise isEmpty() might return incorrect value
    }
  },
  mounted () {
    const canvas = this.$refs.canvas
    const { penColor } = this
    const props = { penColor }
    this.pad = new SignaturePad(canvas, props)
    this.pad.onBegin = () => this.$emit('pen-down')
    this.pad.onEnd = () => this.$emit('pen-up')
    // this.resizeCanvas()
  }
}
</script>

<style lang="css" scoped>
</style>
