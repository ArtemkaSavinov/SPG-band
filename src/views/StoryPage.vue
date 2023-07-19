<script>
import axios from 'axios'
export default {
    data() {
        return {
            story: [],
            isLoaded: null
        }
    },

    methods: {
        async loadStory() {
            let response = await axios.get('/story', {
                params: {
                    history: this.$route.params.history
                }
            })
            this.story = response.data
            this.isLoaded = this.story.length != 0
        },

        goHistory() {
            this.$router.push({
                name: 'history',
            })
        }
    },

    mounted() {
        this.loadStory()
    }
}
</script>

<template>
    <div class="main-history" v-for="(item, index) in story" v-if="isLoaded">
        <p class="text_article">{{ item.text }}</p>
        <a class="toBack" @click="goHistory"><button class="toBack__btn">К статьям</button></a>
    </div>
    <p v-else class="title">Данных нет</p>
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

.text_article
    margin-left: 10rem
    margin-right: 10rem 
    font-size: 1.5rem
</style>