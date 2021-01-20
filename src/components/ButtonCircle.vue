<template>
  <button v-bind:style="'width:' + size + 'px; height:' + size + 'px'" v-bind:height="size">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'ButtonCircle',
  props: {
    size: String
  }
}
</script>

<style>
button {
  background: #98BF64;
  border-width: 0;
  border-radius: 50%;
  cursor: pointer;
  height: 70px;
  width: 70px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  justify-content: center;
  outline: none;
  text-align: center;
  transition: .2s all;
}

button:hover {
  background: #728C69;
  transform: scale(1.05);
}
</style>