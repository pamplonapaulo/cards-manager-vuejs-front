<template>
  <div class="container">
    <img class="card-img" v-bind:src="'./src/assets/' + 'card-green' + '.png'" />

    <div class="details">
      <h1>Detalhes do seu cartão:</h1>

      <ul>
        <li>
          <img v-bind:src="'./src/assets/icons/' + 'card' + '.png'" />
          <p>Renda mínima necessária</p>
          <p>R$0,00</p>
        </li>
        <li>
          <img v-bind:src="'./src/assets/icons/' + 'card' + '.png'" />
          <p>Renda mínima necessária</p>
          <p>R$0,00</p>
        </li>
        <li>
          <img v-bind:src="'./src/assets/icons/' + 'card' + '.png'" />
          <p>Renda mínima necessária</p>
          <p>R$0,00</p>
        </li>
        <li>
          <img v-bind:src="'./src/assets/icons/' + 'card' + '.png'" />
          <p>Renda mínima necessária</p>
          <p>R$0,00</p>
        </li>
        <li>
          <img v-bind:src="'./src/assets/icons/' + 'card' + '.png'" />
          <p>Renda mínima necessária</p>
          <p>R$0,00</p>
        </li>
        <li>
          <img v-bind:src="'./src/assets/icons/' + 'card' + '.png'" />
          <p>Renda mínima necessária</p>
          <p>R$0,00</p>
        </li>
        <li>
          <img v-bind:src="'./src/assets/icons/' + 'card' + '.png'" />
          <p>Renda mínima necessária</p>
          <p>R$0,00</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Detail'
}
</script>

<style scoped>

.container {
  align-items: center;
  background: #ffff;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-evenly;
  max-width: 1200px;
  margin: 0px auto;    
}

.card-img {
  max-width: 250px;
}

.details {
  background: #404542;
  padding: 30px;
  width: 700px;
}

ul {
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
  display: flex;
  flex-flow: row wrap;
  height: 90%;
  justify-content: space-between;
}

li {
  align-items: center;
  background: #FFFFFF;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  height: 45px;
  justify-content: space-evenly;
  margin-bottom: 15px;
  width: 335px;
}

h1 {
  font-size: 24px;
  font-style: normal;
  font-weight: 800;
  line-height: 28px;
  letter-spacing: 0em;
  margin-bottom: 30px;
  text-align: left;
}

li > img {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 6px;
}

p {
  color: #404542;
}

</style>