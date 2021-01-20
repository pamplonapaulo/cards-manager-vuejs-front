<template>
  <div class="flip-card">
    <div class="item">
      <li v-bind:class="!state.isFlipped ? '' : 'flipped'">
        <div class="action">
          <ButtonCircle v-on:click="state.isFlipped = true" size="35"><IconPencil color="blue" /></ButtonCircle>
          <ButtonCircle @click="onClick(id)" size="35"><IconTrash color="blue" /></ButtonCircle>
        </div>
        <h1>{{ name }}</h1>
        <h1>{{ state.isFront }}</h1>
        <div class="info">
          <h4>{{ brand }}</h4>
          <h4>{{ category }}</h4>
        </div>
      </li>
      <li v-bind:class="state.isFlipped ? 'flipped' : ' '">
        <div class="action">
          <ButtonCircle size="35"><IconSave color="blue" /></ButtonCircle>
          <ButtonCircle size="35"><IconCancel v-on:click="state.isFlipped = false" color="blue" /></ButtonCircle>
        </div>

        <div class="row">
          <div class="col two-third">
            <label>Name</label>
            <input v-bind:value="name" />
          </div>
          <div class="col one-third">
            <label>Brand</label>
            <select v-model="brand">
              <option v-for="option in ['Visa', 'Elo', 'Mastercard']" v-bind:value="option" v-bind:key="option">
                {{ option }}
              </option>
            </select>
          </div>
        </div>
        
        <div class="row">
          <div class="col two-third">
            <label>Slug</label>
            <input v-bind:value="slug" />
          </div>
          <div class="col one-third">
            <label>Category</label>
            <select v-model="category">
              <option v-for="option in ['Silver', 'Gold', 'Platinum', 'Black']" v-bind:value="option" v-bind:key="option">
                {{ option }}
              </option>
            </select>
          </div>
        </div>

        <div class="col fullWidth">
          <label>Image URL</label>
          <input v-bind:value="img" />
        </div>

        <div class="row">
          <div class="col halfWidth">
            <label>Limit</label>
            <input v-bind:value="limit" />
          </div>
          <div class="col halfWidth">
            <label>Fee</label>
            <input v-bind:value="fee" />
          </div>
        </div>

      </li>
    </div>
  </div>
</template>

<script>
import ButtonCircle from './ButtonCircle.vue'
import IconTrash from './IconTrash.vue'
import IconPencil from './IconPencil.vue'
import IconSave from './IconSave.vue'
import IconCancel from './IconCancel.vue'
import Footer from './Footer.vue'

export default {
  name: 'AdminCreditCard',
  components: {
    ButtonCircle,
    IconTrash,
    IconPencil,
    IconSave,
    IconCancel
  },
  methods: {
    onClick(e) {
        console.log(e)
    }
  },
  data() {
    return {
      state: {
        isFlipped: false
      }
    }
  },
  props: {
    id: String,
    key: String,
    name: String,
    slug: String,
    img: String,
    brand: String,
    category: String,
    limit: String,
    fee: String,
  }
}
</script>

<style scoped>
.flip-card {
  margin-bottom: 1rem;
}

.item {
  max-height: 192px;
  transform-style: preserve-3d;
  transition: transform 0.6s;
}

li {
  align-items: center;
  background: rgba(60,225,104, 0.2);
  border-radius: 5%;
  display: flex;
  flex-direction: column;
  height: 160px;
  justify-content: space-between;
  list-style: none;
  margin: 10px;
  padding: 1rem 0;
  width: 260px;
  transition: all 0.6s;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.item li:nth-of-type(1) {
  background: #3CD90D;
  transform: translateY(0) rotateY(0deg);
}

.item li.flipped:nth-of-type(1) {
  transform: translateY(0) rotateY(180deg);
}

.item li:nth-of-type(2) {
  background: #1B7728;
  transform: translateY(calc(-100% - 10px)) rotateY(180deg);
}

.item li.flipped:nth-of-type(2) {
  transform: translateY(calc(-100% - 10px)) rotateY(0deg);
}

.action {
  align-self: flex-end;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-right: 0rem;
  width: calc(40%);
}

.info {
  width: 85%;
  display: flex;
  justify-content: space-between;
  margin: 0 7.5%;
}

h1 {
  color: #fff;
  font-family: 'Open Sans';
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 60px;
  letter-spacing: 0em;
  text-align: center;
}

img {
  max-width: 250px;
}

label {
  font-size: 11px;
  text-align: left;
  line-height: 1.5;
}

input {
  border-width: 0;
  border-radius: 3px;
  font-size: 11px;
}

select {
  border-width: 0;
  border-radius: 3px;
  font-size: 11px;
}

.row {
  display: flex;
  flex-direction: row;
}

.col {
  display: flex;
  flex-direction: column;
}

.col:nth-of-type(2) {
  margin-left: 5px;
}

.two-third {
  width: 130px;
}

.one-third {
  width: 70px;
}

.fullWidth {
  width: 205px;;
}

.halfWidth {
  width: 100px;
}
</style>