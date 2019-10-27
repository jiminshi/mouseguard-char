<template lang="pug">
v-container
  v-layout(d-flex justify-center)
    v-card(flat width='800')
      v-card-text 
        v-alert(
          border='left'
          color='orange lighten-2'
          dark
        )  
          blockquote.blockquote.display-1.font-weight-light 모든 생쥐의 
          br 
          blockquote.blockquote.display-1.font-weight-thin 번영과 안녕을 위하여
        v-alert(
          border='left'
          colored-border
          color='blue lighten-2'
        ) 
          span.headline.font-weight-thin 당신의 생쥐대원이 완성되었습니다! 
          br 
          br
          span.font-weight-light 오른쪽의 수치를 캐릭터 시트에 옮겨 적어서 모험을 떠나세요. 
          br
          span.font-weight-light 만일 수치를 조정하고싶다면 옮겨 적으시며 조정하셔도 무관합니다. 


</template>