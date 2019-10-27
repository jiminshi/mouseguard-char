<template lang="pug">
  v-container
    v-layout(d-flex justify-center)
      v-card(flat width='800')
        v-card-title.font-weight-light 본능
        v-card-subtitle.font-weight-light 기본수치 3
        v-card-text
          v-stepper(v-model='step')
            v-stepper-header
              v-stepper-step(:complete='step>0' step=1 editable) 
              v-divider
              v-stepper-step(:complete='step>1' step=2 editable) 
              v-divider
              v-stepper-step(:complete='step>2' step=3 editable) 
            v-stepper-items
              v-stepper-content(step=1)
                v-card(flat)
                  v-card-text 
                    v-row
                      v-alert.ml-2(
                        border='left'
                        colored-border
                        color='blue lighten-2'
                        icon='mdi-help-rhombus'
                      ) 당신의 마우스가드는 지금 당장 부족하더라도 겨울을 위해 아껴두나요? 아니면 가진것은 필요할 떄 쓰나요?
                    v-row
                      v-col
                        v-chip-group(
                          v-model='q1'
                          active-class='orange lighten-2 orange--text'
                        )
                          v-chip(large outlined label) 바로 씁니다.
                          v-chip(large outlined label) 아껴 씁니다. 
                v-btn(color='primary' @click='step=2') 다음
              v-stepper-content(step=2)
                v-card(flat)
                  v-card-text 
                    v-row
                      v-alert.ml-2(
                        border='left'
                        colored-border
                        color='blue lighten-2'
                        icon='mdi-help-rhombus'
                      ) 어려움이 닥치면 굳건히 서서 싸우나요? 아니면 도망쳐서 숨나요?
                    v-row 
                      v-chip-group(
                        v-model='q2'
                        active-class='orange lighten-2 orange--text'
                      )
                        v-chip(large outlined label) 싸웁니다.
                        v-chip(large outlined label) 도망칩니다. 
                v-btn(color='primary' @click='step=3') 다음
              v-stepper-content(step=3)
                v-card(flat)
                  v-card-text 
                    v-row
                      v-alert.ml-2(
                        border='left'
                        colored-border
                        color='blue lighten-2'
                        icon='mdi-help-rhombus'
                      ) 당신은 올빼미나 족제비, 늑대를 두려워하나요?
                    v-row 
                      v-chip-group(
                        v-model='q3'
                        active-class='orange lighten-2 orange--text'
                      )
                        v-chip(large outlined label) 두렵지 않습니다.
                        v-chip(large outlined label) 두렵습니다. 
                v-btn(color='grey' dark @click='finish') 완료

</template>
<script>
export default {
  name: "step-nature",
  data() {
    return {
      nature: null,
      step: null,
      q1: null,
      q2: null,
      q3: null
    };
  },
  methods: {
    finish() {}
  }
};
</script>