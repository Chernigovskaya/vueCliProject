<template>
  <HeaderComponent />
  <router-view />
  <FooterComponent />
</template>

<script>
import FooterComponent from "./components/FooterComponent.vue";
import HeaderComponent from "./components/HeaderComponent.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<style lang="scss">
// .home{
//   margin-bottom: 3700px;
// }
</style>
