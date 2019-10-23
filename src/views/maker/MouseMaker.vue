<template lang="pug">
  v-container
    v-card
      v-tabs(vertical)
        v-tab step 1: Rank
        v-tab step 2: Home
        v-tab step 3: Skills
        v-tab step 4: Knowledge
        v-tab step 5: Nature
        v-tab step 6: Mentor
        v-tab step 7: Senior Artisan
        v-tab step 8: Parents
        v-tab step 9: Starting
        v-tab step 10: What
        v-tab step 11: Was it

        v-tab-item 
          v-card(flat)
            h1 {{mouse.name}}
        v-tab-item 
          v-card(flat)
            h1 home
        v-tab-item 
          v-card(flat)
            h1 skills
</template>

<script>
import constants from '@/constants'

export default {
  name: 'mouse-maker-stepper',
  mounted(){
    this.mouse.name = constants.abilities
  },
  data() {
    return {
      mouse: {
        name: null,
        rank: null, 
        stats: {
          skills: [], 
          
        }
      }
    }
  }
}
</script>