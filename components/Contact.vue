<template>
    <section class="section Contact" id="id-contact">
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
                        <div>
                            <!-- По умолчанию -->
                            <iframe src='http://idl.kz/public/bot/' data-inwidget scrolling='no' frameborder='no' style='border:none;width:260px;height:330px;overflow:hidden;'></iframe>
                        </div>
                    </div>


                </b-col>
                <b-col md="6" order-md="2"  order-sm="1" class="formContact">
                    <h3 class="formH3">Напишите нам!</h3>
                    <b-form-input id="input-1" type="text" v-model="name"  @blur="$v.name.$touch" :state="$v.name.$dirty ? !$v.name.$invalid : mystate " required  placeholder="Ваше имя"></b-form-input>
<!--                    <b-form-input id="input-2" type="text" v-model="phone"  @blur="$v.phone.$touch"  :state="$v.phone.$dirty ? !$v.phone.$invalid : mystate " required  placeholder="Ваш телефон"></b-form-input>-->
                    <the-mask class="form-control" v-model="phone" :mask="['+7(###)### ##-##']" masked="true" placeholder="Ваш телефон" @blur="$v.phone.$touch"  :state="$v.phone.$dirty ? !$v.phone.$invalid : mystate"></the-mask>
<!--                    <b-form-input id="input-3" type="email" v-model="email"  @blur="$v.email.$touch" :state="$v.email.$dirty ? !$v.email.$invalid : mystate "  placeholder="Ваша почта"></b-form-input>-->
                    <b-form-textarea
                            id="textarea"
                            placeholder="Ваш комментарий"
                            v-model="messages"  @blur="$v.messages.$touch"
                            rows="3"
                            max-rows="6"
                    ></b-form-textarea>
                    <b-button @click="submitForm" variant="success" style="margin-top:5px">Отправить</b-button>


                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
    import { required,email } from 'vuelidate/lib/validators';
    import {TheMask} from 'vue-the-mask'
    export default {
        name: "Contact",
        components: {
            TheMask
        },
        data:()=>({
            name: "",
            phone:"",
            email:"",
            messages:"",
            mystate:null,
            social:[
                {title:"ВКонтакте",url:"/img/icon/vk.png"},
                {title:"Инстаграм",url:"/img/icon/ig.png"},
                {title:"Facebook",url:"/img/icon/fb.png"},
                {title:"Gmail",url:"/img/icon/gmail.png"},
                {title:"Telegramm",url:"/img/icon/tg.png"},
                {title:"Whats`app",url:"/img/icon/wt.png"},

            ]
        }),
        validations:{
            name:{
                required
            },
            phone:{
                required
            },
            // email:{
            //     required,
            //     email,
            // },
            messages:{
                required
            }
        },
        methods: {
            submitForm:function () {
                if (!this.$v.$invalid){
                    this.$swal( 'Успешно!',
                        'Ваше письмо отправлено!',
                        'success')
                }
                else {
                    this.$swal( 'Ошибка!',
                        'Заполните все поля!',
                        'error')
                }
            },
        },

    }
</script>
