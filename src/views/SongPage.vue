<script>
import axios from 'axios';
export default {
    data() {
        return {
            song:[],
            isLoaded: null
        }
    }, 

    methods: {
        goLibrary() {
            this.$router.push({
                name: 'library',
            })
        },

        async loadSong () {
            let response = await axios.get('/song', {
                params: {
                    name: this.$route.params.name
                }
            });
            this.song = response.data
            this.isLoaded = this.song.length != 0
        }
    },

    mounted() {
        this.loadSong()
    }
}
</script>

<template>
    <div class="videos">
        <div class="video" v-for="(item, index) in song" v-if="this.isLoaded">
            <iframe :src="item.link" width="640"
                height="360" allow="autoplay; encrypted-media; fullscreen; picture-in-picture;" frameborder="0"
                allowfullscreen></iframe>
            <p>{{ item.description }}</p>
        </div>
        <p v-else>Записи нет</p>
    </div>
    <a class="toBack" @click="goLibrary">К репертуару</a>
</template>

<style lang="sass">
.videos
    padding-top: 1rem
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center

.video
    border-bottom: .2rem ridge #e8e8e8
    margin-top: 2rem
    display: flex
    align-items: center
    justify-content: center
    flex-direction: column
    font-size: 1.5rem

iframe
    max-width: 100%
    max-height: 100%
    margin-top: .5rem
    margin-bottom: .5rem
    border-radius: .3rem
</style>