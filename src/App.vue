<template>
  <CreditCard name="Banco Original" img="card-green"/>
  <CreditCard name="Banco BMG" img="card-gray"/>
</template>

<script>
import CreditCard from './components/CreditCard.vue'

export default {
  name: 'App',
  components: {
    CreditCard
  }
}
</script>
