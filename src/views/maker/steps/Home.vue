<template lang="pug">
  v-container
    v-layout(d-flex justify-center)
      v-card(flat)
        v-card-title.font-weight-light 고향
        v-card-text 
          v-sheet.mx-auto(flat max-width='800')
            v-slide-group.pa-4(
              v-model='selected'
              active-class='orange lighten-2'
              show-arrows
            ) 
              v-slide-item(
                v-for='home in homes'
                :key='homes.name'
                v-slot:default='{active, toggle}'
              )
                v-card.ma-4(flat outlined width='300' @click='toggle')
                  v-card-title.font-weight-light(color='white') {{ home.name }}
                  v-card-subtitle {{ home.desc }}
                  v-card-text 
                    v-row.d-flex.justify-around 
                      v-card.mx-1(flat)
                        v-card-subtitle 기술
                        v-card-text 
                          li(
                            v-for='skill in home.skills' 
                            :key='home.name+skill'
                          ) {{ skill }}
                      v-card.mx-1(flat)
                        v-card-subtitle 특성
                        v-card-text 
                          li(
                            v-for='trait in home.traits' 
                            :key='home.name+trait'
                          ) {{ trait }}
              v-slide-item(
                v-slot:default='{active, toggle}'
              )
                v-card.ma-4(flat outlined width='300' @click='toggle')
                  v-card-title.font-weight-light(color='white') 직접 만들어보기 
                  v-card-subtitle 지도에서 고르거나 직접 만들어봐요
                  v-card-text 
                    v-row.d-flex.justify-around 
                      v-card.mx-1(flat)
                        v-card-subtitle 기술
                        v-card-text 만들어서 추가
                      v-card.mx-1(flat)
                        v-card-subtitle 특성
                        v-card-text 만들어서 추가
</template>
<script>
import homes from "@/constants/homes.js";
export default {
  name: "step-home",
  data() {
    return {
      selected: [],
      homes: null,
      selectedHome: null,
      createdHome: {
        name: "직접 만들기",
        skills: [],
        traits: []
      }
    };
  },
  created() {
    this.homes = homes;
  },
  watch: {
    selected: {
      handler() {
        this.selectedHome =
          this.selected >= this.homes.length
            ? this.createdHome
            : this.homes[this.selected];
        this.$emit("home", this.selectedHome);
      }
    }
  }
};
</script>