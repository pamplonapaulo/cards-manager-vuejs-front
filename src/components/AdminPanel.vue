<template>
  <ul>
    <AdminCreditCard
      v-for="card in cards"
      v-bind:key="card.id"
      v-bind:id="card.id"
      v-bind:name="card.name"
      v-bind:slug="card.slug"
      v-bind:img="card.image"
      v-bind:brand="card.brand"
      v-bind:category="card.category"
      v-bind:limit="card.limit"
      v-bind:fee="card.fee"
      v-bind:editable="true"
    ></AdminCreditCard>
  </ul>
</template>

<script>
import AdminCreditCard from './AdminCreditCard.vue'

export default {
  name: 'AdminPanel',
  components: {
    AdminCreditCard
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

<style scoped>

ul {
  align-items: center;
  align-self: flex-start;
  display: flex;
  flex-flow: row wrap;
  height: 100%;
  justify-content: space-evenly;
  width: 95%;
  margin: 0 2.5% 2rem;
}

</style>
