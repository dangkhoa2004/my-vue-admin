<template>
    <div class="link-login">
        <h3>Đăng Nhập Bằng Liên Kết</h3>
        <button @click="sendLoginLink">Gửi Liên Kết Đăng Nhập</button>
    </div>
</template>

<script>
export default {
    name: 'LinkLogin',
    methods: {
        sendLoginLink() {
            // Giả lập việc gửi liên kết đăng nhập qua email hoặc SMS
            alert('Liên kết đăng nhập đã được gửi!');
        }
    }
};
</script>
<style src="../assets/styles.css"></style>
