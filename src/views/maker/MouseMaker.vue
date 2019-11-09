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
                  v-tab 완성

                  v-tab-item 
                    Rank(@rank='rank')
                  v-tab-item 
                    Home(@home='home')
                  v-tab-item 
                    Skills(:rank='mouse.info.rank',@skill='skills')
                  v-tab-item 
                    Nature(@nature='nature')
                  v-tab-item 
                    Knowledge(@knowledge='knowledge')
                  v-tab-item 
                    Traits(@traits='traits')
                  v-tab-item 
                    Complete(@complete='complete')
          v-col
            MouseStats(:mStats='mouse.stats')
    v-card(flat)
       v-alert(dense border='top' colored-border color='blue')  
        v-icon mdi-twitter 
        a(href='https://twitter.com/_koshasha') @_koshasha
        span.font-weight-thin.caption ...스페샬땡스: 깊티로 크툴루 꽂아서 입문시켜주신 폭님. 마가드 룰북 뽐뿌넣어 그자리에서 지르게 만드신 폭님.
</template>

<script>
import Rank from "@/views/maker/steps/Rank.vue";
import Home from "@/views/maker/steps/Home.vue";
import Skills from "@/views/maker/steps/Skills.vue";
import Nature from "@/views/maker/steps/Nature.vue";
import Knowledge from "@/views/maker/steps/Knowledge.vue";
import Traits from "@/views/maker/steps/Traits.vue";
import Complete from "@/views/maker/steps/Complete.vue";
import MouseStats from "@/views/maker/MouseStats.vue";
import Calculator from "@/statCalculator.js";
// import _ from "lodash";

export default {
  name: "mouse-maker-stepper",
  components: {
    Rank,
    Home,
    Skills,
    Nature,
    Knowledge,
    Traits,
    Complete,
    MouseStats
  },
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
          abilities: {
            nature: 3,
            will: 0,
            health: 0,
            resources: 0,
            circles: 0
          },
          skills: [],
          traits: []
        }
      }
    };
  },
  methods: {
    rank(rank) {
      this.mouse.info.rank = rank.newRank ? rank.newRank.kr : null;
      /* eslint-disable no-console */
      // this.mouse.stats.abilities = rank.stats;
      // console.log(Object.is(this.mouse.stats, rank.oldRank.stats));
      console.log(rank.newRank);
      if (rank.newRank === undefined) {
        Calculator.subtract(this.mouse.stats, rank.oldRank.stats);
      } else if (rank.oldRank === undefined) {
        Calculator.add(this.mouse.stats, rank.newRank.stats);
      } else {
        Calculator.add(this.mouse.stats, rank.newRank.stats);
        Calculator.subtract(this.mouse.stats, rank.oldRank.stats);
      }
    },
    home(home) {
      this.mouse.info.home = home.newHome ? home.newHome.name : null;

      if (home.newHome === undefined) {
        Calculator.subtract(this.mouse.stats, home.oldHome.stats);
      } else if (home.oldHome === undefined) {
        Calculator.add(this.mouse.stats, home.newHome.stats);
      } else {
        Calculator.subtract(this.mouse.stats, home.oldHome.stats);
        Calculator.add(this.mouse.stats, home.newHome.stats);
      }
    },
    skills(skill) {
      if (skill.newSkill === undefined) {
        Calculator.subtract(this.mouse.stats, { skills: skill.oldSkill });
      } else if (skill.oldSkill === undefined) {
        Calculator.add(this.mouse.stats, { skills: skill.newSkill });
      } else {
        Calculator.subtract(this.mouse.stats, { skills: skill.oldSkill });
        Calculator.add(this.mouse.stats, { skills: skill.newSkill });
      }
      console.log("skills emitted", skill);
    },
    nature(item) {
      console.log("nature emitted", item);
    },
    knowledge(item) {
      console.log("knowledge emitted", item);
    },
    traits(item) {
      console.log("traits emitted", item);
    },
    complete(item) {
      console.log("complete emitted", item);
    }
  }
};
</script>