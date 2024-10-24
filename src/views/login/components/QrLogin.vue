<template>
    <div class="qr-login">
        <h3>Đăng Nhập Bằng QR Code</h3>
        <div id="qr-code"></div>
        <p>Quét mã QR để đăng nhập.</p>
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