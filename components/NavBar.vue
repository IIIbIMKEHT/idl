<template>
    <section class="section"  style="position: fixed; z-index: 500">
        <b-navbar toggleable="lg" class="onTop" type="dark">
            <b-navbar-brand class="brand" href="/">
                <img src="/img/logo.png">
                IDL</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>


                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <div class="div-item" v-for="(link, i) of links" :key="i" ><div style="display: inline; margin-right: 5px"><fa :icon="link.icon" ></fa></div>    <a class="div-link" :href="link.url" v-smooth-scroll="{ duration: 1000}">{{link.title}}</a></div>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </section>
</template>

<script>
    export default {
        name: "NavBar",
        data:()=>({
            links:[
                {title:"Главная",url:"#id-carousel",icon:["fas","home"]},
                {title:"О нас",url:"#id-about",icon:["fas","building"]},
                {title:"Услуги",url:"#id-service",icon:["fas","cubes"]},
                {title:"Как мы работаем",url:"#id-work",icon:["fas","desktop"]},
                {title:"Контакты",url:"#id-contact",icon:["fas","address-book"]},
            ]
        }),
    }
</script>

<style scoped>

</style>
