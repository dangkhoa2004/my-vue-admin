<template>
    <div class="form-group">
        <label :for="id">{{ label }}:</label>
        <input :type="type" :id="id" :value="modelValue" @input="updateValue" required :placeholder="placeholder" />
    </div>
</template>

<script>
export default {
    name: 'InputField',
    props: {
        label: String,
        type: {
            type: String,
            default: 'text'
        },
        id: String,
        modelValue: String,
        placeholder: String
    },
    emits: ['update:modelValue'],
    methods: {
        updateValue(event) {
            this.$emit('update:modelValue', event.target.value);
        }
    }
};
</script>
<style src="../assets/styles.css"></style>