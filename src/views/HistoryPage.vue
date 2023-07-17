<script>
import axios from 'axios';
export default {
    data() {
        return {
            histories: []
        }
    },

    methods: {
        async loadHistories() {
            let response = await axios.get('/history');
            this.histories = response.data
        }
    }, 

    mounted() {
        this.loadHistories() 
    }
}
</script>

<template>
    <div class="main-history">
        <div class="container">
            <div class="row">
                <a class="main-history__item" v-for="(item, index) in histories"> 
                    <div class="main-history__name">
                        <h2>{{ item.history}}</h2>
                        <p>{{item.author}}</p>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<style lang="sass">
.main-history
    margin-top: 20px
    display: flex
    align-items: center
    flex-direction: column

    &__item
        width: 100%
        margin-left: 8px
        margin-right: 8px
        margin-bottom: 15px
        box-shadow: 4px 6px 9px 0px rgb(188 188 188)
        margin-top: 20px

        &:hover
            box-shadow: 11px 12px 16px 0px rgb(188 188 188)

    &__name
        display: inline-block
        color: black

        & h2
            font-size: 2.5rem !important
            margin-left: .4rem
            margin-right: .4rem

        & p
            font-size: 1.5rem
            text-align: left
            margin-left: .4rem
            margin-right: .4rem
</style>