<script>
export default {
    mounted() {
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
        },
    }
}
</script>

<template>
    <header class="header">
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

.header    
    background: white
    padding: 1.5rem 0
    animation: down 1s ease-out 0s
    position: sticky
    top: 0
    border-bottom: 2px solid black
    z-index: 30
    opacity: .7
    &__logo
        position: relative
        cursor: pointer
        width: 10%
        height: 100%
    &__menu
        background-color: white
        display: flex
        justify-content: center
        align-items: center
        padding: 0
        height: 5rem
        gap: 2rem
        & img
            transition: .4s
            &:hover
                transform: translateY(.3rem)
            &:active
                transform: translate(0rem)

    &__item
        font-family: 'Montserrat', sans-serif
        font-weight: 600
        font-size: 1.8rem
        letter-spacing: .2rem
        text-align: center
        cursor: pointer
        transition: .4s
        &:hover
            transform: translateY(.3rem)
        &:active
            transform: translateY(0rem)
    &__item-active
        font-weight: 800
        transform: skewY(-3deg) !important
        text-decoration: underline
        letter-spacing: .5rem
@media (max-width: 425px) 
    .header__menu
        flex-direction: column
@keyframes down
    0%
        opacity: 0
        transform: translateY(-5rem)
    100%
        opacity: 1
        transform: translateY(0rem)
</style>