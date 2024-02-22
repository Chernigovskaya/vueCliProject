<template>
    <div class="not__found center">
        <div class="not__found_left ">
            <div class="not__found_left_info">
                <h1 class="not__found_left_info_num">404</h1>
                <p class="not__found_left_info_text">We are sorry, but the page
                    you requested was not found</p>
                <router-link to="./">
                    <button class="content__info_button">
                        Get Started <img src="@/assets/img/Vector.svg" alt="vector" />
                    </button>
                </router-link>
            </div>
        </div>
        <div class="not__found_right">
            <img class="not__found_right_img" src="@/assets/img/not.jpg" alt="photo">
        </div>

    </div>
</template>