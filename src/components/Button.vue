<template>
  <button>{{ content }}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    content: String
  }
}
</script>

<style>
button {
  align-self: center;
  background: #3DDB93;
  box-shadow: 0px 4px 6px rgba(61, 219, 147, 0.15);
  border-radius: 4px;
  border-width: 0;
  color: #FFFFFF;
  cursor: pointer;
  font-family: 'Open Sans';
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  min-height: 48px;
  line-height: 20px;
  letter-spacing: 0em;
  margin: 1.7rem auto;
  max-width: 418px;
  outline: none;
  text-align: center;
  transition: all .2s ease;
  width: 90%;
}

button:hover {
  background: #00fa9a;
}
</style>