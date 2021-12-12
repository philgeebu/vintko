<template>
    <button @click="backToTop" v-if="revealed">Back to top</button>
</template>

<script>
    export default {
        name: 'ToTopButton',
        data() {
            return {
                revealed: false
            }
        },
        methods: {
            backToTop: () => {
                // Safari
                document.body.scrollTo({
                    top: 0,
                });
                // Chrome, Firefox, IE, and Opera
                document.documentElement.scrollTo({
                    top: 0,
                });
            },
            revealBackToTopbutton() {
                if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                    this.revealed = true
                } else {
                    this.revealed = false
                }
            }
        },
        created() {
            window.addEventListener('scroll', this.revealBackToTopbutton);
        },
        unmounted() {
            window.removeEventListener('scroll', this.revealBackToTopbutton);
        },
    }
</script>

<style scoped>
    button {
        /* display: none; */
        font-size: .8rem;
        font-weight: 600;
        border: none;
        text-shadow: 0 0 5px black;
        outline: none;
        position: fixed;
        bottom: 20px;
        padding: 1em;
        right: 20px;
        z-index: 999;
        background-color: rgb(54, 54, 54, .7);
        color: white;
        transition: .5s;
        border-radius: 4px;
        cursor: pointer;
    }

    button:hover {
        background-color: rgb(54, 54, 54);

    }
</style>