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
    @import './assets/css/variables.css';

    body {
        font-size: 16px;
        font-family: sans-serif;
        margin: 0;
        padding: 0;
    }
</style>