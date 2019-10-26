<template>
    <section class = "section Team">
        <b-container  class = "containerTeam" fluid data-aos="zoom-in">
            <b-row class="typicalRow">
                <b-col md="12">
                    <h1>Немного о нас</h1>
                    <p>Встречайте нашу команду</p>
                </b-col>
            </b-row>

            <b-row class="typicalRowContent slide2">
                <b-col class="colFirst" md="6" sm="12">
                    <b-tabs content-class="mt-3" fill>
                        <b-tab v-for="item of tabs" :title="item.title" active><p>{{item.subtitle}}</p></b-tab>

                    </b-tabs>

                </b-col>
                <b-col md="6" sm="12">
                    <vue-lottie ref="lottie" loop autoplay :data="office" :height="320" :width="300"></vue-lottie>
                </b-col>

            </b-row>
            <b-row class="typicalRowContent">
                <b-col class="cards" md="3" sm="12" v-for="(item,i) of sections">
                    <client-only>
                        <vc-donut :sections="sections[i]"  foreground="white" background="#111111" has-legend legend-placement="bottom"><h1>{{sectionText[i]}}%</h1></vc-donut>
                    </client-only>
                    <h5 class="mb-4"  v-for="item of progressBar[i].progress">{{item.label}}
                        <b-progress  :value="item.value" :max="max" class="mb-3"></b-progress></h5>

                </b-col>
            </b-row>
            <b-row class="typicalRow">
                <b-col md="12">
                    <h1>Наша команда</h1>
                    <p>Встречайте нашу команду</p>
                </b-col>
            </b-row>

            <b-row class="typicalRowContent">

                <b-col class="teammates" md="6" v-for="item of team"  data-aos="zoom-in-up">
                    <div class="teamcard">
                        <div class="circle" :style="{'background-image':'url('+item.img+')', 'background-size':'cover'}"></div>
                        <h3>{{item.name}}</h3>
                        <p>{{item.job}}</p>
                    </div>
                </b-col>
            </b-row>
            <b-row class="typicalRowContent slide3">

                <hooper class="hooperTeam">
                    <slide class="slideTeam" v-for="item of comment">
                        <b-row class="rowTeam">
                            <b-col class="colTeam" md="12">
                                <div class="circle" :style="{'background-image':'url('+item.img+')', 'background-size':'cover'}"></div>
                                <em><p>"{{item.text}}"</p></em>
                                <h3>{{item.name}}</h3>
                                <p>{{item.job}}</p>
                            </b-col>
                        </b-row>
                    </slide>
                    <hooper-pagination slot="hooper-addons"></hooper-pagination>
                </hooper>

            </b-row>
        </b-container>

    </section>
</template>

<script>
    import {Hooper,Slide,Pagination as HooperPagination} from "hooper";
    import 'hooper/dist/hooper.css';
    import vueLottie from 'vue-lottie-ssr/src/components/vue-lottie.vue'
    import office from 'vue-lottie-ssr/src//assets/office.json'
    export default {
        name: "Team",
        components:{
            Hooper,Slide,HooperPagination,vueLottie
        },
        data:()=>({
            tabs:[
                {title:"Кто мы?",subtitle:"Мы команда энтузиастов, которые занимаются любимым делом. Главное для нас не количество, а качество. Мы любим изучать что-то новое, ведь считаем что именно изучая новое - находишься постоянно в движеннии прогресса!"},
                {title:"Чем мы занимаемся?",subtitle:"Мы разрабатываем дизайн, сайты, мобильные приложения, ведем техподдержку и оптимизируем работу сайта!"},
                {title:"Что мы используем?",subtitle:"Мы используем только новейшие технологии при постройке сайта"},
                {title:"Каковы наши цели?",subtitle:"Наша цель-развитие, становление лучше изо дня в день!"},
            ],
            sections:[
                [{label:"UI,UX Дизайн", value: 90, color:"#185092"}],
                [{label:"Frontend", value: 90, color:"#1aade6"}],
                [{label:"JavaScript", value: 90, color:"#185092"}],
                [{label:"Backend", value: 90, color:"#1aade6"}],
            ],
            sectionText:["90","90","90","90"],
            max:100,
            office:office,

            progressBar:[
                {progress:[{label:"AdobePhotoshop",value:90},{label:"CorelDraw",value:90},{label:"Adobe After Effects",value:90}]},
                {progress:[{label:"HTML/CSS",value:90},{label:"SASS/LESS",value:90},{label:"FRAMEWORKS",value:90}]},
                {progress:[{label:"JavaScript",value:90},{label:"NODE",value:90},{label:"Vue/React/Angular and +ssr + native",value:90}]},
                {progress:[{label:"PHP",value:90},{label:"MySql",value:90},{label:"CakePhp/Yii2/Laravel",value:90}]},

            ],
            team:[
                {name:"Elon Musk", job:"Space-x and Tesla General Director", img:"/img/elon.jpg"},
                {name:"Elon Musk", job:"Space-x and Tesla General Director", img:"/img/elon.jpg"},
            ],
            comment:[
                {name:"Elon Musk",job:"Space-X and Tesla General Director",img:"/img/elon.jpg",text:"People work better when they know what the goal is and why. It is important that people look forward to coming to work in the morning and enjoy working."},
                {name:"Elon Musk",job:"Space-X and Tesla General Director",img:"/img/elon.jpg",text:"People work better when they know what the goal is and why. It is important that people look forward to coming to work in the morning and enjoy working."},
                {name:"Elon Musk",job:"Space-X and Tesla General Director",img:"/img/elon.jpg",text:"People work better when they know what the goal is and why. It is important that people look forward to coming to work in the morning and enjoy working."},
            ]
        })
    }
</script>

<style scoped>

</style>