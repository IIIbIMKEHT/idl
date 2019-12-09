<template>
    <section class="section Footer">
        <b-container class="containerFooter" fluid>
            <b-row class="rowFooter">
                <b-col md="4" sm="12" class="about">
                    <img src="/img/logo.png">
                    <h3>IDL - команда профессионалов</h3>
                    <p>Создаем сайты любой сложности, оптимизируем и запускаем.<br> Респонзивный дизайн, постоянная поддержка,гибкая цена</p>
                </b-col>

                <b-col md="4" sm="12" class="links d-flex justify-content-center">
                    <div>
                        <h5>Навигация</h5>
                        <p v-for="item of links">
                            <fa :icon="item.icon"></fa>
                            <a class="alink" :href="item.url" v-smooth-scroll="{ duration: 1000}"> {{item.title}} </a>
                        </p>
                    </div>
                </b-col>

                <b-col md="4" sm="12" class="links d-flex justify-content-center">
                    <vue-lottie ref="lottie" loop autoplay :data="office" :height="300" :width="300"></vue-lottie>
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
    import vueLottie from 'vue-lottie-ssr/src/components/vue-lottie.vue'
    import office from '../static/anim/office.json'
    export default {
        name: "FooterBar",
        data:()=>({
            office: office,
            year:new Date().getFullYear(),
            links:[
                {title:"Главная",url:"#id-carousel",icon:["fas","home"]},
                {title:"О нас",url:"#id-about",icon:["fas","building"]},
                {title:"Услуги",url:"#id-service",icon:["fas","cubes"]},
                {title:"Как мы работаем",url:"#id-work",icon:["fas","desktop"]},
                {title:"Контакты",url:"#id-contact",icon:["fas","address-book"]},
            ],
        }),
        components: {
            vueLottie
        }
    }
</script>

<style scoped>

</style>
