<template>
    <section class="section Contact" data-aos="flip-up">
        <b-container class="containerContact" fluid>
            <b-row class = "typicalRow">
                <b-col md="12">
                    <h1>Наши контакты</h1>
                    <p>У вас остались вопросы? Напишите нам!</p>
                </b-col>
            </b-row>
            <b-row class="typicalRowContent">
                <b-col md="6" order-md="1" order-sm="2" class="formSocial">
                    <div class="contacts">
                        <h3 class="formH3"> Мы в соц. сетях</h3>
                        <div v-for="item of social">
                            <img :src="item.url">{{item.title}}
                        </div>
                    </div>


                </b-col>
                <b-col md="6" order-md="2"  order-sm="1" class="formContact">
                    <h3 class="formH3">Напишите нам!</h3>
                    <b-form-input id="input-1" type="text" required  placeholder="Ваше имя"></b-form-input>
                    <b-form-input id="input-2" type="text" required  placeholder="Ваш телефон"></b-form-input>
                    <b-form-input id="input-3" type="email"  placeholder="Ваша почта"></b-form-input>
                    <b-form-textarea
                            id="textarea"
                            v-model="text"
                            placeholder="Ваш комментарий"
                            rows="3"
                            max-rows="6"
                    ></b-form-textarea>
                    <b-button variant="success" style="margin-top:5px">Отправить</b-button>


                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
    export default {
        name: "Contact",
        data:()=>({
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