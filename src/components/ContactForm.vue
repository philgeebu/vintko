<template>
    <form name="ContactForm" method="POST" :submit.prevent="handleSubmit" action="/" data-netlify="true"
        data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="ContactForm" />
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
        <textarea id="message" name="message" rows="6"></textarea>
        <br>
        <button type="submit">Submit</button>
    </form>
</template>

<script>
    export default {
        name: 'ContactForm',
        data() {
            return {
                formData: {},
            }
        },
        methods: {
            encode(data) {
                return Object.keys(data)
                    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
                    .join('&')
            },
            handleSubmit(e) {
                fetch('/', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        },
                        body: this.encode({
                            'form-name': e.target.getAttribute('name'),
                            ...this.formData,
                        }),
                    })
                    .then(() => this.$router.push('/contact'))
                    .catch(error => alert(error))
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

    .button {
        background-color: green;
        padding: .6em 1em;
        font-size: .9rem;
        border: 0;
        border-radius: 7px;
        cursor: pointer;
    }
</style>