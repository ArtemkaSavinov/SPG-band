<script>
export default {
    data() {
        return {

        }
    },

    methods: {

    }
}
</script>

<template>
    <div class="main-lib">
        <h1 class="title">В данном разделе вы сможете найти записи наших выступлений</h1>
        <div class="main-lib__container container">
            <div class="row">
                <a href="advinta.html" class="col-lg-6 col-md-6 col-xs-12 main-lib__card">
                    <div class="main-lib__concert">
                        <h2 class="main-lib__name-concert">Сборник "От винта"</h2>
                        <p class="main-lib__concert-date">∞</p>
                    </div>
                </a>
                <a href="04032022.html" class="col-lg-6 col-md-6 col-xs-12">
                    <div class="main-lib__concert">
                        <h2 class="main-lib__name-concert">238 фебрамарта</h2>
                        <p class="main-lib__concert-date">04.03.2022</p>
                    </div>
                </a>
                <a href="29122021.html" id="concert_card" class="col-lg-6 col-md-6 col-xs-12 main-lib__card">
                    <div class="main-lib__concert">
                        <h2 class="main-lib__name-concert">Новогодний праздник</h2>
                        <p class="main-lib__concert-date">29.12.2021</p>
                    </div>
                </a>
                <a href="12102021.html" id="concert_card" class="col-lg-6 col-md-6 col-xs12 main-lib__card">
                    <div class="main-lib__concert">
                        <h2 class="main-lib__name-concert">Осенний концерт</h2>
                        <p class="main-lib__concert-date">12.10.2021</p>
                    </div>
                </a>
                <a href="22062021.html" id="concert_card" class="col-lg-6 col-md-6 col-xs-12 main-lib__card">
                    <div class="main-lib__concert">
                        <h2 class="main-lib__name-concert">Концерт Цоя</h2>
                        <p class="main-lib__concert-date">22.06.2021</p>
                    </div>
                </a>
                <a href="old_collection.html" id="concert_card" class="col-lg-6 col-md-6 col-xs-12 main-lib__card">
                    <div class="main-lib__concert">
                        <h2 class="main-lib__name-concert">Коллекция старых записей</h2>
                        <p class="main-lib__concert-date">Очень-очень давно</p>
                    </div>
                </a>
            </div>
        </div>
    </div>  
</template>

<style lang="sass">
.main-lib
    &__card
        padding: .5rem

    &__concert
        box-shadow: 4px 6px 9px 0px rgb(188 188 188)
        box-sizing: inherit
        width: 100%
        display: inline-block

        &:hover
            box-shadow: 11px 12px 16px 0px rgb(188 188 188)

    &__name-concert, &__concert-date
        text-align: center
        font-size: 2.5rem
        color: black
</style>