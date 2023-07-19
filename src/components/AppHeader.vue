<script>
export default {
    mounted() {
        console.log(this.$route.name)
        console.log(this.$route)
    },

    methods: {
        goMain() {
            this.$router.push({
                name: 'main'
            })
        },

        goLibrary() {
            this.$router.push({
                name: 'library',
            })
        },

        goBands() {
            this.$router.push({
                name: 'bands',
            })
        },

        goConcert() {
            this.$router.push({
                name: 'concert',
            })
        },

        goHistory() {
            this.$router.push({
                name: 'history',
            })
        }
    }
}
</script>

<template>
    <header class="header">
        <!-- <div class="header__logo" @click="goMain">
                <a class="header__link"><img src="/src/assets/icons/logo.png" width="68" height="87" /></a>
            </div> -->
        <nav class="header__menu">
            <a class="header__item" @click="goBands" :class="{ 'header__item-active': this.$route.name == 'bands' }">
                Составы
            </a>
            <a class="header__item" @click="goLibrary" :class="{ 'header__item-active': this.$route.name == 'library' }">
                Репертуар
            </a>
            <img @click="goMain" src="../assets/icons/drums.svg" class="header__logo" alt="Логотип нашего коллектива">
            <a class="header__item" @click="goConcert" :class="{ 'header__item-active': this.$route.name == 'concert' }">
                Концерты
            </a>
            <a class="header__item" @click="goHistory" :class="{ 'header__item-active': this.$route.name == 'history' }">
                Хроника
            </a>
        </nav>

    </header>
</template>

<style lang="sass">
$white-color-other: #FAFAFA
$header-shadow: 0px 0px 16px rgba(38, 38, 38, 0.16)
$menu-shadow: 0px 0px 5px 5px rgba(38, 38, 38, 0.16)

.header    
    background: white
    padding: 1.5rem 0
    animation: down 1s ease-out 0s
    // &__container
    //     display: flex
    //     justify-content: space-evenly
    //     align-items: center
    &__logo
        position: relative
        cursor: pointer
        width: 10%
        height: 80%
    &__menu
        background-color: white
        display: flex
        justify-content: center
        align-items: center
        padding: 0
        height: 5rem
        gap: 2rem
    &__item
        font-family: 'Montserrat', sans-serif
        font-weight: 600
        font-size: 1.6rem
        letter-spacing: .6rem
        text-align: center
        cursor: pointer
        transition: .4s
        &:hover
            transform: translateY(.3rem)
        &:active
            transform: translateY(0rem)
    &__item-active
        font-weight: 800
        transform: skewY(-3deg) 
        text-decoration: underline
.title
    text-align: center
    font-size: 3.5rem

@keyframes down
    0%
        opacity: 0
        transform: translateY(-5rem)
    100%
        opacity: 1
        transform: translateY(0rem)
</style>