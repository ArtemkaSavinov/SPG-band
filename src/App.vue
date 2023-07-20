<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import { RouterView } from 'vue-router';

export default {
    components: {
        AppHeader,
        RouterView,
        AppFooter
    },
    data() {
        return {
            ifScroll: false,
            scrollLock: false,
        }
    },

    methods: {
        scrollLock() {
            this.scrollLock = true
        },

        scrollUnlock() {
            this.scrollLock = false
        }
    },

    mounted() {
        window.addEventListener('scroll', () => this.ifScroll = window.scrollY > 50)
        this.scrollLock
    }
}

</script>

<template>
    <div :class="{scrollLock: this.scrollLock}">
        <app-header :class="{ 'small-header': ifScroll }" class="header-app"></app-header>

        <!-- <a @click="scrollLock"  class="open-modal">Вход для админов</a> -->

        <div id="openModal" class="modalWindow">
            <div>
                <form action="">
                    <h2>Докажи, что админ</h2>
                    <div class="modalWindow__input-group">
                        <input type="text" placeholder="Логин">
                        <input type="text" placeholder="Пароль">
                    </div>
                    <button type="submit" preventDefault></button>
                    <a href="/" title="Ok" class="modalWindow__link" @click="scrollUnlock">Закрыть</a>
                </form>
            </div>
        </div>

        <router-view :class="{ relative: this.$route.name == 'main' }"></router-view>
        <app-footer></app-footer>
    </div>
</template>
 
<style lang="sass">
    $white-color: #F4F4F4
    $white-color-other: #FAFAFA
    $header-shadow: 0px 0px 16px rgba(38, 38, 38, 0.16)
    $menu-shadow: 0px 0px 5px 5px rgba(38, 38, 38, 0.16)
    $header-button-active-shadow: inset 0px 0px 7px 0px rgb(114 114 114 / 50%)

    //Блокировка прокрутки при открытии модального окна
    .scrollLock
        height: 100vh
        overflow: hidden
    
    router-view
        animation: leftToASS 1s ease-out 0s
    app-header
        position: relative
    .header-app
        transition: .5s
    @mixin Img() 
        display: block
        width: 100%
        object-fit: contain
    body
        margin: 0

    html
        font-size: 10px
        font-family: 'Montserrat', sans-serif
        box-sizing: content-box
        background-color: $white-color
        zoom: 100%
        margin: 0        
        overflow-x: hidden
    b
        font-weight: 800
        letter-spacing: .6rem
        

    .small-header
        padding: 0 !important
    //Компоненты
    .message-block
        text-align: center
        padding: 3.5rem 0 5rem 0
        border-radius: 1rem
        margin: 2rem 1rem
        background-color: #353535
        color: white
        box-shadow: 0px 8px 10px 0px #8684a6
        transition: .5s
        &:hover
            transform: scale(1.04)
        & > h2            
            font-size: 2.5rem
            letter-spacing: .4rem
            font-weight: 500
    .title-second
        margin: 0
        text-align: center
        font-size: 3rem
        letter-spacing: .6rem
        font-weight: 500
    .title-third
        margin-top: 2rem
        text-align: center
        font-size: 2rem
        letter-spacing: .5rem
        font-weight: 500
    .title-six
        font-size: 1.5rem
        margin: 2rem 0
    //утилиты
    .text-white
        color: white
    .mb-3
        margin-bottom: 3rem
    .mb-5
        margin-bottom: 5rem

    @keyframes leftToASS
        0%
            opacity: 0
        100%
            opacity: 1

            
    // модальное окно
    .modalWindow 
        position: fixed
        top: 0
        right: 0
        bottom: 0
        left: 0
        background: rgba(0,0,0,0.6)
        color: white
        z-index: 30
        opacity:0
        pointer-events: none
        &__input-group
            display: flex
            flex-direction: column
            gap: 2rem
            
        &:target 
            opacity:1
            pointer-events: auto

        & > div 
            width: 500px
            position: relative
            margin: 10% auto
            background: black
            border: .5rem solid white
            border-radius: .5rem
            & > form
                padding: 2rem
                margin: auto

    .open-modal
        position: fixed,
        z-index: 30
        right: 1%
        top: 1%
        text-decoration: none
        font-family: 'Montserrat', sans-serif
        color: black
        cursor: pointer
    .scrollLock
        height: 100vh
        overflow: hidden
</style>
