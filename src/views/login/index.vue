<template>
    <div class="login-container">
        <h2>Đăng Nhập</h2>
        <div class="container-with-divider">
            <form @submit.prevent="handleLogin">
                <InputField label="Tên đăng nhập" id="username" v-model="username" placeholder="Nhập tên đăng nhập" />
                <InputField label="Mật khẩu" id="password" type="password" v-model="password"
                    placeholder="Nhập mật khẩu" />
                <button type="submit">Đăng Nhập</button>
                <ErrorMessage :message="errorMessage" />
            </form>
            <div class="divider"></div> <!-- Đường kẻ phân chia -->
            <div class="alternative-login">
                <QrLogin />
                <LinkLogin />
            </div>
        </div>
    </div>
</template>


<script lang="ts">
import { ref } from 'vue';
import { setToken, storageLocal } from '@/utils/auth'; // Import storageLocal
import { mockLogin } from '@/utils/mockApi';
import InputField from './components/InputField.vue';
import ErrorMessage from './components/ErrorMessage.vue';
import QrLogin from './components/QrLogin.vue';
import LinkLogin from './components/LinkLogin.vue';

export default {
    name: 'Login',
    components: {
        InputField,
        ErrorMessage,
        QrLogin,
        LinkLogin
    },
    setup() {
        const username = ref<string>('');
        const password = ref<string>('');
        const errorMessage = ref<string>('');

        const handleLogin = async () => {
            try {
                const response = await mockLogin(username.value, password.value);
                setToken(response.token);
                storageLocal().setItem('userInfo', JSON.stringify(response.userInfo)); // Make sure to use JSON.stringify for complex objects
                console.log('Đăng nhập thành công:', response.token);
                window.location.href = '/';
            } catch (error) {
                errorMessage.value = (error as Error).message;
            }
        };
        return {
            username,
            password,
            errorMessage,
            handleLogin,
        };
    },
};
</script>

<style src="./assets/styles.css"></style>