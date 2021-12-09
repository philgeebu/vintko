<template>
    <nav>
        <router-link to="/"><img alt="Vintko logo" src="../assets/img/vintko_logo.png">
        </router-link>
        <ul>
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/pictures">Pictures</router-link>
            </li>
            <li>
                <router-link to="/videos">Videos</router-link>
            </li>
            <li>
                <router-link to="/about">About</router-link>
            </li>
            <li>
                <router-link to="/contact">Contact</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: 'NavigationBar',
    }
</script>

<style scoped>
    nav {
        display: flex;
        flex-flow: column;
        align-items: center;
        background: grey;
    }

    li {
        text-align: center;
        list-style-type: none;
    }

    a {
        text-decoration: none;
    }

    a.router-link-exact-active {
        color: red;
    }

    img {
        height: 3rem;
    }

    @media screen and (min-width: 600px) {
        nav {
            flex-flow: row;
            justify-content: space-between;
        }

        li {
            display: inline;
        }
    }
</style>