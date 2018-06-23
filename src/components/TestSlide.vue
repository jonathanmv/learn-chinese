<template lang="html">
  <div>
    <b-row>
      <b-col>
          <h1>{{slide.title}}</h1>
      </b-col>
      <b-col>
        <b-link to="/chinese/roadmap">X</b-link>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <TestChalkboard :model="slide.model" :goal="slide.goal" passed="onPassed" />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <p>{{slide.description}}</p>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import TestChalkboard from '@/components/TestChalkboard'

export default {
  props: ['slide'],
  components: { TestChalkboard },
  methods: {
    onPassed () {
      alert('Next')
    }
  }
}
</script>

<style lang="css">
</style>
