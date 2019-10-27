<template lang="pug">
 v-container
    v-layout(d-flex justify-center)
      v-card(flat width='800')
        v-card-title.font-weight-light 특성
        v-card-text 
          v-stepper(v-model='step')
            v-stepper-header
              v-stepper-step(:complete='step>0' step=1 editable) 자질
              v-divider
              v-stepper-step(:complete='step>1' step=2 editable) 부모
              v-divider
              v-stepper-step(:complete='step>2' step=3 editable) 연륜
            v-stepper-items
              v-stepper-content(step=1)
                v-card(flat)
                  v-card-subtitle.font-weight-light 타고난 자질입니다. 모두 하나만 골라주세요. 
                    v-chip-group(
                      column
                      v-model='s1'
                      active-class='orange lighten-2 orange--text'
                    )
                      v-chip(
                        v-for='trait in traitS1'
                        outlined
                        :key='trait+"s1"'
                      ) {{ trait }}
                v-btn(color='primary' @click='step=2') 다음
              v-stepper-content(step=2)
                v-card(flat)
                  v-card-subtitle.font-weight-light [TODO:CONDITION] 부모님과 닮은 부분 고르기
                    br 
                    span 당신의 마우스가드가 말랑발이면 한가지 골라주세요.
                    v-chip-group(
                      column
                      v-model='s2'
                      active-class='orange lighten-2 orange--text'
                    )
                      v-chip(
                        v-for='trait in traitS2'
                        outlined
                        :key='trait+"s2"'
                      ) {{ trait }}
                v-btn(color='primary' @click='step=3') 다음
              v-stepper-content(step=3)
                v-card(flat)
                  v-card-subtitle.font-weight-light [TODO:CONDITION] 오랜 경험으로 배운 특성을 한가지 고를 수 있습니다.
                    br 
                    span 당신의 마우스가드가 순찰대장 혹은 수호대장이면 한가지 골라주세요.
                    v-chip-group(
                      column
                      v-model='s3'
                      active-class='orange lighten-2 orange--text'
                    )
                      v-chip(
                        v-for='trait in traitS3'
                        outlined
                        :key='trait+"s3"'
                      ) {{ trait }}
                v-btn(color='grey' dark @click='finish') 완료

            
</template>
<script>
export default {
  name: "step-trait",
  methods: {
    finish() {}
  },
  data() {
    return {
      step: null,
      s1: null,
      s2: null,
      s3: null,
      traitS1: [
        "강인함",
        "겁없음",
        "겁쟁이",
        "격정",
        "고결함",
        "교활함",
        "금욕적",
        "기지",
        "긴꼬리",
        "길눈",
        "길치",
        "날씨감각",
        "늑대코",
        "다정함",
        "다혈질",
        "단호함",
        "대담함",
        "땅딸막함",
        "뚱보",
        "말라깽이",
        "매의눈",
        "명예대원",
        "몰두",
        "밝은귀",
        "밤쥐",
        "뾰족니",
        "사려깊음",
        "상흔",
        "새벽쥐",
        "성숙함",
        "수호자",
        "순수함",
        "연로함",
        "완고함",
        "외향적",
        "용감함",
        "음모론쥐",
        "인심좋음",
        "재빠름",
        "젊은이",
        "조용함",
        "지도자",
        "지혜로움",
        "총명함",
        "큰발",
        "키다리",
        "평온함",
        "호기심",
        "호위",
        "회의적"
      ],
      traitS2: [
        "긴꼬리",
        "길눈",
        "길치",
        "늑대코",
        "다정함",
        "다혈질",
        "단호함",
        "땅딸막함",
        "말라깽이",
        "밝은귀",
        "뾰족니",
        "상흔",
        "새벽쥐",
        "수호자",
        "완고함",
        "외향적",
        "용감함",
        "음모론쥐",
        "인심좋음",
        "재빠름",
        "조용함",
        "총명함",
        "큰발",
        "키다리",
        "평온함",
        "호기심",
        "회의적"
      ],
      traitS3: [
        "강인함",
        "겁없음",
        "겁쟁이",
        "격정",
        "교활함",
        "금욕적",
        "길눈",
        "날씨감각",
        "다정함",
        "말라깽이",
        "매의눈",
        "몰두",
        "밤쥐",
        "사려깊음",
        "상흔",
        "새벽쥐",
        "성숙함",
        "수호자",
        "연로함",
        "용감함",
        "조용함",
        "지도자",
        "지혜로움",
        "총명함",
        "평온함",
        "호기심",
        "호위",
        "회의적"
      ]
    };
  }
};
</script>