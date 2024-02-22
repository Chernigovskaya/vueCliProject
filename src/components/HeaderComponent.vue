<template>
  <header class="header center">
    <router-link to="./" class="header__left">
      <img class="header__left_img" src="@/assets/img/Logo.svg" alt="logo" />
      <p class="header__left_text">Interno</p>
    </router-link>
    <div class="header__right">
      <router-link :to="link.url" v-for="link in links" :key="link.id" class="header__right_link"> {{ link.title }}
      </router-link>
    </div>
  </header>
</template>

<script>

export default {
  data() {
    return {
      links: [
        {
          id: 1,
          title: "Home",
          url: "./"
        },
        {
          id: 2,
          title: "Blog",
          url: "./blog"
        },
        {
          id: 3,
          title: "Project",
          url: "./project"
        },

      ]
    }
  }
}
</script>

<style lang="sass" scoped>

</style>