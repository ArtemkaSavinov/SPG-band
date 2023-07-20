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
        <!-- <a href="#openModal" class="open-modal">Вход для админов</a> -->
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
    // &__container
    //     display: flex
    //     justify-content: space-evenly
    //     align-items: center
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

// модальное окно
// .modalWindow 
//     position: fixed
//     top: 0
//     right: 0
//     bottom: 0
//     left: 0
//     background: rgba(0,0,0,0.6)
//     color: white
//     z-index: 30
//     opacity:0
//     pointer-events: none
//     text-align:center
//     &__input-group
//         display: flex
//         flex-direction: column
//         gap: 2rem
//         & input
//             display: block
            
//     &:target 
//         opacity:1
//         pointer-events: auto
//         & body
//             overflow-y: hidden

//     & > div 
//         width: 500px
//         position: relative
//         margin: 10% auto
//         background: black
//         border: .5rem solid white
//         border-radius: .5rem
//         & > form
//             padding: 2rem
//             margin: auto

// .open-modal
//     position: absolute
//     right: 1%
//     top: 1%
//     text-decoration: none
//     font-family: 'Montserrat', sans-serif
//     color: black
</style>