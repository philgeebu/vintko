<template>
    <form>
        <label for="fname">First name:</label><br>
        <input type="text" id="fname" name="fname"><br>
        <label for="lname">Last name:</label><br>
        <input type="text" id="lname" name="lname"><br><br>
        <button>Submit</button>
    </form>
</template>

<script>
    export default {
        name: 'ContactForm',
    }
</script>

<style scoped>
</style>