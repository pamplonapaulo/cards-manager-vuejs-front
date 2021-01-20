<template>
  <Header />
  <div class="container">
    <div class="top">
      <h1>Management System</h1>
      <div class="row">
        <div class="halfWidth">
          <input @change="onChange($event)" v-model="filter" placeholder="Search..." />
          <ButtonCircle size="50"><IconSearch color="blue" /></ButtonCircle>
        </div>
        <div class="halfWidth">
          <ButtonCircle size="50"><IconPlus color="blue" /></ButtonCircle>
        </div>
      </div>
    </div>
  
    <ul>
      <div class="page" v-for="(page, index) in pages" v-bind:key="index">
        <AdminPanel :cards="page" />
      </div>
    </ul>
  </div>
  <Footer />
</template>

<script>
import AdminPanel from './../components/AdminPanel.vue'
import ButtonCircle from './../components/ButtonCircle.vue'
import IconSearch from './../components/IconSearch.vue'
import IconPlus from './../components/IconPlus.vue'
import Header from './../components/Header.vue'
import Footer from './../components/Footer.vue'
import api from './../services/api'
import handleDataFormat from './../utils/handleDataFormat'

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
    },
    scroll (person) {
      window.onscroll = () => {
        const allDone = this.current == this.cards.length

        let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;

        if (bottomOfWindow && !allDone) {
          setTimeout(() => {
            this.pages.push(this.cards[this.current])
            this.current++
          }, 1000)
        }
      };
    },
  },
  data() {
    return {
      cards: [],
      pages: [],
      current: 0,
      paginationLength: 0
    }
  },
  async beforeMount() {
    console.log('before mount')
    try {
      console.log('before try')
      const response = await api.get('cards');
      const [ pagesOfCards, pagLength ] = handleDataFormat(response.data, 10)
      console.log(pagLength)
      this.paginationLength = pagLength
      this.cards = pagesOfCards
      console.log(this.paginationLength)

      // this.cards = handleDataFormat(response.data, 10)
      // localStorage.setItem('cards', JSON.stringify(response.data))
      this.pages.push(pagesOfCards[this.current])
      this.current++
      this.scroll()

    } catch (err) {
      console.log(err)
    }
    console.log(this.cards)
  },
}
</script>

<style scoped>

.container {
  background: #404542;
  display: flex;
  flex-flow: row wrap;
  min-height: 102vh;
  max-width: 1200px;
  margin: 0px auto;
  padding-top: 80px;
}

.top {
  padding: 100px 3rem;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.top h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 80px;
  text-align: left;
}

.top .row {
  flex-direction: row;
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

.page {
  display: flex;
  flex-flow: row wrap;
  justify-content: end;
  margin: 0 2rem;
}

</style>