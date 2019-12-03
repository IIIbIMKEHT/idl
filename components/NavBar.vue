<template>
    <section class="section"  style="position: fixed; z-index: 500">
        <b-navbar toggleable="lg" class="onTop" type="dark">
            <b-navbar-brand class="brand" href="#">
                <img src="/img/logo.png">
                IDL</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>


                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item v-for="(link, i) of links" :key="i" :to="link.url"><div style="display: inline; margin-right: 5px"><fa :icon="link.icon" ></fa></div>{{link.title}}</b-nav-item>
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
                {title:"Главная",url:"/",icon:["fas","home"]},
                {title:"О команде",url:"/about",icon:["fas","building"]},
                {title:"Портфолио",url:"/portfolio",icon:["fas","desktop"]},
                {title:"Сервис",url:"/service",icon:["fas","cubes"]},
                {title:"Контакты",url:"/contact",icon:["fas","address-book"]},
            ]
        }),
    }
</script>

<style scoped>

</style>
