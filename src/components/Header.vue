<template>
  <header>
    <div class="contained">
      <LogoPlusdin style="margin-left: 3rem;"/>
    </div>
  </header>
</template>

<script>
import LogoPlusdin from './../components/LogoPlusdin.vue'

export default {
  name: 'Header',
    components: {
    LogoPlusdin
  },
}
</script>

<style scoped>
header {
  position: fixed;
  height: 80px;
  width: 100%;
  background: #fff;
  box-shadow: 5px 2px 5px rgba(0,0,0,0.1);
  z-index: 9;
}
.contained {
  height: 100%;
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0px auto;
}
</style>