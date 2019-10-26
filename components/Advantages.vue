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
    import desighn from 'vue-lottie-ssr/src//assets/desighn.json'
    import technology from 'vue-lottie-ssr/src//assets/technology.json'
    import benefit from 'vue-lottie-ssr/src//assets/benefit.json'
    import time from 'vue-lottie-ssr/src//assets/time.json'
    import trophy from 'vue-lottie-ssr/src//assets/trophy.json'
    import heart from 'vue-lottie-ssr/src//assets/heart.json'
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