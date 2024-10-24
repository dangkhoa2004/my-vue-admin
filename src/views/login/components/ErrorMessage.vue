<template>
    <p v-if="message" class="error">{{ message }}</p>
</template>

<script>
export default {
    name: 'ErrorMessage',
    props: {
        message: String
    }
};
</script>
<style src="../assets/styles.css"></style>