<template>
    <section class="section" id="carousel" style="background-color: black;">

        <b-container fluid id="containerCarousel">

                    <hooper id="id-carousel" class="carouselHooper" :infiniteScroll="true" :wheelControl="false" :autoPlay="true" :playSpeed="3000">
                        <slide class="firstSlider" style="width: 100%;" >
                            <b-row class="firstRow">
                                <b-col class="firstCarousel" md="12" sm="12">
                                    <h1>Присоединяйся к нам!</h1>
                                    <p>Начни работу с нами уже сегодня!</p>
                                    <a class="btn btn-dark" href="#id-contact" v-smooth-scroll="{ duration: 1000}">Начать!</a>
                                </b-col>
                            </b-row>
                        </slide>

                        <slide class="secondSlider" style="width: 100%;">
                            <b-row class="secondRow">
                                <b-col class="secondCarousel" md="12" sm="12">
                                    <h1>Создаем качественно и неповторимо!</h1>
                                    <p>Создаем сайты любой сложности, Адаптивный дизайн  и быстрые строки!</p>
                                    <a class="btn btn-dark" href="#id-contact" v-smooth-scroll="{ duration: 1000}">Начать!</a>
                                    <a class="btn btn-success" href="#id-service" v-smooth-scroll="{ duration: 1000}">Услуги!</a>
                                </b-col>

                            </b-row>

                        </slide>
                        <slide class="thirdSlider" style="width: 100%;">
                            <b-row class="thirdRow">

                                <b-col class="thirdCarousel" md="12" sm="12">
                                    <h1>Достигая успехов вместе с нами!</h1>
                                    <p>Работая достигая успеха вместе с нами!</p>
                                    <a class="btn btn-dark" href="#id-contact" v-smooth-scroll="{ duration: 1000}">Начать!</a>
                                    <a class="btn btn-success" href="#id-work" v-smooth-scroll="{ duration: 1000}">Как мы работаем?</a>
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
