<script>
export default {
    data() {
        return {
            authed: null,
        }
    },

    methods: {
        auth() {
            if (this.$route.params.auth == 'success') {
                this.authed = true
            } else {
                this.authed = false
            }
        }
    },

    mounted() {
        this.auth()
    }
}
</script>

<template>
<p v-if="this.authed">Вы авторизованы</p>
<p v-else>Вы не авторизованы</p>
</template>

<style>

</style>