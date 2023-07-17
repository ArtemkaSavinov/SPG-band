<script>
import AppHeader from './components/AppHeader.vue'

import { RouterView } from 'vue-router';

export default {
	components: {
		AppHeader,
	}
}
</script>

<template>
	<app-header></app-header>
	<router-view></router-view>
</template>
 
<style lang="sass">
$white-color: #F4F4F4
$white-color-other: #FAFAFA
$header-shadow: 0px 0px 16px rgba(38, 38, 38, 0.16)
$menu-shadow: 0px 0px 5px 5px rgba(38, 38, 38, 0.16)
$header-button-active-shadow: inset 0px 0px 7px 0px rgb(114 114 114 / 50%)

@mixin Img()
    display: block
    width: 100%
    object-fit: contain

html
    font-size: 10px
    font-family: 'Montserrat', sans-serif
    box-sizing: content-box
    background-color: $white-color
    zoom: 100%
    margin: 0

.title-second
    text-align: center
    font-size: 3.5rem
    letter-spacing: 1rem
</style>
