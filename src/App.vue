<template>
    <NavigationBar />
    <router-view />
    <Footer />
</template>

<script>
    // @ is an alias to /src
    import NavigationBar from '@/components/NavigationBar.vue'
    import Footer from '@/components/Footer.vue'

    export default {
        components: {
            NavigationBar,
            Footer
        }
    }
</script>

<style>
    html {
        font-size: 20px;
        font-family: 'News Cycle', serif;
        background-color: #e9e9e9;
    }

    body {
        /* keeps content from shifting*/
        overflow-y: scroll;
        margin: 0;
        padding: 0;
    }

    a,
    a:visited,
    a:hover,
    a:active {
        color: inherit;
        text-decoration: inherit;
    }
</style>