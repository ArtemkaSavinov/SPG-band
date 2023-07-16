<script>
    export default {
        data() {
            return{
                
            }
        }
    }
</script>

<template>
<div class="bands">
            <h1 class="title">В нашу дружную команду входят следующие коллективы:</h1>
            <div class="container">
                <div class="row bands__list">
                    <div class="col-lg-4 col-md-6 col-xs-12 bands__list-item">
                        <a href="bands_7_massive.html">
                            <div class="bands__photo">
                                <img src="src/assets/bands/sem.PNG" height="200px" />
                            </div>
                            <div class="bands__num">
                                <p>7 параллель</p>
                            </div>
                        </a>
                    </div>
                    <div  class="col-lg-4 col-md-6 col-xs-12 bands__list-item">
                        <a href="bands_8_massive.html">
                            <div class="bands__photo">
                                <img src="src/assets/bands/vos.PNG" height="200px" />
                            </div>
                            <div class="bands__num">
                                <p>8 параллель</p>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-4 col-md-6 col-xs-12 bands__list-item">
                        <a href="bands_9_massive.html">
                            <div class="bands__photo">
                                <img src="src/assets/bands/dev.PNG" height="200px" />
                            </div>
                            <div class="bands__num">
                                <p>9 параллель</p>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-4 col-md-6 col-xs-12 bands__list-item">
                        <a href="bands_10_massive.html">
                            <div class="bands__photo">
                                <img src="src/assets/bands/des.PNG" height="200px" />
                            </div>
                            <div class="bands__num">
                                <p>10 параллель</p>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-4 col-md-6 col-xs-12 bands__list-item">
                        <a href="bands_11_massive.html">
                            <div class="bands__photo">
                                <img src="src/assets/bands/odi.PNG" height="200px" />
                            </div>
                            <div class="bands__num">
                                <p>11 параллель</p>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-4 col-md-6 col-xs-12 bands__list-item">
                        <a href="bands_0_massive.html">
                            <div class="bands__photo">
                                <img src="src/assets/bands/DM.jpg" height="200px" />
                            </div>
                            <div class="bands__num">
                                <p>Руководство</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
</template>

<style lang="sass">
@mixin Img()
    display: block
    width: 100%
    object-fit: contain

.bands
    &__list
        display: flex
        justify-content: space-around
        align-content: flex-start
        align-items: flex-start
        flex-wrap: wrap

    &__list-item
        border: 8px groove rgba(243, 242, 242, 0.456)
        border-radius: 4px
        background-color: white
        margin-bottom: 1.5rem
        width: auto
        &:hover
            border: 8px ridge rgba(243, 242, 242, 0.456)

    & a
        text-decoration: none
        font-family: 'Montserrat Alternates', sans-serif
        text-align: center
        color: black
        font-size: 2rem

    &__photo
        margin: .3rem
        & img
            @include Img
            object-fit: cover
            border-radius: 5px
            height: 238px
</style>