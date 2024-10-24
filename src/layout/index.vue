<template>
  <div class="layout">
    <layout-header /> <!-- Static header -->
    <div class="layout-body">
      <layout-sidebar /> <!-- Static sidebar -->
      <layout-content>
        <!-- Phần view mặc định sẽ được render ở đây -->
        <router-view />
        <!-- Các component list-job và list-schedual sẽ được render ở đây -->

      </layout-content>
    </div>
  </div>
</template>

<script>
import LayoutHeader from './components/lay-header/layout_header.vue';
import LayoutSidebar from './components/lay-sidebar/layout_sidebar.vue';
import LayoutContent from './components/lay-content/layout_content.vue';
import mainjs from '@/assets/script';

export default {
  name: 'Layout',
  components: {
    LayoutHeader,
    LayoutSidebar,
    LayoutContent
  },
  mounted() {
    mainjs();
  }
};
</script>
