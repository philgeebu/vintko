<template>
    <form name="contactForm" method="POST" @submit.prevent="handleSubmit" netlify action="/contactsuccess"
        data-netlify="true" data-netlify-honeypot="bot-field">

        <!-- Hidden field required for Netlify -->
        <input type="hidden" name="form-name" value="contactForm" />

        <!-- Name -->
        <label for="name">Name: </label><span class="required" v-if="!nameDenied">(required)</span>
        <span class="errorMessage" v-if="nameDenied">{{ nameErrorMessage }}</span><br>
        <input type="text" id="name" name="name" required v-model="name" :class="{ denied: nameDenied }"
            @blur="validateName" @keyup="validateName">
        <br>

        <!-- Email -->
        <label for="email">Email: </label><span class="required">(required)</span><br>
        <input type="email" id="email" name="email" required v-model="email">
        <br>

        <!-- Topic -->
        <label for="topic">Topic: </label><span class="required">(required)</span><br>
        <select name="topic" id="topic" required v-model="topic">
            <option value="">Select...</option>
            <option value="general">General</option>
            <option value="buy">Want to buy</option>
            <option value="sell">Want to sell</option>
            <option value="help">Help finding something</option>
        </select>
        <br>

        <!-- Message -->
        <label for="message">Message: </label><span class="required" v-if="!messageDenied">(required)</span>
        <span class="errorMessage" v-if="messageDenied">{{ messageErrorMessage }}</span><br>
        <textarea id="message" name="message" rows="6" required v-model="message" :class="{ denied: messageDenied }"
            @blur="validateMessage" @keyup="validateMessage"></textarea>
        <br>

        <!-- Submit -->
        <button type="submit" :disabled=" nameDenied || messageDenied ">Submit</button>

    </form>
</template>

<script>
    export default {
        name: 'ContactForm',
        data() {
            return {
                formData: {},
                name: '',
                email: '',
                topic: '',
                message: '',
                nameDenied: false,
                messageDenied: false,
                nameErrorMessage: '',
                messageErrorMessage: '',
            }
        },
        methods: {
            // Validates the name field and toggles Submit disable
            validateName(e) {
                const name = e.target.value
                if (name.length < 2) {
                    this.nameErrorMessage = "Name must be at least 2 characters."
                    return this.nameDenied = true
                }
                // if (!name.match(/^[a-z0-9]+$/i)) {
                if (!name.match(/^[a-zA-Z0-9 ]*$/gm)) {
                    this.nameErrorMessage = "Name must be alphanumeric only."
                    return this.nameDenied = true
                }
                return this.nameDenied = false
            },
            // Validates the message field and toggles Submit disable
            validateMessage(e) {
                const message = e.target.value
                if (message.length < 5) {
                    this.messageErrorMessage = "Please provide a longer message."
                    return this.messageDenied = true
                }
                return this.messageDenied = false
            },
            // encodes data being passed to Netlify
            encode(data) {
                return Object.keys(data)
                    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
                    .join('&')
            },
            // Handles the form submit
            async handleSubmit() {
                await fetch('/', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        },
                        body: this.encode({
                            "form-name": 'contactForm',
                            "name": this.name,
                            "email": this.email,
                            "topic": this.topic.toString(),
                            "message": this.message,
                        }),
                    })
                    .catch(error => alert(error))
            }
        }
    }
</script>

<style scoped>
    form {
        width: 90%;
        max-width: 40ch;
    }

    textarea {
        min-width: 100%;
        max-width: 100%;
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
        border-radius: 4px;
    }

    button {
        background-color: lightgreen;
        padding: .6em 1em;
        font-size: .9rem;
        border: 2px solid #333;
        border-top: 0;
        border-left: 0;
        border-radius: 7px;
        cursor: pointer;
    }

    .required {
        font-size: .8rem;
        font-style: italic;
    }

    .denied {
        border: 2px solid darkred;
        box-shadow: 0 0 3px darkred;
    }

    .errorMessage {
        margin: 0;
        color: darkred;
        font-size: .8rem;
    }
</style>