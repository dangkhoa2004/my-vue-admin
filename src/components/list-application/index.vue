<template>
    <div class="all-settings">
        <div class="setting-for-infomation">
            <h3>Cài đặt ứng dụng:</h3>
            
        </div>
        <div class="setting-for-status">
            <h3>Cài đặt trạng thái:</h3>
            <testComponent />
        </div>
    </div>
</template>

<script lang="ts">
import testComponent from '../list-popup/index.vue';

export default {
    name: "ChatApp",
    components: {
        testComponent
    }
};
</script>

<style src="./assets/styles.css"></style>