<template lang="pug">
  v-container
    v-layout(d-flex justify-center)
      v-card(flat width='800')
        v-card-title.font-weight-light 기술
        v-card-text 
          v-stepper(v-model='step')
            v-stepper-header
              v-stepper-step(:complete='step>0' step=1 editable) 재능
              v-divider
              v-stepper-step(:complete='step>1' step=2 editable) 부모
              v-divider
              v-stepper-step(:complete='step>2' step=3 editable) 설득
              v-divider
              v-stepper-step(:complete='step>3' step=4 editable) 지도장인
              v-divider
              v-stepper-step(:complete='step>4' step=5 editable) 스승
              v-divider
              v-stepper-step(:complete='step>5' step=6 editable) 특기
            v-stepper-items
              v-stepper-content(step=1)
                v-card(flat)
                  v-card-subtitle.font-weight-light 말랑발, 정규대원은 두가지를 고를수 있습니다. 나머지는 하나를 고를 수 있습니다. 
                  v-card-text
                    v-chip-group(
                        multiple 
                        :max='getRankS1'
                        column 
                        v-model='s1Selected'
                        active-class='orange lighten-2 orange--text')
                      v-chip(
                        v-for='skill in skillS1' 
                        outlined
                        :key='skill.skill+"s1"'
                      ) {{skill.skill}}
                v-btn(color='primary' @click='step=2') 다음
              v-stepper-content(step=2)
                v-card(flat)
                  v-card-subtitle.font-weight-light 당신의 부모님생쥐는 어떤 일을 했나요? 하나를 골라주세요. 
                  v-card-text
                    v-chip-group( 
                        column 
                        v-model='s2Selected'
                        active-class='orange lighten-2 orange--text')
                      v-chip(
                        v-for='skill in skillS2' 
                        outlined
                        :key='skill.skill+"s2"'
                      ) {{skill.skill}}
                v-btn(color='primary' @click='step=3') 다음
              v-stepper-content(step=3)
                v-card(flat)
                  v-card-subtitle.font-weight-light 당신이 옳다고 설득할 때나 원하는 것이 있을때 어떻게 하나요? 
                    br 
                    br
                    span [모략가] 협박이나 속임수를 써서 상대방을 움직이나요?
                    br 
                    span [웅변가] 현란한 말솜씨로 다수의 군중을 휘어잡나요? 
                    br 
                    span [설득가] 상대 쥐에게 이유를 설명하며 당신을 돕게끔 하나요? 
                    br
                    br
                    span 순찰대장과 수호대장은 두개, 다른 계급은 하나를 고를 수 있습니다.
                  v-card-text
                    v-chip-group( 
                        column 
                        multiple
                        :max='getRankS3'
                        v-model='s3Selected'
                        active-class='orange lighten-2 orange--text')
                      v-chip(
                        v-for='skill in skillS3' 
                        outlined
                        :key='skill.skill+"s3"'
                      ) {{skill.skill}}
                v-btn(color='primary' @click='step=4') 다음
              v-stepper-content(step=4)
                v-card(flat)
                  v-card-subtitle.font-weight-light 어떤 지도장인 아래에서 수련했나요? 
                  v-card-text
                    v-chip-group( 
                        column 
                        v-model='s4Selected'
                        active-class='orange lighten-2 orange--text')
                      v-chip(
                        v-for='skill in skillS4' 
                        outlined
                        :key='skill.skill+"s4"'
                      ) {{skill.skill}}
                v-btn(color='primary' @click='step=5') 다음
              v-stepper-content(step=5)
                v-card(flat)
                  v-card-subtitle.font-weight-light 당신의 스승은 마우스 가드로써 어떤 기술을 강조했나요? 
                    br
                    span 순찰대장은 두개를 골라주세요. 나머지 계급은 하나를 골라주세요.
                  v-card-text
                    v-chip-group( 
                        column 
                        v-model='s5Selected'
                        :max='getRankS5'
                        multiple
                        active-class='orange lighten-2 orange--text')
                      v-chip(
                        v-for='skill in skillS56' 
                        outlined
                        :key='skill.skill+"s5"'
                      ) {{skill.skill}}
                v-btn(color='primary' @click='step=6') 다음
              v-stepper-content(step=6)
                v-card(flat)
                  v-card-subtitle.font-weight-light 당신의 특기는 무엇인가요? 
                    br
                    span 말랑발을 제외한 모두 하나씩 고를 수 있습니다. 캐릭터시트에 밑줄을 쳐주세요. 
                    br
                    span 다른플레이어들과 중복되지 않게 해주세요.
                  v-card-text
                    v-chip-group( 
                        v-if='rank !== "말랑발"'
                        column
                        v-model='s6Selected'
                        active-class='orange lighten-2 orange--text')
                      v-chip(
                        v-for='skill in skillS56' 
                        outlined
                        :key='skill.skill+"s6"'
                      ) {{skill.skill}}
                    v-alert.font-weight-light(
                      v-else
                      outlined 
                      color='error lighten-2' 
                    ) 말랑발은 선택할 수 없습니다.
                v-btn(color='grey' dark @click='finish') 완료
        
