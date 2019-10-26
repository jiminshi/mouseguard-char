<template lang="pug">
  v-container
    v-card(flat)
      v-alert(dense border='bottom' colored-border color='blue') 
        h1.font-weight-light 마우스가드 메이커
    v-card(flat)
      v-card-text
        v-row
          v-col(cols=7)
            v-container
              v-card.my-2(flat outlined)
                v-tabs(vertical grow)
                  v-tab step 1: 계급
                  v-tab step 2: 고향
                  v-tab step 3: 기술
                  v-tab step 4: 본능
                  v-tab step 5: 지식
                  v-tab step 6: 특성

                  v-tab-item 
                    Rank
                  v-tab-item 
                    Home
                  v-tab-item 
                    Skills
                  v-tab-item 
                    Nature
                  v-tab-item 
                    Knowledge
                  v-tab-item 
                    Traits
          v-col
            MouseStats
    v-card(flat)
       v-alert(dense border='top' colored-border color='blue')  
        v-icon mdi-twitter 
        a(href='https://twitter.com/_koshasha') @_koshasha
        span.font-weight-thin.caption ...스페샬땡스: 깊티로 크툴루 꽂아서 입문시켜주신 폭님. 마가드 룰북 뽐뿌넣어 그자리에서 지르게 만드신 폭님.
</template>

<script>
// import ranks from "@/constants/ranks.js";
import Rank from "@/views/maker/steps/Rank.vue";
import Home from "@/views/maker/steps/Home.vue";
import Skills from "@/views/maker/steps/Skills.vue";
import Nature from "@/views/maker/steps/Nature.vue";
import Knowledge from "@/views/maker/steps/Knowledge.vue";
import Traits from "@/views/maker/steps/Traits.vue";
import MouseStats from "@/views/maker/MouseStats.vue";

export default {
  name: "mouse-maker-stepper",
  components: { Rank, Home, Skills, Nature, Knowledge, Traits, MouseStats },
  mounted() {},
  data() {
    return {
      mouse: {
        info: {
          name: null,
          rank: null,
          home: null,
          age: null
        },
        stats: {
          skills: [],
          abilities: [],
          traits: []
        }
      }
    };
  }
};
</script>