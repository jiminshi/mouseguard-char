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
                      span {{mStats.abilities.nature}}
                    v-chip(outlined label) 본능
                  v-badge.mr-10.mb-10(right color='blue')
                    template(v-slot:badge)
                      span {{mStats.abilities.will}}
                    v-chip(outlined label) 의지
                  v-badge.mr-10.mb-10(right color='blue')
                    template(v-slot:badge)
                      span {{mStats.abilities.health}}  
                    v-chip(outlined label) 건강
                  v-badge.mr-10.mb-10(right color='blue')
                    template(v-slot:badge)
                      span {{mStats.abilities.resources}}  
                    v-chip(outlined label) 자원
                  v-badge.mr-10.mb-10(right color='blue')
                    template(v-slot:badge)
                      span {{mStats.abilities.circles}}  
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
                      template(v-slot:badge)
                        span {{skill.level}}
                      v-chip(outlined label) {{ skill.skill }}
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
                      template(v-slot:badge)
                        span {{trait.level}}
                      v-chip(outlined label) {{ trait.trait }}
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
                        span {{knowledge.level}}
                      v-chip(outlined label) {{ knowledge.knowledge }}
  </template>
<script>
export default {
  name: "mouse-stats",
  props: {
    info: Object,
    stats: Object
  },
  data() {
    return {
      mInfo: null,
      mStats: null
    };
  },
  created() {
    this.mInfo = {
      name: null,
      age: null,
      home: null,
      rank: null,
      cloak: null,
      belief: null,
      instinct: null,

      parents: null,
      mentor: null,
      senior: null,
      friend: null,
      enemy: null,
      contacts: null
    };
    this.mStats = {
      abilities: {
        nature: 3,
        will: 2,
        health: 6,
        resources: 2,
        circles: 2
      },
      traits: [
        { trait: "강인함", level: 3 },
        { trait: "강인함2", level: 3 },
        { trait: "강인함4", level: 3 },
        { trait: "강인함5", level: 3 },
        { trait: "강인함6", level: 3 },
        { trait: "강인함7", level: 3 },
        { trait: "강인함8", level: 3 }
      ],
      skills: [
        { skill: "전사2", level: 4 },
        { skill: "전사3", level: 4 },
        { skill: "전사4", level: 4 },
        { skill: "전사5", level: 4 }
      ],
      knowledge: [{ knowledge: "쥐-지식", level: 2 }]
    };
  }
};
</script>