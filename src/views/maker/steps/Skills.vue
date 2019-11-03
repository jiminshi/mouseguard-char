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
                  v-card-subtitle.font-weight-light [TODO:CONDITION] 말랑발, 정규대원은 두가지를 골라주세요. 나머지는 하나를 골라주세요. 
                  v-card-text
                    v-chip-group(
                        multiple 
                        max=2
                        column 
                        v-model='s1Selected'
                        active-class='orange lighten-2 orange--text')
                      v-chip(
                        v-for='skill in skillS1' 
                        outlined
                        :key='skill+"s1"'
                      ) {{skill}}
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
                        :key='skill+"s2"'
                      ) {{skill}}
                v-btn(color='primary' @click='step=3') 다음
              v-stepper-content(step=3)
                v-card(flat)
                  v-card-subtitle.font-weight-light 당신이 옳다고 설득할 때나 원하는 것이 있을때 어떻게 하나요? 
                    br 
                    span [TODO:CONDITION] 순찰대장과 수호대장은 두개, 다른 계급은 하나를 골라주세요.
                  v-card-text
                    v-chip-group( 
                        column 
                        multiple
                        v-model='s3Selected'
                        active-class='orange lighten-2 orange--text')
                      v-chip(
                        v-for='skill in skillS3' 
                        outlined
                        :key='skill+"s3"'
                      ) {{skill}}
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
                        :key='skill+"s4"'
                      ) {{skill}}
                v-btn(color='primary' @click='step=5') 다음
              v-stepper-content(step=5)
                v-card(flat)
                  v-card-subtitle.font-weight-light 당신의 스승은 무엇을 강조했나요? 
                    br
                    span [TODO:CONDITION] 순찰대장은 두개를 골라주세요. 나머지 계급은 하나를 골라주세요.
                  v-card-text
                    v-chip-group( 
                        column 
                        v-model='s5Selected'
                        active-class='orange lighten-2 orange--text')
                      v-chip(
                        v-for='skill in skillS56' 
                        outlined
                        :key='skill+"s5"'
                      ) {{skill}}
                v-btn(color='primary' @click='step=6') 다음
              v-stepper-content(step=6)
                v-card(flat)
                  v-card-subtitle.font-weight-light 당신의 특기는 무엇인가요? 
                    br
                    span [TODO:CONDITION] 말랑발을 제외한 모두 하나씩 골라주세요. 캐릭터시트에 밑줄을 쳐주세요. 
                    br
                    span 다른플레이어들과 중복되지 않게 해주세요.
                  v-card-text
                    v-chip-group( 
                        column 
                        max=2
                        v-model='s6Selected'
                        active-class='orange lighten-2 orange--text')
                      v-chip(
                        v-for='skill in skillS56' 
                        outlined
                        :key='skill+"s6"'
                      ) {{skill}}
                v-btn(color='grey' dark @click='finish') 완료
        
</template>
<script>
export default {
  name: "step-skill",
  props: {
    rank: String
  },
  watch: {
    s1Selected: {
      handler(newVal, oldVal) {
        this.$emit("skill", {
          newSkill: newVal,
          oldSkill: oldVal
        });
      }
    },
    s2Selected: {
      handler(newVal, oldVal) {
        this.$emit("skill", {
          newSkill: newVal,
          oldSkill: oldVal
        });
      }
    },
    s3Selected: {
      handler(newVal, oldVal) {
        this.$emit("skill", {
          newSkill: newVal,
          oldSkill: oldVal
        });
      }
    },
    s4Selected: {
      handler(newVal, oldVal) {
        this.$emit("skill", {
          newSkill: newVal,
          oldSkill: oldVal
        });
      }
    },
    s5Selected: {
      handler(newVal, oldVal) {
        this.$emit("skill", {
          newSkill: newVal,
          oldSkill: oldVal
        });
      }
    },
    s6Selected: {
      handler(newVal, oldVal) {
        this.$emit("skill", {
          newSkill: newVal,
          oldSkill: oldVal
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
      s5Selected: null,
      s6Selected: null,
      skillS1: [
        "과학자",
        "사냥꾼",
        "정찰대원",
        "교관",
        "서기",
        "제분사",
        "기상관측가",
        "석공",
        "제빵사",
        "길잡이",
        "설득가",
        "조선공",
        "대장장이",
        "양봉업자",
        "지도제작자",
        "동물학쥐",
        "양조장이",
        "채집가",
        "모략가",
        "옹기장이",
        "치료사",
        "모험가",
        "요리사",
        "투사",
        "목사",
        "웅변가",
        "행정가",
        "방직공",
        "유리공",
        "흥정꾼",
        "벌레치기",
        "일꾼",
        "병기공",
        "전사"
      ],
      skillS2: [
        "대장장이",
        "석공",
        "제빵사",
        "목수",
        "양봉업자",
        "조선공",
        "방직공",
        "양조장이",
        "지도제작자",
        "벌레치기",
        "옹기장이",
        "채집가",
        "병기공",
        "유리공",
        "서기",
        "제분사"
      ],
      skillS3: ["모략가", "웅변가", "설득가"],
      skillS4: [
        "대장장이",
        "석공",
        "일꾼",
        "목수",
        "양봉업자",
        "제분사",
        "방직공",
        "양조장이",
        "제빵사",
        "벌레치기",
        "옹기장이",
        "지도제작자",
        "병기공",
        "요리사",
        "채집가",
        "서기",
        "유리공",
        "치료사"
      ],
      skillS56: [
        "교관",
        "모험가",
        "정찰대원",
        "기상관측가",
        "사냥꾼",
        "치료사",
        "길잡이",
        "전사"
      ]
    };
  },
  methods: {
    finish() {}
  }
};
</script>