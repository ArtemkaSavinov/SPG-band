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
        }
    },

    mounted() {
        this.loadLibrary()
    }
}
</script>

<template>
    <div class="main-lib">
        <h1 class="title">В данном разделе вы сможете найти записи наших выступлений</h1>
        <div class="main-lib__container container">
            <div class="row">
                <a class="col-lg-6 col-md-6 col-xs-12 main-lib__card" v-for="(item, index) in library">
                    <div class="main-lib__concert">
                        <h2 class="main-lib__name-concert">{{item.name}}"</h2>
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
        box-shadow: 4px 6px 9px 0px rgb(188 188 188)
        box-sizing: inherit
        width: 100%
        display: inline-block

        &:hover
            box-shadow: 11px 12px 16px 0px rgb(188 188 188)

    &__name-concert, &__concert-date
        text-align: center
        font-size: 2.5rem
        color: black
</style>