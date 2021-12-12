<template>
    <figure>
        <video width="500" controls muted>
            <source :src="require(`@/assets/video/${video.fileName}`)" type="video/mp4">
            Your browser does not support HTML video.
        </video>
        <figcaption>{{ video.description }}</figcaption>
    </figure>
</template>

<script>
    export default {
        name: 'VideoFrame',
        props: ['video', ]
    }
</script>

<style scoped>
    video::-webkit-media-controls-volume-slider {
        display: none;
    }

    video::-webkit-media-controls-mute-button {
        display: none;
    }
    figure {
        border: 1px solid lightgrey;
        border-radius: 5px;
        padding: 1em 1em 3em;
        margin: 0;
        max-width: 30em;
        box-shadow: 3px 3px 3px lightgrey;
        background-color: white;
    }

    video {
        border-radius: 5px;
        width: 100%;
    }

    figcaption {
        text-align: right;
    }
</style>