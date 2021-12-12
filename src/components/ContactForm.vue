<template>
    <form name="contact" method="POST" netlify>

        <label for="name">Name:</label><br>
        <input type="text" id="name" name="name">
        <br>
        <label for="email">Email:</label><br>
        <input type="email" id="email" name="email">
        <br>
        <label for="type">Topic:</label><br>
        <select name="type" id="type">
            <option value="">Select...</option>
            <option value="general">General</option>
            <option value="buy">Want to buy</option>
            <option value="sell">Want to sell</option>
            <option value="help">Help finding something</option>
        </select>
        <br>
        <label for="message">Message:</label><br>
        <textarea type="message" id="message" name="message" rows="6"></textarea>
        <br>
        <button @click="submitForm" type="submit">Submit</button>
    </form>
</template>

<script>
    export default {
        name: 'ContactForm',
        methods: {
            submitForm() {
                alert('hello')
            }

        }
    }
</script>

<style scoped>
    form {
        width: 100%;
        max-width: 40ch;
    }

    input,
    select,
    textarea {
        box-sizing: border-box;
        width: 100%;
        padding: 8px 12px;
        margin: 0;
        display: inline-block;
        border: 2px solid #333;
        border-top: 0;
        border-left: 0;
        /* border-right: 0; */
        border-radius: 4px;
    }

    button {
        background-color: green;
        padding: .6em 1em;
        font-size: .9rem;
        border: 0;
        border-radius: 7px;
        cursor: pointer;
    }
</style>