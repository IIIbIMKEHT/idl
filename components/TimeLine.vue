<template>
    <section class="section TimeLine">
        <div class="container py-5">


            <div class="row">
                <div class="col-lg-7 mx-auto">

                    <!-- Timeline -->
                    <ul class="timeline">
                        <li class="timeline-item rounded ml-3 p-4 shadow" v-for="item of timeline" data-aos="flip-down">
                            <div class="timeline-arrow"></div>
                            <div class= "circle">
                                <fa class="icon" :icon="item.icon"></fa>
                            </div>
                            <h2 class="h5 mb-0">{{item.title}}</h2><span class="small text-gray"><i class="fa fa-clock-o mr-1"></i>{{item.time}}</span>
                            <p class="text-small mt-2 font-weight-light">{{item.subtitle}}</p>
                        </li>

                    </ul><!-- End -->

                </div>
            </div>
        </div>



    </section>
</template>

<script>
    export default {
        name: "TimeLine",
        data:()=>({
            timeline:[
                {title:"Планнирование",subtitle:"Создание макета, определение дизайна и создание респонзивного дизайна",time:"1 неделя",icon:["fas","lightbulb"]},
                {title:"Разработка",subtitle:"Разработка функционала и модели будущего приложения",time:"2 неделя",icon:["fas","code-branch"]},
                {title:"Тестирование и Оптимизация",subtitle:"Тестирование и оптимизация существующего проекта и доработка существуещего функционала",time:"3 неделя",icon:["fas","cog"]},
                {title:"Реализация",subtitle:"Реализация готового проекта",time:"4 неделя",icon:["fas","rocket"]},
            ]
        })
    }
</script>

<style scoped>

</style>