<template>
    <router-link :to="{ name: highlight.linkname }">
        <div :style="{'background-image': 'url(' + require(`@/assets/img/highlights/${highlight.fileName}`) + ')'}" class="highlight">
            <h2>{{ highlight.title }}</h2>
            <p> {{ highlight.subtext }}</p>
        </div>
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
        background-color: #111;
        background-blend-mode: multiply;
        padding: 1em .1em;
        color: white;
        text-shadow: 0 0 10px black;
        transition: 1.5s;
    }
    .highlight:hover {
        background-color: #444;
        background-position: center;
    }
</style>