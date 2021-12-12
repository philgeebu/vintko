<template>
    <a :href="require(`@/assets/img/gallery/${picture.fileName}`)" target="_blank">
        <figure>
            <img :src="require(`@/assets/img/gallery/${picture.fileName}`)"
                :alt="picture.year + ' ' + picture.name + ' ' + picture.alt" />
            <figcaption>{{ picture.year }} {{ picture.name }}</figcaption>
            <footer>{{ picture.code }}</footer>
        </figure>
    </a>
</template>

<script>
    export default {
        name: 'PictureFrame',
        props: ['picture', ]
    }
</script>

<style scoped>
    figure {
        border: 1px solid lightgrey;
        border-radius: 5px;
        padding: 1em 1em 3em;
        margin: 0;
        max-width: 30em;
        box-shadow: 3px 3px 3px lightgrey;
        transition: .5s;
        cursor: pointer;
        background-color: white;
    }

    figure:hover {
        max-width: 35em;
        box-shadow: 7px 7px 10px lightgrey;
    }

    img {
        border-radius: 5px;
        width: 100%;
    }

    figcaption {
        font-family: Lobster, sans-serif;
        text-align: right;
    }

    footer {
        color: grey;
        font-size: .8rem;
        font-style: italic;
        text-align: right;
    }
</style>