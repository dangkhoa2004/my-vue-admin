<template>
    <div class="message-list-app">
        <!-- Thanh tìm kiếm -->
        <div class="message-list-header">
            <h1 class="message-list-header-title">Trò chuyện</h1>
        </div>
        <!-- Danh sách trò chuyện -->
        <div class="message-list-chat-list">
            <div class="message-list-chat-item">
                <img src="https://i.pravatar.cc/150?img=1" class="message-list-avatar" alt="Avatar" />
                <div class="message-list-chat-info">
                    <h2 class="message-list-chat-name">Hữu Trần</h2>
                    <p class="message-list-chat-message">Đừng lo lắng. Hãy nói anh biết...</p>
                </div>
                <span class="message-list-chat-notification">1</span>
            </div>
            <div class="message-list-chat-item">
                <img src="https://i.pravatar.cc/150?img=2" class="message-list-avatar" alt="Avatar" />
                <div class="message-list-chat-info">
                    <h2 class="message-list-chat-name">Liên Mạnh</h2>
                    <p class="message-list-chat-message">Lo chạy deadline đi mày ơi. Anh...</p>
                </div>
                <span class="message-list-chat-notification">1</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: "ChatApp",
};
</script>
<style src="./assets/styles.css"></style>