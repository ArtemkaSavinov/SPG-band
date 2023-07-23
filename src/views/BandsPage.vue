<script>
import axios from 'axios';

export default {
    data() {
        return {
            bands: [],
            way: 'src/assets/bands/'
        }
    },

    methods: {
        async loadBands() {
            let response = await axios.get('/bands');
            this.bands = response.data
        },

        goBand(classNumber) {
            this.$router.push({
                name: 'band',
                params: {
                    classNumber: classNumber
                }
            })
        }
    },

    mounted() {
        this.loadBands()
    }
}
</script>

<template>
    <div class="bands">
        <div class="paralax-bands"></div>
        <h3 class="title-third">В нашу дружную команду входят следующие коллективы:</h3>
        <!-- ↑ Тут был class="text-white" я его убрал-->
        <div class="row bands__list">
            <div class="col-lg-4 col-md-6 col-xs-12 bands__list-item" v-for="(item, index) in bands"
                @click="goBand(item.classNumber)">
                <a class="bands__card-band">
                    <div class="bands__photo">
                        <img :src="'src/assets/bands/' + item.image" height="200px" />
                    </div>
                    <div class="bands__num">
                        {{ item.name }}
                    </div>
                </a>
            </div>
        </div>
        <div class="paralax-bands"></div>
    </div>
</template>

<style lang="sass">
@mixin Img()
    display: block
    width: 100%
    object-fit: contain
.paralax-bands
    background-image: url(/src/assets/icons/gitar.jpg)
    background-position: center
    background-attachment: fixed
    background-size: cover
    background-repeat: no-repeat
    height: 10vh


    
.bands
    padding-top: 2rem
    &__list
        display: flex
        justify-content: space-around
        align-content: flex-start
        align-items: flex-start
        flex-wrap: wrap
        position: relative
        height: 100vh
        width: 100%
        // &::before
        //     content: ""
        //     background-image: url(/src/assets/icons/transparent.png)
        //     background-size: cover
        //     position: absolute
        //     top: 0px
        //     right: 0px
        //     bottom: 0px
        //     left: 0px
        //     opacity: 0.1
    &__num
        mix-blend-mode: difference
    &__list-item
        padding: 1rem   
        display: flex
    &__card-band
        border-radius: 1rem
        opacity: .9
        width: 100%
        border: .2rem solid #A5A5A5
        transition: .5s
        &:hover 
            transform: scale(1.03)    
    &  a
        text-decoration: none
        font-family: 'Montserrat', sans-serif
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