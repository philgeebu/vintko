<template>
    <h2>Current Collection</h2>
    <table>
        <thead>
            <tr>
                <th>Year</th>
                <th>Line</th>
                <th>Model</th>
                <th>Dial Color</th>
                <th>Case</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(watch, i) in watchList" :key="i">
                <td>{{ watch.Year }}</td>
                <td>{{ watch.Line }}</td>
                <td>{{ watch.Model }}</td>
                <td><span :style="{'color': watch.DialColor}" class="dial-color-text">{{ watch.DialColor }}</span></td>
                <td>{{ watch.Case }}</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td colspan="7">SS = Stainless Steel; SGP = Solid Gold Plating; HSS = Hardened SS; HGP = Solid GP; TT =
                    Two-tone</td>
            </tr>
        </tfoot>
    </table>
</template>

<script>
    import watchJson from '@/assets/json/watch_list.json'

    export default {
        name: 'WatchList',
        data() {
            return {
                watchList: watchJson
            }
        }
    }
</script>

<style scoped>
    .dial-color-text {
        font-size: 1.3rem;
        -webkit-text-stroke: 0.7px black;
    }

    h2 {
        margin: 0 .4em;
    }

    table {
        border-collapse: collapse;
        background-color: white;
    }

    th {
        font-family: Lobster, sans-serif;
        font-size: 1.1rem;
        text-align: left;
        border: 2px solid grey;
        background-color: lightgrey;
    }

    td {
        border: 2px solid grey;
    }

    tr:nth-child(even) {
        background-color: #f2f2f2;
    }

    tfoot {
        text-align: center;
        font-size: .8rem;
        font-style: italic;
    }

    @media (min-width: 40rem) {

        h2 {
            margin: 0;
        }

        td,
        th {
            padding: .3em;
        }
    }
</style>