<template>
  <!-- html -->
  <div class="app">
    <div v-html="google"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      google: "<a href=\'http://google.com\'>Google</a>", 
    };
  },
};
</script>