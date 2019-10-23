<template lang="pug">
  v-container
    v-card
      v-tabs(vertical)
        v-tab step 1: 계급
        v-tab step 2: 고향
        v-tab step 3: 기술
        v-tab step 4: 본능
        v-tab step 5: 지식
        v-tab step 6: 특성
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
import ranks from "@/constants/ranks.js";

export default {
  name: "mouse-maker-stepper",
  mounted() {
    this.mouse.name = ranks;
  },
  data() {
    return {
      mouse: {
        name: null,
        rank: null,
        stats: {
          skills: []
        }
      }
    };
  }
};
</script>