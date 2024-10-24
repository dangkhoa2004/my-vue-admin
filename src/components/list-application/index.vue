<template>
    <div class="all-settings">
        <div class="setting-for-infomation">
            <h3>{{ $t('message.appsetting') }}:</h3>
            <listSetting />
        </div>
        <div class="setting-for-status">
            <h3>{{ $t('message.statussetting') }}:</h3>
            <listPopup />
        </div>
    </div>
</template>

<script lang="ts">
import listPopup from '../list-popup/index.vue';
import listSetting from '../list-settings/index.vue';

export default {
    name: "ChatApp",
    components: {
        listPopup, listSetting
    }
};
</script>

<style src="./assets/styles.css"></style>