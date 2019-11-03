<template lang="pug">
v-container
  v-card.my-2(flat outlined)
    v-card-title.overline stats
    v-card-text 
      v-row 
        v-col
          v-card(flat outlined)
            v-card-title.subtitle-1.font-weight-light 능력
            v-card-subtitle.overline abilities
            v-card-text
              v-row
                v-col 
                  v-badge.mr-10.mb-10(right color='blue')
                    template(v-slot:badge)
                      span {{mStats.abilities.nature > 7 ? 7: mStats.abilities.nature}}
                    v-chip(outlined label) 본능
                  v-badge.mr-10.mb-10(right color='blue')
                    template(v-slot:badge)
                      span {{mStats.abilities.will > 6 ? 6 : mStats.abilities.will }}
                    v-chip(outlined label) 의지
                  v-badge.mr-10.mb-10(right color='blue')
                    template(v-slot:badge)
                      span {{mStats.abilities.health > 6 ? 6 : mStats.abilities.health}}  
                    v-chip(outlined label) 건강
                  v-badge.mr-10.mb-10(right color='blue')
                    template(v-slot:badge)
                      span {{mStats.abilities.resources > 10 ? 10 : mStats.abilities.resources}}  
                    v-chip(outlined label) 자원
                  v-badge.mr-10.mb-10(right color='blue')
                    template(v-slot:badge)
                      span {{mStats.abilities.circles > 10 ? 10 : mStats.abilities.circles}}  
                    v-chip(outlined label) 인맥
          v-card.my-2(flat outlined)
            v-card-title.subtitle-1.font-weight-light 기술
            v-card-subtitle.overline skills
              v-card-text
                v-row
                  v-col 
                    v-badge.mr-10.mb-10(
                      v-for='skill in mStats.skills' 
                      right 
                      color='orange' 
                      :key='skill.skill'
                    )
                      template(v-if='skill.level>0' v-slot:badge)
                        span {{skill.level > 6 ? 6 : skill.level}}
                      v-chip(outlined label v-if='skill.level > 0') {{ skill.skill }}
          v-card.my-2(flat outlined)
            v-card-title.subtitle-1.font-weight-light 특성
            v-card-subtitle.overline traits
              v-card-text
                v-row
                  v-col 
                     v-badge.mr-10.mb-10(
                       v-for='trait in mStats.traits' 
                       right 
                       color='orange' 
                       :key='trait.trait'
                      )
                      template(v-if='trait.level > 0' v-slot:badge)
                        span {{trait.level > 3 ? 3: trait.level}}
                      v-chip(outlined label v-if='trait.level > 0' ) {{ trait.trait }}
          v-card.my-2(flat outlined)
            v-card-title.subtitle-1.font-weight-light 지식
            v-card-subtitle.overline knowledge
              v-card-text
                v-row
                  v-col 
                     v-badge.mr-10.mb-10(
                       v-for='knowledge in mStats.knowledge' 
                       right 
                       color='orange' 
                       :key='knowledge.knowledge'
                      )
                      template(v-slot:badge)
                        span {{knowledge.level > 6 ? 6 : knowledge.level}}
                      v-chip(outlined label) {{ knowledge.knowledge }}
  </template>
<script>
export default {
  name: "mouse-stats",
  props: {
    mStats: Object
  },
  created() {
    //   traits: [{ trait: "강인함", level: 3 }],
    //   skills: [{ skill: "전사2", level: 4 }],
    //   knowledge: [{ knowledge: "쥐-지식", level: 2 }]
    // };
  }
};
</script>