<template>
  <div class="container">
    <ul>
      <div v-if="!cards || !cards.length">Loading sample data...</div>
      <List v-else :cards="cards" />
    </ul>
  </div>
</template>

<script>
import List from './../components/List.vue'
import api from './../services/api'

export default {
  name: 'Home',
  components: {
    List
  },
  data() {
    return {
      cards: [],
    }
  },
  async mounted() {
    try {
      const response = await api.get('cards');
      this.cards = response.data
      localStorage.setItem('cards', JSON.stringify(response.data))
    } catch (err) {
      console.log(err)
    }
  },
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