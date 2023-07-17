<script>
import axios from 'axios';
export default {

}
</script>

<template>
    <main class="main">
        <h2 class="title-second">Ахтунг!</h2>
        <p class="main__text">
            Здравствуй, дорогой рокер, ты попал на сайт величайшей в мире музыкальной групппы SPG-Band под предводительством великого и ужасного DM. Здесь ты познакомишься с нашим коллективом, узнаешь наши традиции и посмотришь записи наших самых лучших выступлений!!! <br />
            Надеемся вам понравится (:
        </p>
        <div class="main__news">
            <h2>Сайт перерабатывается, ждите...</h2>
        </div>
        <div class="main__logo-container">
            <img class="main__logo" src="src/assets/icons/logo.jpg" />
        </div>
    </main>
</template>

<style lang="sass">
@mixin Img()
    display: block
    width: 100%
    object-fit: contain

.main
    &__text
        font-size: 2rem
        margin: 0 7.5rem 0 7.5rem
        text-indent: 4rem
    &__news
        text-align: center
        padding: 3.5rem 0 5rem 0
        border-radius: .5rem
        margin: 1.5rem 5rem 0 5rem
        background-color: #f0f0f0
        box-shadow: 0px 8px 20px 0px #8684a6
        font-size: 2rem

    &__logo-container
        display: flex
        justify-content: center
        margin-bottom: 5rem
        margin-top: 2.5rem

    &__logo
        @include Img
        height: 36rem
        width: 26.9rem
        box-shadow: -3px 6px 11px 1px rgb(222, 222, 222)

</style>