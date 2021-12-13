<template>
    <section>
        <img src="@/assets/img/vintko_logo_white.png" alt="vintko logo">
        <p>A collection of <strong id="vintage">Vintage</strong> <strong>Seiko</strong>...</p>
    </section>
</template>

<script>
    export default {
        name: 'HomeHero',
    }
</script>

<style scoped>
    #vintage {
        font-family: Lobster, sans-serif;
    }

    section {
        background-color: #222;
        background-image: url(../assets/img/grassy_king.jpg);
        background-position: center;
        background-blend-mode: multiply;
        background-size: cover;
        height: 80vh;
        color: grey;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    @media (min-width: 40rem) {

        section {
            background-position: top right;
            transition: 20s;
        }

        section:hover {
            background-position: bottom left;
        }
    }

    img {
        width: 75%;
    }
</style>