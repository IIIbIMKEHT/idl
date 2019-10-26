<template>
    <section class="section" id="carousel" style="background-color: black;">

        <b-container fluid id="containerCarousel">

                    <hooper  class="carouselHooper">
                        <slide class="firstSlider" style="width: 100%;" >
                            <b-row class="firstRow">
                                        <no-ssr>
                                        <vue-particles color="#dedede" style="position: absolute; width: 100%; height: 100%"></vue-particles>
                                        </no-ssr>
                            <b-col class="firstCarousel" md="12" sm="12">
                                <h1>Присоединяйся к нам!</h1>
                                <p>Начни работу с нами уже сегодня!</p>
                                <b-button variant="dark">Начать!</b-button>
                            </b-col>
                        </b-row>
                        </slide>

                        <slide class="secondSlider" style="width: 100%;">
                            <b-row class="secondRow">
                                <b-col class="secondCarousel" md="12" sm="12">
                                    <h1>Создаем качественно и неповторимо!</h1>
                                    <p>Создаем сайты любой сложности, Адаптивный дизайн  и быстрые строки!</p>
                                    <no-ssr>
                                        <flip-countdown style="color: white" deadline="2020-01-01 00:00:00"></flip-countdown>
                                    </no-ssr>
                                    <b-button variant="dark">Начать!</b-button>
                                    <b-button variant="success">Портфолио!</b-button>
                                </b-col>

                            </b-row>

                        </slide>
                        <slide class="thirdSlider" style="width: 100%;">
                            <b-row class="thirdRow">

                                <b-col class="thirdCarousel" md="12" sm="12">
                                    <h1>Достигая успехов вместе с нами!</h1>
                                    <p>Работая достигая успеха вместе с нами!</p>
                                    <b-button variant="dark">Начать!</b-button>
                                    <b-button variant="success">Наши сервисы!</b-button>
                                </b-col>
                            </b-row>

                        </slide>

                        <hooper-pagination slot="hooper-addons"></hooper-pagination>
                    </hooper>
        </b-container>
    </section>
</template>

<script>
    import NoSSR from 'vue-no-ssr'
    import {Hooper,Slide,Pagination as HooperPagination} from "hooper"
    import 'hooper/dist/hooper.css';
    import FlipCountdown from 'vue2-flip-countdown'
    export default {
        name: "Carousel",
        components: {
            'no-ssr': NoSSR,Hooper,Slide,HooperPagination,FlipCountdown
        },
        data:()=>({




        })
    }
</script>

<style scoped>
    .hooper{
        min-height:100vh;
        height: auto;
    }
</style>