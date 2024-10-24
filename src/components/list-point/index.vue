<template>
    <div id="map"></div>
    <button class="checkin-button">Chấm công</button>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import * as L from 'leaflet';


export default defineComponent({
    name: 'MapComponent',
    setup() {
        onMounted(() => {
            // Khởi tạo bản đồ
            const map = L.map('map').setView([20.8379059, 106.7135343], 18);

            // Thêm lớp bản đồ
            L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
                maxZoom: 19,
            }).addTo(map);

            // Tạo một div để chứa biểu tượng Font Awesome
            const customIcon = L.divIcon({
                className: 'custom-icon',
                html: '<i class="fas fa-map-marker-alt" style="font-size: 30px; color: red;"></i>', // Tùy chỉnh kích thước và màu sắc trong đây
                iconSize: [30, 30],
                iconAnchor: [15, 30],
                popupAnchor: [0, -30],
            });


            // Thêm marker vào bản đồ
            L.marker([20.8379059, 106.7135343], { icon: customIcon }).addTo(map)
                .bindPopup('Địa điểm của bạn!') // Popup hiển thị khi nhấn vào marker
                .openPopup(); // Mở popup ngay lập tức nếu cần
        });
    },
});
</script>
<style src="./assets/styles.css"></style>
