<template>
    <div>
        <div class="content__blog project">
            <div class="content__blog_info project">
            </div>
            <div class="project__detail_info center">
                <p class="project__detail_info_title">{{ projectDetailTitle }}</p>
                <p class="project__detail_info_text" v-for="el in projectDetailText" :key="el.id"> {{ el }}</p>
            </div>
        </div>
        <div class="project_detail_zoom center">
            <swiper :style="{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
                    }" :zoom="true" :navigation="true" :pagination="{
                clickable: true,
                }" :modules="modules" class="mySwiper">
                <swiper-slide>
                    <div class="swiper-zoom-container">
                        <img src='@/assets/img/prDet1.png' />
                    </div>
                </swiper-slide><swiper-slide>
                    <div class="swiper-zoom-container">
                        <img src='@/assets/img/prDet2.png' />
                    </div>
                </swiper-slide><swiper-slide>
                    <div class="swiper-zoom-container">
                        <img width="90%" src="@/assets/img/prDet3.png" />
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Zoom, Navigation, Pagination } from 'swiper/modules';

export default {
    name: "HomePage",
    computed: {
        ...mapState(['projectDetailTitle', 'projectDetailText'])
    },
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Zoom, Navigation, Pagination],
        };
    },
};
</script>

<style lang="sass" scoped>

</style>