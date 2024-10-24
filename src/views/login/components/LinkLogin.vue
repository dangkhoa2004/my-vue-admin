<template>
    <div class="link-login">
        <h3>{{ $t('message.loginbylink') }}</h3>
        <button @click="sendLoginLink">{{ $t('message.sendlink') }}</button>
    </div>
</template>

<script>
export default {
    name: 'LinkLogin',
    methods: {
        sendLoginLink() {
            alert('Liên kết đăng nhập đã được gửi!');
        }
    }
};
</script>
<style src="../assets/styles.css"></style>
