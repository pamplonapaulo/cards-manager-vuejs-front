<template>
  <router-link to='/detail'>
    <li>
      <img v-bind:src="img" />
      <!-- <img v-bind:src="'https://i.pinimg.com/originals/63/56/b8/6356b80da9ea033093d1f1696066ba55.png'" /> -->
      <!-- <img v-bind:src="'./src/assets/' + img + '.png'" /> -->
      <h1>{{ name }}</h1>
    </li>
  </router-link>
</template>

<script>
export default {
  name: 'CreditCard',
  props: {
    key: String,
    name: String,
    img: String
  }
}
</script>

<style scoped>
li {
  align-items: center;
  background: rgba(60,225,104, 0.2);
  border-radius: 5%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 300px;
  justify-content: space-evenly;
  list-style: none;
  margin: 10px;
  width: 300px;
  transition: 0.1s all ease;
}

li:hover {
  background: rgba(60,225,104, 0.4);
  transform: scale(1.05);
}

h1 {
  color: #fff;
  font-family: Open Sans;
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
</style>