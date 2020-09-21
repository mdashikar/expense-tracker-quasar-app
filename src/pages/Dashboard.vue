<template>
  <q-page class="q-ma-lg">
    <h2  ref="text">Expense Tracker </h2>
  </q-page>
</template>

<script>
// typical import
import { TimelineLite } from 'gsap'

export default {
  name: 'PageIndex',
  mounted() { 
    const { text } = this.$refs
    const timeline = new TimelineLite() 
    
    timeline.to(text, 1, {
      x: 20,
      
    })
  } 
}
</script>
