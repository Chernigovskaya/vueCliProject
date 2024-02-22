<template>
    <div class="center">
        <footer class="footer">
            <div class="footer__info">
                <div class="footer__info_logo">
                    <router-link to="./" class="header__left">
                        <img class="header__left_img" src="@/assets/img/Logo.svg" alt="logo" />
                        <p class="header__left_text">Interno</p>
                    </router-link>
                    <p class="footer__info_logo_text">
                        It is a long established fact that a reader will be distracted
                        lookings.
                    </p>
                    <div class="footer__info_logo_icons">
                        <a href="#"><img src="@/assets/img/icon1.svg" alt="icon1" /></a>
                        <a href="#"><img src="@/assets/img/icon2.svg" alt="icon2" /></a>
                    </div>
                </div>
            </div>
            <div class="footer__info">
                <div class="footer__info_el footer__info_el_two">
                    <p class="footer__info_el_title">Pages</p>
                    <router-link :to="link.url" v-for="link in links" :key="link.id" class="footer__info_el_link">
                        {{ link.title }}
                    </router-link>
                </div>
            </div>

            <div class="footer__info">
                <div class="footer__info_el footer__info_el_three">
                    <p class="footer__info_el_title">Contact</p>
                    <p class="footer__info_el_link" v-for="el in footerEl" :key="[el]">
                        {{ el }}
                    </p>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    data() {
        return {
            links: [
                {
                    id: 1,
                    title: "Home",
                    url: "./",
                },
                {
                    id: 2,
                    title: "Blog",
                    url: "./blog",
                },
                {
                    id: 3,
                    title: "Project",
                    url: "./project",
                },
            ],
        };
    },
    computed: {
        ...mapState(['footerEl'])
    },
};
</script>

<style lang="scss" scoped></style>
