<template lang="pug">
  v-container
    v-layout(d-flex justify-center)
      v-card(flat width='800')
        v-card-title.font-weight-light 지식
        v-card-text 
          v-card(flat)
            v-card-subtitle.font-weight-light 
              span [TODO:CONDITION] 말랑발은 '마우스가드의 규정-지식' 과 '마우스가드의 전설-지식' 중 하나를 고릅니다.
              br
              span 수호대장은 '록헤이븐-지식' 또는 '집정관-지식'을 꼭 골라야 합니다. 
              br
              span 정규대원은 1, 순찰대원은 2, 순찰대장은 3, 수호대장은 4개까지 고를 수 있습니다.
            v-card-text 
              v-chip-group(
                multiple 
                :max='getRank'
                v-model='selected'
                column 
                active-class='orange lighten-2 orange--text'
              )
                v-chip(
                  v-for='knowledge in knowledges'
                  :key='knowledge' 
                  outlined
                ) {{ knowledge }}
              v-combobox(
                v-model='additional'
                label='없는 지식은 직접 만들어보세요'
                chips
                clearable
                multiple
                @change='addKnowledge'
              )  
              
             


</template>
<script>
export default {
  name: "step-knowledge",
  props: {
    rank: String
  },
  watch: {
    rank: {
      handler(newVal, oldVal) {
        /* eslint-disable no-console */
        console.log("rank", newVal, oldVal);
        if (oldVal) {
          this.selected = [];
        }
      }
    }
  },
  methods: {
    addKnowledge(knowledge) {
      /* eslint-disable no-console */
      console.log(knowledge);
    }
  },
  computed: {
    getRank() {
      switch (this.rank) {
        case "말랑발":
          return 0;
        case "정규대원":
          return 1;
        case "순찰대원":
          return 2;
        case "순찰대장":
          return 3;
        case "수호대장":
          return 4;
        default:
          return 1;
      }
    }
  },
  data() {
    return {
      step: null,
      selected: [],
      additional: null,
      knowledges: [
        "갈가마귀",
        "가뭄",
        "가시나무",
        "가을폭풍",
        "갑옷",
        "개구리",
        "거북이",
        "검은딸기나무",
        "견과류",
        "곡물",
        "굴",
        "기근",
        "길",
        "꽁꽁",
        "나뭇잎덮개",
        "냄새분계선",
        "너구리",
        "뇌우",
        "눈보라",
        "눈송이",
        "늑대",
        "늪",
        "다람쥐",
        "덫",
        "도로",
        "독",
        "들불",
        "땅굴",
        "때 아닌 온기",
        "때 아닌 추위",
        "록헤이븐",
        "마우스가드",
        "말랑발",
        "맑고 따뜻한 날씨",
        "물가",
        "물자부족",
        "밀물썰물",
        "바크스톤",
        "반란",
        "밤",
        "방패",
        "뱀",
        "벌판",
        "범죄",
        "별",
        "빗방울",
        "사슴",
        "산불",
        "새매",
        "샛길",
        "서리폭풍",
        "셰일버로우",
        "소도구",
        "수호대장",
        "수송",
        "순록",
        "순찰대원",
        "순찰대장",
        "숲",
        "스프러스턱",
        "시냇물",
        "암석지대",
        "야생지역",
        "야생쥐",
        "약물",
        "약초",
        "양봉",
        "어둠덤불",
        "엘모스",
        "얼음",
        "여우",
        "연못",
        "오소리",
        "올빼미",
        "우편물",
        "이끼",
        "장사쥐",
        "재배",
        "전염병",
        "전쟁",
        "정규대원",
        "제작",
        "조리법",
        "조류",
        "족제비",
        "쥐구멍",
        "진흙탕",
        "찬 비",
        "채집",
        "축제",
        "코요테",
        "코퍼우드",
        "통치자",
        "포식자",
        "폭염",
        "풀밭",
        "한파",
        "해안",
        "호수",
        "호위",
        "홍수"
      ]
    };
  }
};
</script>