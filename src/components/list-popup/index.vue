<template>
  <div id="container">
    <success />
    <error />
  </div>
</template>

<script lang="ts">

import error from './components/error.vue';
import success from './components/success.vue';
export default {
  components: {
    error, success
  }
}
</script>
<style src="./assets/styles.css" scoped></style>
