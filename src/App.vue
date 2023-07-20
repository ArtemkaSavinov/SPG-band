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
            ifScroll: false
        }
    },

    mounted() {
        window.addEventListener('scroll', () => this.ifScroll = window.scrollY > 50) 
    }
}

</script>

<template>
    <app-header :class="{'small-header': ifScroll}" class="header-app">
    </app-header>
    <router-view :class="{ relative: this.$route.name == 'main' }"></router-view>
    <app-footer></app-footer>
</template>
 
<style lang="sass">
    $white-color: #F4F4F4
    $white-color-other: #FAFAFA
    $header-shadow: 0px 0px 16px rgba(38, 38, 38, 0.16)
    $menu-shadow: 0px 0px 5px 5px rgba(38, 38, 38, 0.16)
    $header-button-active-shadow: inset 0px 0px 7px 0px rgb(114 114 114 / 50%)

    router-view
        animation: leftToASS 1s ease-out 0s
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
</style>
