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
                <a class="header__item" @click="goConcert">
                    Концерты
                </a>
                <a class="header__item" @click="goHistory">
                    Хроника
                </a>
            </nav>
        </div>
    </header>
</template>

<style lang="sass">
$white-color: #F4F4F4
$white-color-other: #FAFAFA
$header-shadow: 0px 0px 16px rgba(38, 38, 38, 0.16)
$menu-shadow: 0px 0px 5px 5px rgba(38, 38, 38, 0.16)

.header
    background-color: $white-color-other
    height: 15vh
    &__container
        display: flex
        height: 100%
        justify-content: center
        align-items: center

    &__logo
        position: relative
        cursor: pointer
    &__menu
        background-color: white
        display: flex
        justify-content: space-around
        align-items: center
        padding: 0
        height: 5rem
        box-shadow: $menu-shadow

    &__nav
        list-style: none
        padding: 0
        margin: 0

    &__item
        font-family: 'Montserrat', sans-serif
        font-weight: 600
        letter-spacing: .6rem
        text-align: center
        cursor: pointer
        transition: .4s
        &:hover
            transform: translateY(.2rem)
.title
    text-align: center
    font-size: 3.5rem
</style>