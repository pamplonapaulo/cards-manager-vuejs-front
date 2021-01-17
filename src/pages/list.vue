<template>
  <div class="container">
    <ul>
      <CreditCard name="Banco Original" img="card-green"/>
      <CreditCard name="Banco BMG" img="card-gray"/>
      <CreditCard name="Banco Original" img="card-green"/>
      <CreditCard name="Banco BMG" img="card-gray"/>
      <CreditCard name="Banco Original" img="card-green"/>
      <CreditCard name="Banco BMG" img="card-gray"/>
    </ul>
  </div>
</template>

<script>
import CreditCard from '../components/CreditCard.vue'

export default {
  name: 'List',
  components: {
    CreditCard
  }
}
</script>

<style scoped>

.container {
  background: #404542;
  display: flex;
  flex-flow: row wrap;
  height: 100%;
  max-width: 1200px;
  margin: 0px auto;  
}

ul {
  align-items: center;
  align-self: flex-start;
  display: flex;
  flex-flow: row wrap;
  height: 100%;
  justify-content: space-evenly;
}

</style>