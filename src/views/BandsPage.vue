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
            <h3 class="title-third">В нашу дружную команду входят следующие коллективы:</h3>
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
    margin-top: 2rem
    &__list
        display: flex
        justify-content: space-around
        align-content: flex-start
        align-items: flex-start
        flex-wrap: wrap
        
    &__list-item
        padding: 1rem   
        display: flex
    &__card-band
        background-color: white
        border-radius: 1rem
        width: 100%
        padding: .5rem
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