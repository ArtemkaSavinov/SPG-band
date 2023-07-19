<script>
import axios from 'axios';
export default {
    data() {
        return {
            library: []
        }
    },
     
    methods: {
        async loadLibrary () {
            let response = await axios.get('/library')
            this.library = response.data
        },

        goSong(name) {
            this.$router.push({
                name: 'song',
                params: {
                    name: name
                }
            })
        }
    },

    mounted() {
        this.loadLibrary()
    }
}
</script>

<template>
    <div class="main-lib">
        <h3 class="title-third">В данном разделе вы сможете найти записи наших выступлений</h3>
        <div class="main-lib__container container">
            <div class="row">
                <a class="col-lg-6 col-md-6 col-xs-12 main-lib__card" v-for="(item, index) in library" @click="goSong(item.name)">
                    <div class="main-lib__concert">
                        <h2 class="main-lib__name-concert">{{item.name}}</h2>
                        <p class="main-lib__concert-date">{{item.date}}</p>
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
        box-shadow: 0px 0px 9px 0px rgb(188 188 188)
        border-radius: 1rem
        box-sizing: inherit
        width: 100%
        display: inline-block
        transition: .5s
        &:hover
            transform: scale(1.03)
            z-index: 10
    &__name-concert
        font-weight: 600
        font-size: 2.5rem
        text-align: center
        letter-spacing: .3rem
    &__concert-date
        font-weight: 400
        text-align: center
        letter-spacing: .01rem   
        font-size: 1.5rem 
</style>