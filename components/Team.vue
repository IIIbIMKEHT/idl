<template>
    <section class = "section Team">
        <b-container  class = "containerTeam" fluid data-aos="zoom-in">

            <b-row class="typicalRow">
                <b-col md="12">
                    <h1>Наша команда</h1>
                    <p>Встречайте нашу команду</p>
                </b-col>
            </b-row>

            <b-row class="typicalRowContent">

                <b-col class="teammates" md="6" v-for="(item, index) of team" :key="index" data-aos="zoom-in-up">
                    <div class="teamcard">
                        <div class="circle" :style="{'background-image':'url('+item.img+')', 'background-size':'cover'}"></div>
                        <h3>{{item.name}}</h3>
                        <p>{{item.job}}</p>
                    </div>
                </b-col>
            </b-row>
            <b-row class="typicalRowContent slide3">

                <hooper class="hooperTeam" :infiniteScroll="true" :wheelControl="false" :autoPlay="true" :playSpeed="3000">
                    <slide class="slideTeam" v-for="(item, index) of comment" :key="index">
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
    import office from '../static/anim/office.json'
    export default {
        name: "Team",
        components:{
            Hooper,Slide,HooperPagination,vueLottie
        },
        data:()=>({
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
