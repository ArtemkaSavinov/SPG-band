<script>
import axios from 'axios';
export default {

}
</script>

<template>
    <main class="main">
        <div class="paralax"></div>
        <div class="main-first-block">
            <p class="main-first-block__text">
                Здравствуй, дорогой рокер, ты попал на сайт величайшей в мире музыкальной групппы SPG-Band под
                предводительством великого и ужасного <b> DM </b>
            </p>
        </div>
        <div class="paralax"></div>
        <div class="message-block mb-3">
            <h2>Сайт перерабатывается, ждите...</h2>
        </div>
        
    </main>
</template>

<style lang="sass">
@mixin Img()
    display: block
    width: 100%
    object-fit: contain

.main
    // height: 100%
    // &__logo-container
    //     display: flex
    //     justify-content: center
    //     margin-bottom: 5rem

        
.paralax
    background-image: url(src/assets/DM/DM-1.jpg)
    background-position: center
    background-attachment: fixed
    background-size: cover
    background-repeat: no-repeat
    height: 70vh
.main-first-block
    position: relative
    &__text
        background: rgba(#FFFFFF, .8 )
        width: 80%
        font-size: 2rem
        letter-spacing: .3rem
        text-indent: 4rem
        font-weight: 500
        position: absolute
        top: 75%
        left: 50%
        padding: 2rem
        border-radius: 1rem
        border: .1rem solid gray
        text-align: center
        transform: translate(-50%, -50%)
</style>