<script>
import axios from 'axios';
export default {
    data() {
        return {
            band: [],
            isLoaded: true,
        }
    },

    methods: {
        async loadBand() {
            let response = await axios.get('/band', {
                params: {
                    classNumber: this.$route.params.classNumber
                }
            });
            this.band = response.data;
            
            this.isLoaded = this.band.length != 0
        },

        goBands() {
            this.$router.push({
                name: 'bands',
            })
        }
    },

    mounted() {
        this.loadBand()
    }
}
</script>

<template>
    <div class="band">
        <div class="band__container">
            <div class="row">
                <div id="card" class="col-lg-3 col-md-4 col-xs-12 band__card" v-for="(item, index) in band" v-if="isLoaded">
                    <div class="band__photo">
                        <img :src="'/src/assets/artists/' + item.image">
                    </div>
                    <div class="artist">
                        <p class="band__artist-name">{{ item.name }}</p>
                        <p class="band__artist-instrument">{{ item.instrument }}</p>
                    </div>
                    
                </div>
                <p v-else>Тут ничего нет, и не я в этом виноват</p>
            </div>

        </div>
        <a class="toBack" @click="goBands"><button class="toBack__btn">К составам</button></a>
    </div>
</template>

<style lang="sass">
@mixin Img()
    display: block
    width: 100%
    object-fit: contain

.band
    margin-top: 2rem
    display: flex
    align-items: center
    flex-direction: column

    &__container
        width: 100%

    &__card
        padding: 1rem
        border-radius: .5rem
        padding: .5rem
        overflow: hidden
        height: 35.7rem

    &__photo
        margin: .3rem

        & img
            @include Img
            object-fit: cover
            border-radius: .5rem
            height: 23.8rem

    &__artist-name
        font-size: 2rem
        text-align: center

    &__artist-instrument
        text-align: center
        font-size: 1.5rem

.toBack
    border-radius: .6rem
    padding: 1.5rem
    border: 0
    margin-right: 2rem
    margin-bottom: 1rem
    background-color: white
    position: fixed
    z-index: 1
    bottom: 0%
    right: 0%

    &:hover
        border-radius: 1rem

    &__btn
        font-family: 'Montserrat Alternates', sans-serif
        cursor: pointer
        font-size: 2rem
        border: none
</style>