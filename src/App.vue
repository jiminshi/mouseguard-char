<template lang='pug'>
v-app
  v-content
    MouseMaker
</template>

<script>
import MouseMaker from "@/views/maker/MouseMaker.vue";
export default {
  name: "App",
  components: { MouseMaker },
  data: () => ({
    //
  })
};
</script>
