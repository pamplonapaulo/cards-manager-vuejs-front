<template>
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
