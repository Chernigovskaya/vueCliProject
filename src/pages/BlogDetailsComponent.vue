<template>
    <div>
        <div class="content__blog detail">
            <div class="content__blog_info content__blog_info_detail">
            </div>
        </div>
        <div class="blog_detail center">
            <section class="content__blog_post">
                <h2 class="projects__title_blog">Let’s Get Solution for Building
                    Construction Work</h2>
                <div class="content__blog_post_info content__blog_post_info_det">
                    <img src="@/assets/img/blog_dat.png" alt="photo_blog"
                        class="content__blog_post_img content__blog_post_img_det">
                    <div class="blog__content_date blog__content_date_detail">
                        <p class="blog__content_date_text">26 December,2022 </p>
                        <div class="blog__content_date_link">
                            <a href="#" class="header__right_link">Interior /</a>
                            <a href="#" class="header__right_link">Home /</a>
                            <a href="#" class="header__right_link"> Blog</a>
                        </div>
                    </div>
                    <p class="content__blog_post_text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                        turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem
                        Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or
                        randomised words which don't look even slightly believable.</p>
                    <p class="content__blog_post_text">Embarrassing hidden in the middle of text. All the Lorem Ipsum
                        generators on the Internet tend to repeat predefined chunks as necessary.</p>
                    <div class="blog__content_date_det">
                        <div class="blog_detail_div">
                            <img src="@/assets/img/cov.jpg" alt="">
                            <p class="blog_detail_text">The details are not the details.
                                They make the design.</p>
                        </div>
                    </div>
                    <h2 class="projects__title_blog projects__title_blog_detail">Design sprints are great</h2>
                    <p class="content__blog_post_text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                        turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem
                        Ipsum available, but the majority have suffered.</p>
                    <div class="content__blog_post_text_det">
                        <p class="content__blog_post_text">Contrary to popular belief.There are many variations of passages
                            of Lorem Ipsum available, but the majority have suffered.</p>
                        <p class="content__blog_post_text">Contrary to popular belief.There are many variations of passages
                            of Lorem Ipsum available, but the majority have suffered.</p>
                        <p class="content__blog_post_text">Contrary to popular belief.There are many variations of passages
                            of Lorem Ipsum available, but the majority have suffered.</p>
                    </div>
                    <img src="@/assets/img/blog4.png" alt="photo_blog"
                        class="content__blog_post_img content__blog_post_img_det">
                    <p class="content__blog_post_text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                        turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem
                        Ipsum available, but the majority have suffered.</p>
                </div>
            </section>
            <div class="content__blog_post_tag">
                <h2 class="content__blog_post_title">Tags</h2>
                <div class="button_tags">
                    <div class="btn_detail">
                        <button class="btn_det_text" v-for="tag in tags" :key="[tag]"
                            @click="filterRecords(tag)">{{ tag }}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    data() {
        return {
            filteredRecords: [],
            tags: ['Kitchen', 'Bedroom', 'Bulding', 'Architecture', 'Kitchen Planning', 'Bedroom']
        }
    },

}
</script>

<style lang="scss" scoped></style>