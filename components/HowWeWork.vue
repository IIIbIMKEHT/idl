<template>
    <section class="section" id="id-work">


        <b-container class="containerWork" fluid>
            <b-row class="typicalRow">
                <b-col md="12">
                    <h1>Как мы работаем?</h1>
                    <p>Как мы работаем?</p>
                </b-col>
            </b-row>
            <b-row class="typicalRowContent">
                <b-col class="colWork" md="3" sm="12" v-for="(card, i) of cards" :key="i" data-aos="flip-left">
                    <b-card class="cards" >
                        <div class="circle">
                            <fa class="icon" :icon="card.icon"></fa>
                        </div>
                        <h3>{{card.title}}</h3>
                        <p>{{card.subtitle}}</p>
                    </b-card>

                </b-col>

            </b-row>
        </b-container>


    </section>
</template>

<script>
    export default {
        name: "HowWeWork",
        data:()=>({
            cards:[
                {title:"Идея",subtitle:"Обдумываем идею и планируем ее реализацию",icon:["fas","lightbulb"]},
                {title:"Реализация",subtitle:"Создание дизайна, программирование",icon:["fas","code-branch"]},
                {title:"Оптимизация",subtitle:"Оптимизация и тестирование",icon:["fas","cog"]},
                {title:"Реализация",subtitle:"Реализация готового проекта",icon:["fas","rocket"]},
            ]
        })
    }
</script>

<style scoped>

</style>
