<template>
  <v-container>
    <v-layout d-flex justify-center>
      <v-card flat>
        <v-card-title class="font-weight-light"> 가드 계급 </v-card-title>
        <v-card-text>
          <v-sheet class="mx-auto" flat max-width="800">
            <v-slide-group
              v-model="selected"
              class="pa-4"
              active-class="orange lighten-2"
              show-arrows
            >
              <v-slide-item
                v-for="rank in ranks"
                :key="rank.en"
                v-slot:default="{ active, toggle }"
              >
                <v-card flat outlined class="ma-4" width="300" @click="toggle">
                  <v-card-title color="white" class="font-weight-light">
                    {{ rank.kr }}
                  </v-card-title>
                  <v-card-subtitle>
                    나이 {{ rank.stats.minAge + "-" + rank.stats.maxAge }}
                  </v-card-subtitle>
                  <v-card-text>
                    <v-row class="d-flex justify-around">
                      <v-card flat class="mx-1">
                        <v-card-subtitle> 능력 </v-card-subtitle>
                        <v-card-text>
                          <li
                            v-for="ability in rank.stats.abilities"
                            :key="rank.en + ability.ability"
                          >
                            {{ ability.ability + ": " + ability.level }}
                          </li>
                        </v-card-text>
                      </v-card>
                      <v-card flat>
                        <v-card-subtitle> 기술 </v-card-subtitle>
                        <v-card-text>
                          <li
                            v-for="skill in rank.stats.skills"
                            :key="rank.en + skill.skill"
                          >
                            {{ skill.skill + ": " + skill.level }}
                          </li>
                        </v-card-text>
                      </v-card>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-slide-item>
            </v-slide-group>
          </v-sheet>
        </v-card-text>
      </v-card>
    </v-layout>
  </v-container>
</template>
<script>
import ranks from "@/constants/ranks.js";

export default {
  name: "step-rank",
  data() {
    return {
      selected: [],
      ranks: null,
      selectedRank: null
    };
  },
  created() {
    this.ranks = ranks;
  },
  watch: {
    selected: {
      handler(newVal, oldVal) {
        /* eslint-disable no-console */
        this.selectedRank = this.ranks[this.selected];
        this.$emit("rank", {
          newRank: this.ranks[newVal],
          oldRank: this.ranks[oldVal]
        });
      }
    }
  }
};
</script>