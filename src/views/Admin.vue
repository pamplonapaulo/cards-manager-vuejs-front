<template>
  <Header />
  <div class="container">
    <div class="top">
      <div class="halfWidth">
        <input @change="onChange($event)" v-model="filter" placeholder="Search..." />
        <ButtonCircle size="50"><IconSearch color="blue" /></ButtonCircle>
      </div>
      <div class="halfWidth">
        <ButtonCircle size="50"><IconPlus color="blue" /></ButtonCircle>
      </div>
    </div>
  
    <AdminPanel :cards="cards" />
    <Footer />
  </div>
</template>

<script>
import AdminPanel from './../components/AdminPanel.vue'
import ButtonCircle from './../components/ButtonCircle.vue'
import api from './../services/api'
import IconSearch from './../components/IconSearch.vue'
import IconPlus from './../components/IconPlus.vue'
import Header from './../components/Header.vue'
import Footer from './../components/Footer.vue'

const handleSearch = () => {
  console.log('on change')
}

export default {
  name: 'Admin',
  components: {
    AdminPanel,
    ButtonCircle,
    IconSearch,
    IconPlus,
    Header,
    Footer
  },
  methods: {
    onChange(event) {
        console.log(event.target.value)
    }
  },
  data() {
    return {
      cards: [],
      search: 'teste'
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
  min-height: 100%;
  max-width: 1200px;
  margin: 0px auto;
  padding-top: 80px;
}

.top {
  padding: 100px 3rem;
  width: 100%;
  display: flex;
}

.halfWidth {
  width: 50%;
  flex-direction: row;
  display: flex;
  justify-content: space-evenly;
}

.top .halfWidth {
  justify-content: end;
}

.top .halfWidth:nth-of-type(2) {
  justify-content: flex-end;
}

input {
  border-color: #ccc;
  border-radius: 10px;
  border-width: 0;
  background-image: radial-gradient(transparent, transparent, #ccc);
  font-size: 1.4rem;
  font: 400 17px 'Open Sans';
  height: 35px;
  margin-right: 15px;
  outline-width: 0;
  padding: 10px;
  max-width: 500px;
  width: 70%;
}

input:focus::-webkit-input-placeholder {
  opacity: 0;
}

</style>