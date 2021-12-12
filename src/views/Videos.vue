<template>
    <section>
        <VideoFrame v-for="video in videoList" :key="video.id" :video="video" />
    </section>
    <ToTopButton />
</template>

<script>
    import videoJson from '@/assets/json/video_list.json'
    import VideoFrame from '@/components/VideoFrame.vue'
    import ToTopButton from '@/components/ToTopButton.vue'

    export default {
        name: 'Videos',
        data() {
            return {
                videoList: videoJson,
            }
        },
        components: {
            VideoFrame,
            ToTopButton
        },
    }
</script>

<style scoped>
    section {
        margin: 1.5em .5em;
        padding: 0;
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        gap: .5em;
    }

    @media (min-width: 40rem) {
        section {
            gap: 1.5em;
        }
    }
</style>