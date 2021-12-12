<template>
    <section>
        <ContactForm />
    </section>
</template>

<script>
    import ContactForm from '@/components/ContactForm.vue'

    export default {
        name: 'Contact',
        components: {
            ContactForm
        }
    }
</script>

<style scoped>
    section {
        padding: 0;
        margin: 0;
        display: flex;
        flex-flow: column wrap;
        align-items: center;
    }
</style>