</template>
<script>
export default {
  name: "step-skill",
  props: {
    rank: String
  },
  methods: {
    finish() {}
  },
  computed: {
    getRankS1() {
      if (
        this.rank === "순찰대원" ||
        this.rank === "순찰대장" ||
        this.rank === "수호대장"
      )
        return 1;
      else return 2;
    },
    getRankS3() {
      if (this.rank === "순찰대장" || this.rank === "수호대장") return 2;
      else return 1;
    },

    getRankS5() {
      if (this.rank === "순찰대장") return 2;
      else return 1;
    }
  },
  watch: {
    rank: {
      handler(val) {
        // 컨디션 처리
        /* eslint-disable no-console */
        if (val === "말랑발") {
          this.$emit("skill", {
            newSkill: [],
            oldSkill: this.skillS56[this.s6Selected]
              ? [this.skillS56[this.s6Selected]]
              : []
          });
          this.s6Selected = null;

          this.$emit("skill", {
            newSkill: [],
            oldSkill: this.skillS3[this.s3Selected]
              ? [this.skillS3[this.s3Selected]]
              : []
          });
          this.s3Selected = [];

          this.$emit("skill", {
            newSkill: [],
            oldSkill: this.skillS56[this.s5Selected]
              ? [this.skillS56[this.s5Selected]]
              : []
          });
          this.s5Selected = [];
        }
        if (val === "정규대원") {
          this.$emit("skill", {
            newSkill: [],
            oldSkill: this.skillS3[this.s3Selected]
              ? [this.skillS3[this.s3Selected]]
              : []
          });
          this.s3Selected = [];

          this.$emit("skill", {
            newSkill: [],
            oldSkill: this.skillS56[this.s5Selected]
              ? [this.skillS56[this.s5Selected]]
              : []
          });
          this.s5Selected = [];
        }
        if (val === "순찰대원") {
          this.$emit("skill", {
            newSkill: [],
            oldSkill: this.s1Selected
          });
          this.s1Selected = [];

          this.$emit("skill", {
            newSkill: [],
            oldSkill: this.skillS3[this.s3Selected]
              ? [this.skillS3[this.s3Selected]]
              : []
          });
          this.s3Selected = [];

          this.$emit("skill", {
            newSkill: [],
            oldSkill: this.skillS56[this.s5Selected]
              ? [this.skillS56[this.s5Selected]]
              : []
          });
          this.s5Selected = [];
        }
        if (val === "순찰대장") {
          this.$emit("skill", {
            newSkill: [],
            oldSkill: this.s1Selected
          });
          this.s1Selected = [];
        }
        if (val === "수호대장") {
          this.$emit("skill", {
            newSkill: [],
            oldSkill: this.s1Selected
          });
          this.s1Selected = [];
          this.$emit("skill", {
            newSkill: [],
            oldSkill: this.skillS56[this.s5Selected]
              ? [this.skillS56[this.s5Selected]]
              : []
          });
          this.s5Selected = [];
        }
      }
    },
    s1Selected: {
      handler(newVal, oldVal) {
        this.$emit("skill", {
          newSkill: newVal.map(e => this.skillS1[e]),
          oldSkill: oldVal.map(e => this.skillS1[e])
        });
      }
    },
    s2Selected: {
      handler(newVal, oldVal) {
        this.$emit("skill", {
          newSkill: this.skillS2[newVal] ? [this.skillS2[newVal]] : [],
          oldSkill: this.skillS2[oldVal] ? [this.skillS2[oldVal]] : []
        });
      }
    },
    s3Selected: {
      handler(newVal, oldVal) {
        this.$emit("skill", {
          newSkill: newVal.map(e => this.skillS3[e]),
          oldSkill: oldVal.map(e => this.skillS3[e])
        });
      }
    },
    s4Selected: {
      handler(newVal, oldVal) {
        this.$emit("skill", {
          newSkill: this.skillS4[newVal] ? [this.skillS4[newVal]] : [],
          oldSkill: this.skillS4[oldVal] ? [this.skillS4[oldVal]] : []
        });
      }
    },
    s5Selected: {
      handler(newVal, oldVal) {
        this.$emit("skill", {
          newSkill: newVal.map(e => this.skillS56[e]),
          oldSkill: oldVal.map(e => this.skillS56[e])
        });
      }
    },
    s6Selected: {
      handler(newVal, oldVal) {
        if (this.rank === "말랑발") {
          this.s6Selected = null;
          return;
        }
        this.$emit("skill", {
          newSkill: this.skillS56[newVal] ? [this.skillS56[newVal]] : [],
          oldSkill: this.skillS56[oldVal] ? [this.skillS56[oldVal]] : []
        });
      }
    }
  },
  data() {
    return {
      step: 0,
      s1Selected: [],
      s2Selected: null,
      s3Selected: [],
      s4Selected: null,
      s5Selected: [],
      s6Selected: null,
      skillS1: [
        { skill: "과학자", level: 1 },
        { skill: "사냥꾼", level: 1 },
        { skill: "정찰대원", level: 1 },
        { skill: "교관", level: 1 },
        { skill: "서기", level: 1 },
        { skill: "제분사", level: 1 },
        { skill: "기상관측가", level: 1 },
        { skill: "석공", level: 1 },
        { skill: "제빵사", level: 1 },
        { skill: "길잡이", level: 1 },
        { skill: "설득가", level: 1 },
        { skill: "조선공", level: 1 },
        { skill: "대장장이", level: 1 },
        { skill: "양봉업자", level: 1 },
        { skill: "지도제작자", level: 1 },
        { skill: "동물학쥐", level: 1 },
        { skill: "양조장이", level: 1 },
        { skill: "채집가", level: 1 },
        { skill: "모략가", level: 1 },
        { skill: "옹기장이", level: 1 },
        { skill: "치료사", level: 1 },
        { skill: "모험가", level: 1 },
        { skill: "요리사", level: 1 },
        { skill: "투사", level: 1 },
        { skill: "목수", level: 1 },
        { skill: "웅변가", level: 1 },
        { skill: "행정가", level: 1 },
        { skill: "방직공", level: 1 },
        { skill: "유리공", level: 1 },
        { skill: "흥정꾼", level: 1 },
        { skill: "벌레치기", level: 1 },
        { skill: "일꾼", level: 1 },
        { skill: "병기공", level: 1 },
        { skill: "전사", level: 1 }
      ],
      skillS2: [
        { skill: "대장장이", level: 1 },
        { skill: "석공", level: 1 },
        { skill: "제빵사", level: 1 },
        { skill: "목수", level: 1 },
        { skill: "양봉업자", level: 1 },
        { skill: "조선공", level: 1 },
        { skill: "방직공", level: 1 },
        { skill: "양조장이", level: 1 },
        { skill: "지도제작자", level: 1 },
        { skill: "벌레치기", level: 1 },
        { skill: "옹기장이", level: 1 },
        { skill: "채집가", level: 1 },
        { skill: "병기공", level: 1 },
        { skill: "유리공", level: 1 },
        { skill: "서기", level: 1 },
        { skill: "제분사", level: 1 }
      ],
      skillS3: [
        { skill: "모략가", level: 1 },
        { skill: "웅변가", level: 1 },
        { skill: "설득가", level: 1 }
      ],
      skillS4: [
        { skill: "대장장이", level: 1 },
        { skill: "석공", level: 1 },
        { skill: "일꾼", level: 1 },
        { skill: "목수", level: 1 },
        { skill: "양봉업자", level: 1 },
        { skill: "제분사", level: 1 },
        { skill: "방직공", level: 1 },
        { skill: "양조장이", level: 1 },
        { skill: "제빵사", level: 1 },
        { skill: "벌레치기", level: 1 },
        { skill: "옹기장이", level: 1 },
        { skill: "지도제작자", level: 1 },
        { skill: "병기공", level: 1 },
        { skill: "요리사", level: 1 },
        { skill: "채집가", level: 1 },
        { skill: "서기", level: 1 },
        { skill: "유리공", level: 1 },
        { skill: "치료사", level: 1 }
      ],
      skillS56: [
        { skill: "교관", level: 1 },
        { skill: "모험가", level: 1 },
        { skill: "정찰대원", level: 1 },
        { skill: "기상관측가", level: 1 },
        { skill: "사냥꾼", level: 1 },
        { skill: "치료사", level: 1 },
        { skill: "길잡이", level: 1 },
        { skill: "전사", level: 1 }
      ]
    };
  }
};
</script>