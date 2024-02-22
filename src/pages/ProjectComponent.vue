<template>
    <div>
        <div class="content__project">
            <div class="content__project_info">
                <header class="projects-box">
                    <h2 class="projects__title_blog">Our Project</h2>
                    <p class="projects__text">
                        <router-link :to="link.url" v-for="link in links" :key="link.id" class="header__right_link"> {{
                            link.title }}
                        </router-link>
                    </p>
                </header>
            </div>
            <div class="project__btn center">
                <button class="project__btn_el" v-for="btn in buttons" :key="[btn]">{{ btn }}</button>
            </div>
            <div class="project__el center">
                <div class="project__el_img" v-for="el in projectEl" :key="el.id">
                    <div class="project__el_img_div">
                        <img :src="el.photo" alt="photo" class="project__el_img" />
                        <img @click="changeColor(starAfter)" :star="star" :src="star" alt="star"
                            class="project__el_img_star">
                    </div>
                    <div class="project__el_content">
                        <div class="project__el_content_left">
                            <router-link to="/projectDetails" class="project__el_content_title" href="#">{{ el.title }} <br>
                            </router-link>
                            <p class="project__el_content_text">Decor / Artchitecture</p>
                        </div>
                        <div class="project__el_content_right">
                            <router-link to="/projectDetails">
                                <img src="@/assets/img/strelka.svg" alt="strelka" />
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState(['projectEl']),
    },
    methods: {
        changeColor(star1) {
            this.star = star1
        },

    },
    data() {
        return {
            buttons: ['Bathroom', 'Bed Room', 'Kitchan', 'Living Area'],
            starAfter: require('@/assets/img/Star1.svg'),
            star: require('@/assets/img/star.svg'),
            links: [
                {
                    id: 1,
                    title: "Home ",
                    url: "./"
                },
                {
                    id: 2,
                    title: "/ Project",
                    url: "./project"
                },
            ],
        }
    }
}

</script>

<style lang="scss" scoped></style>