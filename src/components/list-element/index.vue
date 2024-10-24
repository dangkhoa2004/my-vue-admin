<template>
    <div class="color-picker-container">
        <label for="color-input" class="color-label">Thay đổi màu chủ đạo:</label>
        <input id="color-input" type="color" v-model="color" @input="changeColor" class="color-input">
    </div>
</template>

<script>
export default {
    data() {
        return {
            color: ''
        };
    },
    mounted() {
        const savedColor = localStorage.getItem('firstColor');
        if (savedColor) {
            this.color = savedColor;
        } else {
            this.color = getComputedStyle(document.documentElement).getPropertyValue('--first-color').trim();
        }
    },
    methods: {
        changeColor(event) {
            const selectedColor = event.target.value;
            this.color = selectedColor;
            document.documentElement.style.setProperty('--first-color', selectedColor);
            localStorage.setItem('firstColor', selectedColor);
        }
    }
};

</script>
<style scoped>
.color-picker-container {
    display: flex;
    align-items: center;
    margin: 20px 0;
}

.color-label {
    font-size: 18px;
    font-weight: 600;
    color: #333;
    margin-right: 10px;
}

.color-input {
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    padding: 0;
    transition: box-shadow 0.2s ease-in-out;
}

.color-input:hover,
.color-input:focus {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
}

.color-input::-webkit-color-swatch-wrapper {
    padding: 0;
}

.color-input::-webkit-color-swatch {
    border-radius: 8px;
    border: none;
}
</style>