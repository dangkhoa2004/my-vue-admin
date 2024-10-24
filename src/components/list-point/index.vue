<template>
    <div id="map"></div>
    <button class="checkin-button">{{ $t('message.timeset') }}</button>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import * as L from 'leaflet';


export default defineComponent({
    name: 'MapComponent',
    setup() {
        onMounted(() => {
            const map = L.map('map').setView([20.8379059, 106.7135343], 18);
            L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
                maxZoom: 19,
            }).addTo(map);

            const customIcon = L.divIcon({
                className: 'custom-icon',
                html: '<i class="fas fa-map-marker-alt" style="font-size: 30px; color: red;"></i>',
                iconSize: [30, 30],
                iconAnchor: [15, 30],
                popupAnchor: [0, -30],
            });
            L.marker([20.8379059, 106.7135343], { icon: customIcon }).addTo(map)
                .bindPopup('Địa điểm của bạn!')
                .openPopup();
        });
    },
});
</script>
<style src="./assets/styles.css"></style>
