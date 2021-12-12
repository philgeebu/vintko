<template>
    <div class="about-section">
        <AboutBlurb />
    </div>
    <div class="watch-list-section">
        <WatchList />
    </div>
    <ToTopButton />
</template>

<script>
    import AboutBlurb from '@/components/AboutBlurb.vue'
    import WatchList from '@/components/WatchList.vue'
    import ToTopButton from '@/components/ToTopButton.vue'

    export default {
        name: 'About',
        components: {
            WatchList,
            AboutBlurb,
            ToTopButton
        }
    }
</script>

<style scoped>
    .about-section {
        padding: 0 20px;
    }

    @media (min-width: 40rem) {
        .about-section {
            max-width: 75ch;
            margin: 0 auto;
        }

        .watch-list-section {
            display: flex;
            flex-direction: column;
        }
    }
</style>