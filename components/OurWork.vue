<template>
    <section class="section OurWork" data-aos="zoom-in">
        <b-container fluid class="containerWork">
        <b-row class="typicalRow">
            <b-col md="12">
                <h1 class="typicalH">Наши работы</h1>
                <p>Взгляните на наши работы</p>
            </b-col>
        </b-row>
        <no-ssr placeholder="Loading...">
            <carousel-3d height="320" width="500">
                <slide v-for="(image,i) of images" :key="image" :index="i" >
                   <img :src="image.img" class="images">
                </slide>

            </carousel-3d>
        </no-ssr>
            <b-row class="typicalRowContent justify-content-center">
            <b-button variant="dark">Все работы</b-button>
            </b-row>
            <b-row class="typicalRowContent slider">
                <b-col class="colWork" md="3" sm="12" v-for="(item,i) of cards" :data-aos="aos[i]">
                    <div class="card">
                        <div class="circle">
                            <vue-lottie ref="lottie" loop autoplay :data="svg[i]" :height="150" :width="150"></vue-lottie>
                        </div>
                        <h3>{{item.number}}</h3>
                        <p>{{item.title}}</p>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
    import NoSSR from 'vue-no-ssr'
    import vueLottie from 'vue-lottie-ssr/src/components/vue-lottie.vue'
    import success from '../static/anim/success.json'
    import smile from '../static/anim/smile.json'
    import service from '../static/anim/service.json'
    import gears from '../static/anim/gears.json'
    export default {
        name: "OurWork",
        components:{'no-ssr': NoSSR,vueLottie
        },
        data:()=>({
            images:[
                {img:"/img/portfolio/1.jpg"},
                {img:"/img/portfolio/2.jpg"},
                {img:"/img/portfolio/3.jpg"},
                {img:"/img/portfolio/4.jpg"},
                {img:"/img/portfolio/5.jpg"},
                {img:"/img/portfolio/6.jpg"},
                {img:"/img/portfolio/7.jpg"},
                {img:"/img/portfolio/8.jpg"},
                {img:"/img/portfolio/9.jpg"},
                {img:"/img/portfolio/10.jpg"},
                {img:"/img/portfolio/11.jpg"},
                {img:"/img/portfolio/12.jpg"},
            ],
            cards:[
                {title:"Выполненых проектов",number:1000},
                {title:"Довольных клиентов",number:1000},
                {title:"Активных проектов",number:5000},
                {title:"Новых идей",number:5000},
            ],
            svg:[success,smile,service,gears],
            aos:["zoom-in-right","zoom-in","zoom-in","zoom-in-left"]



        }),
    }
</script>

<style scoped lang="scss">

</style>