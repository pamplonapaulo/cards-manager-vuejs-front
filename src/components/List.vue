<template>
  <CreditCard
    v-for="card in cards"
    v-bind:key="card.id"
    v-bind:name="card.name"
    v-bind:img="card.image"
  ></CreditCard>
</template>

<script>
import CreditCard from './CreditCard.vue'

export default {
  name: 'List',
  components: {
    CreditCard
  },
  props: {
    cards: {
      type: Array,
      required: true,
      default: () => [],
    },
  }
}
</script>
