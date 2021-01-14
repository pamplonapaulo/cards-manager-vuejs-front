<template>
  <div>
    <h1>{{ name }}</h1>
    <!-- <img alt="alt" src="../assets/card-green.png" /> -->
    <img v-bind:src="'./src/assets/' + img + '.png'" /> 
  </div>
</template>

<script>
export default {
  name: 'CreditCard',
  props: {
    name: String,
    img: String
  }
}
</script>
