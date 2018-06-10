<template lang="html">
  <Lesson :slides="slides" :model="model" :title="title" />
</template>

<script>
import { model } from './heng-shu-model.json'

export default {
  data: () => ({
    model,
    title: 'Words in Chinese',
    nextLevel: '/',
    slides: [

    ]
  })
}
</script>

<style lang="css">
</style>
