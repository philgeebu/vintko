<template>
    <section>
        <PictureFrame v-for="picture in pictureList" :key="picture.id" :picture="picture" class="picture-frame" />
    </section>
    <ToTopButton />
</template>

<script>
    import galleryJson from '@/assets/json/gallery_list.json'
    import PictureFrame from '@/components/PictureFrame.vue'
    import ToTopButton from '@/components/ToTopButton.vue'

    export default {
        name: 'Pictures',
        data() {
            return {
                pictureList: galleryJson
            }
        },
        components: {
            PictureFrame,
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