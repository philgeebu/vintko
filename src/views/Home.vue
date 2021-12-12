<template>
    <HomeHero />
    <div class="highlights">
        <div class="highlight" v-for="highlight in highlightList" :key="highlight.id">
            <HomeHighlight :highlight="highlight" />
        </div>
    </div>
</template>

<script>
    import HomeHero from '@/components/HomeHero.vue'
    import HomeHighlight from '@/components/HomeHighlight.vue'
    import HighlightsJson from '@/assets/json/homepage_highlights.json'

    export default {
        name: 'Home',
        data: () => {
            return {
                highlightList: HighlightsJson
            }
        },
        components: {
            HomeHero,
            HomeHighlight
        }
    }
</script>

<style scoped>
    .highlights {
        text-align: center;
        display: flex;
        flex-direction: column;
    }

    .highlight {
        flex-grow: 1;
        border: 2px solid grey;
    }

    @media (min-width: 40rem) {
        .highlights {
            flex-direction: row;
        }
    }
</style>