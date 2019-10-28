<template>
    <section class="section sectionAboutUs">
        <b-container class="containerAbout" fluid>
            <b-row class="rowAbout">
                <b-col class="colAbout" md="3" sm="12" v-for="(item,i) of card" :style="{'background-color':item.bg}" >
                    <fa :icon="item.icon" class="icon" />
                    <h3>{{item.title}}</h3>
                    <p>{{item.subtitle}}</p>

                </b-col>
            </b-row>

            <b-row class="typicalRow">
                <b-col md="12">
                    <h1>О Нас</h1>
                    <p>Немного информации о нас</p>
                </b-col>

            </b-row>
            <b-row class="typicalRowContent">
                <b-col class="first" md="6" sm="12" data-aos="fade-right">
                    <iframe class="video" src="https://www.youtube.com/embed/Jmv5pTyz--I?autoplay=1&loop=1&autopause=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                </b-col>
                <b-col class="second" md="6" sm="12" data-aos="fade-left">
                    <h4>Мы команда профессионалов</h4>
                    <p>Мы занимаемся разработкой сайтов, мобильных приложений, оптимизацией, а также программированием.
                       <br/> Стив Возняк: «Я по-настоящему поверил в себя, когда стал проектировать компьютеры»
                    </p>
                    <vue-lottie ref="lottie" loop autoplay :data="svg[0]" :height="250" :width="250"></vue-lottie>
                </b-col>
            </b-row>
            <b-row class="typicalRowContent">
                <b-col class="img" md="6" data-aos="fade-right">
                    <div>
                        <img src="/img/responsive.png">
                    </div>
                </b-col>
                <b-col class="text" md="6" data-aos="fade-left">
                    <h1>Создай сайт прямо сейчас!</h1>
                    <div class="cardMobile" v-for="item of mobileCard">
                        <h5><div style="display: inline;margin-right: 5px"> <fa :icon="['fas','check-circle']"/></div>{{item.title}}</h5>
                    <p>{{item.subtitle}}</p>
                    </div>
                    <vue-lottie ref="lottie" loop autoplay :data="svg[1]" :height="250" :width="250"></vue-lottie>
                </b-col>
            </b-row>


        </b-container>


    </section>
</template>

<script>
    import vueLottie from 'vue-lottie-ssr/src/components/vue-lottie.vue'
    import astronaut from '../static/anim/astronaut.json'
    import mobile from '../static/anim/mobile.json'
    export default {
        name: "AboutUs",
        components:{vueLottie},
        data:()=>({
            card:[
                {title:"Создание сайтов", subtitle:"Создание сайтов любой сложности, гибкая цена и короткие сроки",icon:["fas",'code'],bg:"#111111"},
                {title:"Оптимизация сайтов", subtitle:"Оптимизация сайтов под поисковики, гибкая цена и короткие сроки",icon:["fas",'space-shuttle'],bg:"#2f2928"},
                {title:"Респонзивный дизайн", subtitle:"Создаем неповторимый дизайн, вкладываем душу и сердце в разработку",icon:["fas",'brush'],bg:"#111111"},
                {title:"Гибкие цены", subtitle:"У нас гибкие цены за качественную работу",icon:["fas",'hand-holding-usd'],bg:"#2f2928"},
            ],
            mobileCard:[
                {title:"Респонзивный дизайн",subtitle:"Создаем неповторимый и респонзивный дизайн"},
                {title:"Сайты любой сложности",subtitle:"Создаем сайты любой сложности"},
                {title:"Короткие сроки",subtitle:"Быстрые сроки разработки, создаем быстро и качественно"},
                {title:"Гибкие цены",subtitle:"Низкие цены и высокое качество"},


            ],

            colors:["info","success","info","success"],
            aosAnim:["fade-right","fade-up","fade-up","fade-left"],
            svg:[astronaut,mobile]

        })

    }
</script>

<style scoped>

</style>