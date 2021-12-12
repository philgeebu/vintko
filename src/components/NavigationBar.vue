<template>
    <header>
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
    </header>
</template>

<script>
    export default {
        name: 'NavigationBar'
    }
</script>

<style scoped>
    header {
        box-shadow: 0px 0px 10px lightgrey;
    }

    nav {
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        flex-flow: row;
        align-items: center;
        padding: 0 25px;
        font-weight: 700;
    }

    li {
        text-align: right;
        list-style-type: none;
    }

    a {
        text-decoration: none;
    }

    a.router-link-exact-active {
        color: darkred;
        text-shadow: 1px 1px 2px pink;
    }

    img {
        height: 2.5rem;
    }

    @media (min-width: 40rem) {
        nav {
            max-width: 960px;
            flex-flow: row;
            justify-content: space-between;
        }

        ul {
            display: flex;
            gap: 15px;
        }

        li {
            display: inline;
        }
    }
</style>