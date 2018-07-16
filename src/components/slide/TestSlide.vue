<template lang="html">
  <v-flex class="text-xs-center">
    <h1 class="display-1">{{slide.title}}</h1>
    <TestChalkboard class="my-5" ref="board" @check="checkDrawing" :showCheck="showCheck" :showClear="showClear" :canDraw="canDraw" />
    <p class="blockquote px-0">{{slide.description}}</p>
    <v-snackbar :timeout="timeout" bottom v-model="showError">
      Nop! Please try again.
      <v-btn flat color="pink" @click.native="showError = false">Close</v-btn>
    </v-snackbar>
  </v-flex>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import TestChalkboard from '@/components/TestChalkboard'

export default {
  props: ['slide'],
  components: { TestChalkboard },
  data: () => ({
    showError: false,
    showCheck: true,
    showClear: false,
    canDraw: true,
    timeout: 2000
  }),
  watch: {
    slide () {
      this.reset()
    }
  },
  computed: {
    ...mapGetters([
      'isCurrentDrawingValid'
    ])
  },
  methods: {
    ...mapActions([
      'setCurrentDrawingValid',
      'evaluateVector'
    ]),
    checkDrawing (vector) {
      this.evaluateVector(vector)
      this.canDraw = !this.isCurrentDrawingValid
      this.showCheck = !this.isCurrentDrawingValid
      this.showClear = !this.isCurrentDrawingValid
      this.showError = !this.isCurrentDrawingValid
    },
    reset () {
      this.$refs.board.clear()
      this.showCheck = true
      this.showClear = false
      this.canDraw = true
    }
  },
  mounted () {
    this.reset()
  }
}
</script>

<style lang="css">
</style>
