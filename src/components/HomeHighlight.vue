<template>
    <router-link :to="{ name: highlight.linkname }">
        <span :style="{'background-image': 'url(' + require(`@/assets/img/highlights/${highlight.fileName}`) + ')'}"
            class="highlight" role="img" :aria-label="highlight.picAlt">
            <p class="title">{{ highlight.title }}</p>
            <p> {{ highlight.subtext }}</p>
        </span>
    </router-link>
</template>

<script>
    export default {
        name: 'HomeHighlight',
        props: ['highlight', ],
    }
</script>

<style scoped>
    .highlight {
        display: block;
        background-color: #111;
        background-blend-mode: multiply;
        background-position: center;
        padding: 1em .1em;
        color: white;
        text-shadow: 0 0 10px black;
    }

    .title {
        font-size: 3rem;
        font-family: Lobster, sans-serif;
    }

    @media (min-width: 42rem) {

        .highlight {
            background-position: bottom left;
            transition: 1.5s;
        }

        .highlight:hover {
            background-color: #444;
            background-position: center;
        }
    }
</style>