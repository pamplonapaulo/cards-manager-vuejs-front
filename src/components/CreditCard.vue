<template>
  <!-- <router-link :to='/product/ + slug'> -->
  <router-link class="anchor" :to="{
    name: 'Product',
    params: {
      id: key,
      name: name,
      slug: slug,
      img: img,
      brand: brand,
      category: category,
      limit: limit,
      fee: fee
    }}">
    <li>
      <img v-bind:src="img" />
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
    slug: String,
    img: String,
    brand: String,
    category: String,
    limit: String,
    fee: String
  }
}
</script>

<style scoped>

.anchor {
  margin-bottom: 1rem;
}

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