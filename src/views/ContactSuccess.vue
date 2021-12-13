<template>
    <p>
        Thanks for sending a message!
        <br>
    </p>
    <hr>
    <p>
        <router-link to="/">
            <small>
                <em>Click here to return to the home page.</em>
            </small>
        </router-link>
    </p>
</template>

<script>
    export default {
        name: 'ContactSuccess',
    }
</script>

<style scoped>
    p {
        padding: 10px;
        text-align: center;
        font-size: 2rem;
    }

    a {
        font-weight: 900;
        text-decoration: underline;
    }
</style>