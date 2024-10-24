<template>
    <div class="qr-login">
        <h3>{{ $t('message.signin_qrcode') }}</h3>
        <div id="qr-code"></div>
    </div>
</template>

<script>
export default {
    name: 'QrLogin',
    mounted() {
        const qrCodeElement = document.getElementById('qr-code');
    }
};
</script>
<style src="../assets/styles.css"></style>