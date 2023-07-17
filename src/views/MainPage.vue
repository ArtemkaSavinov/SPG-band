<script>
import axios from 'axios';
export default {

}
</script>

<template>
    <main class="main">
        <h2 class="title">Внимание!</h2>
        <p class="main__text">
            Итак, данный сайт был сделан, чтоб рассказать вам о нашем
            коллективе. Участники могут скидывать нам информацию, которую мы
            будем размещать на сайте <br />
            Надеемся вам понравится (:
        </p>
        <div class="main__news">
            <h2>Следующий концерт будет в мае!</h2>
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
    margin: .5rem

    &__text
        font-size: 2rem
        margin: 0 7.5rem 0 7.5rem

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