<template>
  <Header />
  <div class="container">
    <div class="top">
      <h1>Credit Cards</h1>
    </div>
    <ul>
      <div v-if="!pages || !pages.length">Loading data...</div>
      <div v-else>
        <div class="page" v-for="(page, index) in pages" v-bind:key="index">
          <List :cards="page" />
        </div>
      </div>
    </ul>
  </div>
  <Footer />
</template>

<script>
import List from './../components/List.vue'
import Header from './../components/Header.vue'
import Footer from './../components/Footer.vue'
import api from './../services/api'
import handleDataFormat from './../utils/handleDataFormat'

export default {
  name: 'Home',
  components: {
    Header,
    List,
    Footer
  },
  methods: {
    scroll () {
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
    try {
      const response = await api.get('cards');
      const [ pagesOfCards, pagLength ] = handleDataFormat(response.data, 6)
      this.paginationLength = pagLength
      this.cards = pagesOfCards
      // localStorage.setItem('cards', JSON.stringify(response.data))
      this.pages.push(pagesOfCards[this.current])
      this.current++
      this.scroll()
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

<style scoped>

.container {
  background: #404542;
  display: flex;
  flex-flow: row wrap;
  height: 100%;
  min-height: 102vh;
  max-width: 1200px;
  margin: 0px auto;
  padding-top: 80px;
}

.top {
  padding: 100px 3rem;
  width: 100%;
  display: flex;
}

.top h1 {
  font-size: 2.5rem;
  font-weight: 700;
}

ul {
  align-items: center;
  align-self: flex-start;
  display: flex;
  flex-flow: row wrap;
  height: 100%;
  justify-content: space-between;
  margin: 0 3rem 2rem;
  width: 100%;
}

.page {
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
}

.loading {
  font-size: 30px;
  width: 100%;
  padding: 2rem 0;
}

</style>