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
                <a class="header__link"
                    ><img src="src/assets/icons/logo.png" width="68" height="87"
                /></a>
            </div>
            <nav class="header__menu">
                <ul class="header__nav">
                    <li class="header__item" @click="goBands">
                        <a class="header__link">
                            <button class="header__button">Составы</button>
                        </a>
                    </li>
                    <li class="header__item" @click="goLibrary">
                        <a class="header__link">
                            <button class="header__button">Репертуар</button>
                        </a>
                    </li>
                    <li class="header__item" @click="goConcert">
                        <a class="header__link">
                            <button class="header__button">Концерты</button>
                        </a>
                    </li>
                    <li class="header__item" @click="goHistory">
                        <a class="header__link">
                            <button class="header__button">Хроника</button>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<style lang="sass">
$white-color: #F4F4F4
$white-color-other: #FAFAFA
$header-shadow: 0px 0px 16px rgba(38, 38, 38, 0.16)
$menu-shadow: 0px 0px 5px 5px rgba(38, 38, 38, 0.16)
$header-button-active-shadow: inset 0px 0px 7px 0px rgb(114 114 114 / 50%)

.header
    height: 115px
    background-color: $white-color-other
    box-shadow: $header-shadow

    &__container
        display: flex
        height: 100%
        justify-content: center
        align-items: center

    &__logo
        position: relative

    &__menu
        background-color: white
        display: flex
        justify-content: space-around
        align-items: center
        padding: 0
        margin: .8rem 1rem .8rem 7.5rem
        height: 5rem
        box-shadow: $menu-shadow

    &__nav
        list-style: none
        padding: 0
        margin: 0

    &__item
        display: inline-block

    &__button
        font-family: 'Montserrat Alternates', sans-serif
        border: 3px solid white
        text-align: center
        cursor: pointer
        &:hover
            border: 3px outset #b6b6b6

        &:active
            box-shadow: $header-button-active-shadow
    
    &__link
        cursor: pointer

.title
    text-align: center
    font-size: 3.5rem
</style>