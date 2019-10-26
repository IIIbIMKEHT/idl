<template>
    <section class="section service">
        <b-container class="servisecontainer">
            <b-row class="typicalRow">
                <b-col md="12">
                    <h1 class="typicalH">Наши Услуги</h1>
                    <p>Занимаемся широким спектором услуг</p>
                </b-col>
            </b-row>
            <b-row class="typicalRowContent fullScreen">
                <b-col class="serviceCol" md="3" sm="12" v-for="item of cards" data-aos="zoom-in">
                    <div class="serviceCard" >
                        <fa  class="icon" :icon="item.icon"></fa>
                        <h3>{{item.title}}</h3>
                        <p>{{item.subtitle}}</p>
                    </div>
                </b-col>
            </b-row>

            <b-row class="typicalRowContent smallService">
                <hooper class="hooperService">
                    <slide v-for="item of cards">
                        <b-row>
                            <b-col class="serviceCol2" sm="12" >
                                <div class="serviceCard" >
                                    <fa  class="icon" :icon="item.icon"></fa>
                                    <h3>{{item.title}}</h3>
                                    <p>{{item.subtitle}}</p>
                                </div>
                            </b-col>
                        </b-row>
                    </slide>
                </hooper>
            </b-row>
            <b-row class="typicalRowContent">
                <b-col class="charts" v-for="(section,index) of sections">
                    <vc-donut :sections="sections[index]"  foreground="white" background="#111111" has-legend legend-placement="bottom"><h1>{{sectionText[index]}}%</h1></vc-donut>

                </b-col>
            </b-row>

        </b-container>
    </section>
</template>

<script>
    import {Hooper,Slide} from "hooper"
    import 'hooper/dist/hooper.css';
    export default {
        name: "Service",
        components:{
            Hooper,Slide
        },
        data:()=>({
            cards:[
                {title:"Дизайн сайта", subtitle:"Неповторимый и адаптивный дизайн",icon:['fas','tint']},
                {title:"Создание сайтов", subtitle:"Создаем сайты любой сложности, быстро и качественно",icon:['fas','file-code']},
                {title:"Оптимизация", subtitle:"Оптимизируем и ускоряем сайты",icon:['fas','cog']},
                {title:"Техподдержка", subtitle:"Помомжем оптимизировать ваш сайт",icon:['fas','headset']}
            ],
            sections:[
                [{label:"Дизайн", value: 30, color:"#185092"}],
                [{ label:"Дизайн", value: 30, color:"#185092" },{label:"Программирование",value:40,color:"#1aade6"},],
                [{ label:"Дизайн", value: 30, color:"#185092" },{label:"Программирование",value:40,color:"#1aade6"},{label:"Оптимизация",value:20,color:"#ff6384"}],
                [{ label:"Дизайн", value: 30, color:"#185092" },{label:"Программирование",value:40,color:"#1aade6"},{label:"Оптимизация",value:20,color:"#ff6384"},{label:"Тестирование",value:10,color:"#ffce56"}],
            ],
            sectionText:["30","40","90","100"]




        })
    }
</script>

<style scoped>

</style>