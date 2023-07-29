<script>
export default {
    props: {
        isVisible: {
            type: Boolean,
            default: false
        },
    },
    data() {
        return {
            login: '',
            password: '',
        }
    },

    methods: {
        hideModal() {
            this.$emit('update:isVisible', false)
            this.$emit('scrollock')
        }
    }
}
</script>

<template>
    <div class="modalWindow" v-if="isVisible" @click="hideModal">
        <div @click.stop>
            <form >
                <h2 class="modalWindow__title">Докажи, что админ</h2>
                <div class="modalWindow__input-group">
                    <input class="modalWindow__input" type="text" placeholder="Логин" v-model="login">
                    <input class="modalWindow__input" type="text" placeholder="Пароль" v-model="password">
                </div>
                <div class="modalWindow__button-group">
                    <button class="modalWindow__button">Доказать</button>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped lang="sass">
.modalWindow 
    position: fixed
    display: flex
    justify-content: center
    align-items: center
    top: 0
    right: 0
    bottom: 0
    left: 0
    background: rgba(0,0,0,0.6)
    color: white
    z-index: 30
    &__title
        margin-top: 0
    &__input-group
        display: flex
        flex-direction: column
        gap: 2rem
        margin-bottom: 2rem
    & > div 
        width: 500px
        position: relative
        margin: 10% auto
        background: black
        border: .5rem solid white
        border-radius: .5rem
        & > form
            padding: 2rem
            margin: auto
</style>