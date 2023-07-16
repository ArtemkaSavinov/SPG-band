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
    <div class="main-history">
        <div class="container">
            <div class="row">
                <a href="1.html" class="main-history__item">
                    <div class="main-history__name">
                        <h2>История появления <br> SPG-Band</h2>
                        <p>Материал подготовили админы</p>
                    </div>
                </a>
                <a href="2.html" class="main-history__item">
                    <div class="main-history__name">
                        <h2>Предшественники <br> SPG-Band</h2>
                        <p>Материал подготовили админы</p>
                    </div>
                </a>
                <a href="3.html" class="main-history__item">
                    <div class="main-history__name">
                        <h2>История жизни DM</h2>
                        <p>Материал подготовили админы</p>
                    </div>
                </a>
                <a href="4.html" class="main-history__item">
                    <div class="main-history__name">
                        <h2>Наши традиции</h2>
                        <p>Материал подготовили участники</p>
                    </div>
                </a>
                <a href="5.html" class="main-history__item">
                    <div class="main-history__name">
                        <h2>Отзыв на наш сайт</h2>
                        <p>Отзыв написал Аноним</p>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<style lang="sass">
.main-history
    margin-top: 20px
    display: flex
    align-items: center
    flex-direction: column

    &__item
        width: 100%
        margin-left: 8px
        margin-right: 8px
        margin-bottom: 15px
        box-shadow: 4px 6px 9px 0px rgb(188 188 188)
        margin-top: 20px

        &:hover
            box-shadow: 11px 12px 16px 0px rgb(188 188 188)

    &__name
        display: inline-block
        color: black

        & h2
            font-size: 2.5rem !important
            margin-left: .4rem
            margin-right: .4rem

        & p
            font-size: 1.5rem
            text-align: left
            margin-left: .4rem
            margin-right: .4rem
</style>