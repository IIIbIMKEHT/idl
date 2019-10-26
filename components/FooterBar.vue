<template>
    <section class="section Footer">
        <b-container class="containerFooter" fluid>
            <b-row class="rowFooter">
                <b-col md="4" sm="12" class="about">
                    <img src="/img/logo.png">
                    <h3>IDL - команда профессионалов</h3>
                    <p>Создаем сайты любой сложности, оптимизируем и запускаем.<br> Респонзивный дизайн, постоянная поддержка,гибкая цена</p>
                </b-col>
                <b-col md="4" sm="12" class="links">
                    <h5>Навигация</h5>
                    <p v-for="item of links">
                        <fa :icon="item.icon"></fa>
                        <a :to="item.url"> {{item.title}} </a>
                    </p>

                </b-col>
                <b-col md="4" sm="12" class="social">
                    <h5>Полезные ссылки</h5>
                    <p v-for="item of social">
                        <a>{{item.title}}</a>
                    </p>

                </b-col>
            </b-row>
            <b-row>
                <b-col md="12" class="text-center">
                    <h5>Создано в IDL {{year}}.</h5>
                </b-col>

            </b-row>
        </b-container>

    </section>
</template>

<script>
    export default {
        name: "FooterBar",
        data:()=>({
            year:new Date().getFullYear(),
            links:[
                {title:"Главная",url:"/",icon:["fas","home"]},
                {title:"О команде",url:"/about",icon:["fas","building"]},
                {title:"Портфолио",url:"/portfolio",icon:["fas","desktop"]},
                {title:"Сервис",url:"/service",icon:["fas","cubes"]},
                {title:"Контакты",url:"/contact",icon:["fas","address-book"]},
            ],
            social:[
                {title:"ВКонтакте",url:"/img/icon/vk.png"},
                {title:"Инстаграм",url:"/img/icon/ig.png"},
                {title:"Facebook",url:"/img/icon/fb.png"},
                {title:"Gmail",url:"/img/icon/gmail.png"},
                {title:"Telegramm",url:"/img/icon/tg.png"},
                {title:"Whats`app",url:"/img/icon/wt.png"},


            ]

        })
    }
</script>

<style scoped>

</style>