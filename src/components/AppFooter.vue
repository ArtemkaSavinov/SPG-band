<script>

</script>

<template>
    <footer class="footer">
        <div class="footer__first-info">
            <h6 class="title-six">Сайт создавали:</h6>
            <p>- ArtemkaSavinov</p>
            <p>- bobr2306</p>
        </div>
        <img class="footer__logo" src="src/assets/DM/DM-2.jpg"/>
        <div class="footer__first-info">
            <h6 class="title-six">Проекту помогали:</h6>
            <p>- негр1</p>
            <p>- негр2</p>            
            <p>- негр3</p>
            <p>- негр4</p>
        </div>
    </footer>
</template>

<style lang="sass">
    .footer
        border-top: 2px solid black
        padding: 2rem 0
        background-color: #202020
        display: flex
        justify-content: center
        gap: 2rem
        
        &__first-info
            border-radius: 1rem
            border: 1px solid #101010
            color: white
            padding: 1rem 
            background-color: #303030
        &__logo
            // box-shadow: 0px 0px 12px 4px rgb(222, 222, 222)
            width: 30%
            border-radius: 1rem
            border: 1px solid black
    
    @media (max-width: 425px) 
        .footer
            flex-direction: column
</style>