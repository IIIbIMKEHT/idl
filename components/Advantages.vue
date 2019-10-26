<template>
    <section class="section Advantages">
        <b-container class="containerAdvantages" fluid>
            <b-row class="typicalRow">
                <b-col md="12">
                    <h1>Почему мы?</h1>
                    <p> Почему стоит выбрать нас?</p>
                </b-col>
            </b-row>
            <b-row class="typicalRowContent">
                <b-col class="colAdvantage" md="4" sm="12" v-for="(advantage,i) of advantages" data-aos="flip-left">
                    <div class="card" >
                        <div class="circle">
                            <vue-lottie ref="lottie" loop autoplay :data="svg[i]" :height="150" :width="150"></vue-lottie>
                        </div>
                        <h3>{{advantage.title}}</h3>
                        <p>{{advantage.subtitle}}</p>
                    </div>
                </b-col>

            </b-row>



        </b-container>
    </section>
</template>

<script>
    import vueLottie from 'vue-lottie-ssr/src/components/vue-lottie.vue'
    import desighn from '../static/anim/desighn.json'
    import technology from '../static/anim//technology.json'
    import benefit from '../static/anim//benefit.json'
    import time from '../static/anim//time.json'
    import trophy from '../static/anim//trophy.json'
    import heart from '../static/anim//heart.json'
    export default {
        name: "Advantages",
        components:{vueLottie},
        data:()=>({
            advantages:[
                {title:"Уникальный дизайн",subtitle:"Уникальный дизайн"},
                {title:"Прогрессивные технологии",subtitle:"Используем новейшие технологии"},
                {title:"Гибкие цены",subtitle:"Низкие цены и высокое качество"},
                {title:"Короткие сроки",subtitle:"Быстрые сроки высокий результат"},
                {title:"Высокое качество",subtitle:"Качественно и прогрессивно"},
                {title:"Создаем с любовью",subtitle:"Мы любим свое дело и создаем с любовью"},
            ],
            svg:[desighn,technology,benefit,time,trophy,heart]
        })
    }
</script>

<style scoped>

</style>