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
        <div class="header__container">
            <div class="header__logo" @click="goMain">
                <a class="header__link"><img src="src/assets/icons/logo.png" width="68" height="87" /></a>
            </div>
            <nav class="header__menu">
                <a class="header__item" @click="goBands">
                    Составы
                </a>
                <a class="header__item" @click="goLibrary">
                    Репертуар
                </a>
                <!-- <a class="header__item" @click="goConcert">
                    Концерты
                </a> -->
                <a class="header__item" @click="goHistory">
                    Хроника
                </a>
            </nav>
        </div>
    </header>
</template>

<style lang="sass">
$white-color:v
$white-color-other: #FAFAFA
$header-shadow: 0px 0px 16px rgba(38, 38, 38, 0.16)
$menu-shadow: 0px 0px 5px 5px rgba(38, 38, 38, 0.16)

.header    
    background: white
    padding: 1.5rem 0
    &__container
        display: flex
        height: 100%
        justify-content: space-evenly
        align-items: center
    &__logo
        position: relative
        cursor: pointer
        box-shadow: 0px 4px 5px 0px
    &__menu
        background-color: white
        display: flex
        justify-content: space-around
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
.title
    text-align: center
    font-size: 3.5rem
</style>