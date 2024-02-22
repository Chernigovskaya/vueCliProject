<template>
  <div>
    <div class="center">
      <div class="content">
        <section class="content__info">
          <h1 class="content__info_title">Let Your Home Be Unique</h1>
          <p class="content__info_text">
            There are many variations of the passages of lorem Ipsum
            fromavailable, majority.
          </p>
          <button class="content__info_button">
            Get Started <img src="@/assets/img/Vector.svg" alt="vector" />
          </button>
        </section>
      </div>
      <header class="projects">
        <h2 class="projects__title">Follow Our Projects</h2>
        <p class="projects__text">
          It is a long established fact that a reader will be distracted
          by the of readable content of page lookings at its layouts
          points.
        </p>
      </header>
      <div class="card">
        <div class="card__item">
          <img src="@/assets/img/Photo1.png" alt="photo1" class="card__item_img card__item_img_one" />
          <div class="card__item_content">
            <div class="card__item_left">
              <router-link class="card__item_title" to="/projectDetails">Modern Kitchan</router-link>
              <p class="card__item_text">Decor / Artchitecture</p>
            </div>
            <div class="card__item_right">
              <router-link to="/projectDetails"><img src="@/assets/img/strelka.svg" alt="strelka" /></router-link>
            </div>
          </div>
        </div>
        <div class="card__item">
          <img src="@/assets/img/Photo2.png" alt="photo1" class="card__item_img card__item_img_two" />
          <div class="card__item_content">
            <div class="card__item_left">
              <router-link class="card__item_title" to="/projectDetails">Modern Kitchan</router-link>
              <p class="card__item_text">Decor / Artchitecture</p>
            </div>
            <div class="card__item_right">
              <router-link to="/projectDetails"><img src="@/assets/img/strelka.svg" alt="strelka" /></router-link>
            </div>
          </div>
        </div>
        <div class="card__item">
          <img src="@/assets/img/Photo3.png" alt="photo1" class="card__item_img card__item_img_tree" />
          <div class="card__item_content">
            <div class="card__item_left">
              <router-link class="card__item_title" to="/projectDetails">Modern Kitchan</router-link>
              <p class="card__item_text">Decor / Artchitecture</p>
            </div>
            <div class="card__item_right">
              <router-link to="/projectDetails"><img src="@/assets/img/strelka.svg" alt="strelka" /></router-link>
            </div>
          </div>
        </div>
        <div class="card__item">
          <img src="@/assets/img/Photo4.png" alt="photo1" class="card__item_img card__item_img_four" />
          <div class="card__item_content">
            <div class="card__item_left">
              <router-link class="card__item_title" to="/projectDetails">Modern Kitchan</router-link>
              <p class="card__item_text">Decor / Artchitecture</p>
            </div>
            <div class="card__item_right">
              <router-link to="/projectDetails"><img src="@/assets/img/strelka.svg" alt="strelka" /></router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="counter">
        <div class="counter__depichion" v-for="el in homeNum" :key="el.id">
          <p class="counter__depichion_num">{{ el.num }}</p>
          <p class="counter__depichion_text">{{ el.text }}</p>
        </div>
      </div>
      <header class="projects">
        <h2 class="projects__title">Articles & News</h2>
        <p class="projects__text">
          It is a long established fact that a reader will be distracted
          by the of readable content of a page when lookings at its
          layouts the points of using.
        </p>
      </header>
    </div>
    <div class="blog center">
      <div class="blog__content blog_img" v-for="data in dataBlog.slice(0, 3)" :key="data.id">
        <img :src="data.photo" alt="photo" class="blog__content_img">
        <p class="blog__content_des">{{ data.name }}</p>
        <router-link to="blogDetail" class="blog__content_title">
          {{ data.title }}
        </router-link>
        <div class="blog__content_date">
          <p class="blog__content_date_text">{{ data.date }}</p>
          <router-link to="blogDetail" class="blog__content_date_img"> <svg width="52" height="53" viewBox="0 0 52 53"
              fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
              <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round" />
            </svg></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex';

export default {
  name: "HomePage",
  computed: {
    ...mapState(['dataBlog', 'homeNum'])
  },
};
</script>

<style lang="sass" scoped>
</style>
