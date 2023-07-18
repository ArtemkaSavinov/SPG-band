<script>
import axios from 'axios';

    export default {
        data() {
            return {
                bands: []
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
            <h2 class="title-second">В нашу дружную команду входят следующие коллективы:</h2>
            <div class="container">
                <div class="row bands__list">
                    <div class="col-lg-4 col-md-6 col-xs-12 bands__list-item" v-for="(item, index) in bands" @click="goBand(item.classNumber)">
                        <a class="bands__card-band">
                            <div class="bands__photo">
                                <img :src="'src/assets/bands/' +  item.image " height="200px" />
                            </div>
                            <div class="bands__num">
                                <p>{{item.name}}</p>
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
        padding: 1rem    
    &__card-band
        background-color: white
        border-radius: 1rem
        width: 100%
        border: .1rem solid gray
        &:hover 
            transform: scale(3)    
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