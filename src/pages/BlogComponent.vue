<template>
    <div>
        <div class="content__blog">
            <div class="content__blog_info">
                <header class="projects-box">
                    <h2 class="projects__title_blog">Articles & News</h2>
                    <p class="projects__text">
                        <router-link :to="link.url" v-for="link in links" :key="link.id" class="header__right_link"> {{
                            link.title }}
                        </router-link>
                    </p>
                </header>
            </div>
            <section class="content__blog_post center">
                <h2 class="projects__title_blog">Articles & News</h2>
                <div class="content__blog_post_info">
                    <img src="@/assets/img/Image_blog.png" alt="photo_blog" class="content__blog_post_img">
                    <div class="content__blog_post_div">
                        <h2 class="content__blog_post_title">Low Cost Latest Invented Interior Designing Ideas</h2>
                        <p class="content__blog_post_text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                            turpis dignissim maximus.posuere in.Contrary to popular belief.</p>
                        <p class="content__blog_post_text">Lorem Ipsum is not simply random text. It has roots in a piece of
                            classica.</p>
                        <div class="blog__content_date">
                            <p class="blog__content_date_text">26 December,2022 </p>
                            <router-link to="blogDetail"> <svg width="52" height="53" viewBox="0 0 52 53" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
                                    <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg></router-link>
                        </div>
                    </div>
                </div>
            </section>
            <section class="content__blog_post center">
                <h2 class="projects__title_blog">Articles & News</h2>
                <div class="blog blog_ind">
                    <div class="blog__content" v-for="data in dataBlog" :key="data.id">
                        <img :src="data.photo" alt="photo" class="blog__content_img">
                        <p class="blog__content_des">{{ data.name }}</p>
                        <router-link to="blogDetail" class="blog__content_title">
                            {{ data.title }}
                        </router-link>
                        <div class="blog__content_date">
                            <p class="blog__content_date_text">{{ data.date }}</p>

                            <router-link to="blogDetail" class="blog__content_date_img"> <svg width="52" height="53"
                                    viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
                                    <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg></router-link>

                        </div>
                    </div>
                </div>
            </section>
        </div>
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
                    title: "Home ",
                    url: "./"
                },
                {
                    id: 2,
                    title: "/ Blog",
                    url: "./blog"
                },
            ]
        }
    },
    name: "BlogComponent",
    computed: {
        ...mapState(['dataBlog'])
    },
}
</script>

<style lang="scss" scoped></style>