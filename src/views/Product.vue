<template>
  <div class="container">
    <section class="main">
      <h1>{{ $route.params.name }}</h1>
      <img class="card" v-bind:src=$route.params.img />
      <button>Solicitar agora!</button>
      <ul class="green-dots">
        <li>Anuidade grátis para sempre</li>
        <li>Cartão internacional</li>
        <li>Saques nos caixas de Banco 24 Horas</li>
      </ul>
    </section>
    <section class="publisher">
      <h3>Opinião da editora</h3>
      <p>O Cartão Original Internacional atende bem a simples função de um cartão de crédito. Para você que deseja economizar, obtê-lo pode ser interessante: as duas principais vantagens que o Cartão Original oferece é a isenção da anuidade e ainda possui a função cashback, em que parte de seus gastos no crédito retornam em dinheiro. Mas, se você procura um cartão que disponibiliza benefícios de milhas e pontuações para viagens, essa não é a melhor opção.</p>
      <div class="author">
      <img v-bind:src="'/src/assets/' + 'avatar' + '.png'" />
        <div class="wrapper">
          <h5 class="name">Luana Pedra</h5>
          <h6 class="role">Editora Plusdin</h6>
        </div>
      </div>
    </section>
    <section class="details">
      <h1>Detalhes do seu cartão</h1>

      <ul>

        <li>
          <div class="icon-wrapper">
            <img v-bind:src="'/src/assets/icons/' + 'dolar-sign' + '.png'" />
          </div>
          <div class="text-wrapper">
            <p>Renda mínima necessária</p>
            <p>A consultar</p>
          </div>
        </li>
        <li>
          <div class="icon-wrapper">
            <img v-bind:src="'/src/assets/icons/' + 'card' + '.png'" />
          </div>
          <div class="text-wrapper">
            <p>Primeira anuidade</p>
            <p>R$ {{ $route.params.fee }}</p>
          </div>
        </li>
        <li>
          <div class="icon-wrapper">
            <img v-bind:src="'/src/assets/icons/' + 'card' + '.png'" />
          </div>
          <div class="text-wrapper">
            <p>Demais anuidades</p>
            <p>A consultar</p>
          </div>
        </li>
        <li>
          <div class="icon-wrapper">
            <img v-bind:src="'/src/assets/icons/' + 'globe' + '.png'" />
          </div>
          <div class="text-wrapper">
            <p>Categoria</p>
            <p>{{ $route.params.category }}</p>
          </div>
        </li>
        <li>
          <div class="icon-wrapper">
            <img v-bind:src="'/src/assets/icons/' + 'mastercard' + '.png'" />
          </div>
          <div class="text-wrapper">
            <p>Bandeira</p>
            <p>{{ $route.params.brand }}</p>
          </div>
        </li>
        <li>
          <div class="icon-wrapper">
            <img v-bind:src="'/src/assets/icons/' + 'percentege' + '.png'" />
          </div>
          <div class="text-wrapper">
            <p>Juros rotativos</p>
            <p>A consultar</p>
          </div>
        </li>
        <li>
          <div class="icon-wrapper">
            <img v-bind:src="'/src/assets/icons/' + 'card' + '.png'" />
          </div>
          <div class="text-wrapper">
            <p>Limite de crédito</p>
            <p>R$ {{ $route.params.limit }}</p>
          </div>
        </li>
      </ul>
    </section>
    <section class="issuingBank">
      <h5>Sobre o emissor do cartão</h5>
      <div class="hidden">
        <p>O Banco Original é uma instituição financeira brasileira controlada pela holding J&F e considerado um dos 20 maiores bancos no Brasil. Foi fundado em março de 2011 a partir da união do Banco JBS e Banco Matone. Inicialmente o foco de negócio do banco foi no agronegócio e varejo. Em 2013, o Banco Original expandiu suas operações para o segmento corporativo, com foco em clientes com faturamento acima de 300 milhões de reais por ano. Em 2013, o Banco Original deu início a um projeto para se tornar o primeiro banco brasileiro 100% digital, onde não haverá agências e todos os serviços serão oferecidos por meio de aplicativos para computadores, celulares, tablets e Smart TVs. Em 2015, um novo site com a nova identidade do banco foi lançado como primeira iniciativa.</p>
      </div>
    </section>
    <section class="featured">
      <div class="block">
        <h5>Programa de pontos</h5>
        <h3>Cashback Original</h3>
        <ul class="green-dots">
          <li>Suas compras viram pontos e seus pontos viram dinheiro que serão descontados em suas próximas faturas</li>
          <li>1 ponto = 1 real</li>
          <li>Mastercard Surpreenda</li>
          <li>A partir de 5 pontos, você pode comprar um produto e levar outro</li>
        </ul>
      </div>
      <div class="block">
        <h3>Mais Benefícios</h3>
        <ul class="green-dots">
          <li>Suas compras viram pontos e seus pontos viram dinheiro que serão descontados em suas próximas faturas</li>
          <li>1 ponto = 1 real</li>
          <li>Mastercard Surpreenda</li>
          <li>A partir de 5 pontos, você pode comprar um produto e levar outro</li>
        </ul>
      </div>
    </section>
    <section class="prosAndCons">
      <div>
        <div class="title">
          <h1>Vantagens</h1>
          <img v-bind:src="'/src/assets/icons/' + 'plus' + '.png'" />
        </div>
        <ul class="green-dots">
          <li>The Capital One Venture is one of the best travel credit cards available.</li>
          <li>You’ll earn double miles on every purchase, from groceries to entertainment and everything in between.</li>
          <li>Maximize your rewards by transfering Capital One Miles to more than a dozen leading travel loyalty programs.</li>
        </ul>
      </div>
      <div>
        <div class="title">
          <h1>Desvantagens</h1>
          <img v-bind:src="'/src/assets/icons/' + 'minus' + '.png'" />
        </div>
        <ul class="green-dots">
          <li>The Capital One Venture is one of the best travel credit cards available.</li>
          <li>You’ll earn double miles on every purchase, from groceries to entertainment and everything in between.</li>
          <li>Maximize your rewards by transfering Capital One Miles to more than a dozen leading travel loyalty programs.</li>
        </ul>
      </div>
    </section>
    <section class="alternative">
      <h4>Uma alternativa para você</h4>
      <img class="card" v-bind:src=$route.params.img />
      <h1>{{ $route.params.name }}</h1>
      <p>Vantagens similares, sem anuidade.</p>
      <button>Solicitar agora!</button>
    </section>
    <section class="analysis">
      <h2>Análise completa do BMG Card Consignado Mastercard Internacional</h2>
      <p>The Blue Cash Preferred® Card from American Express sits among the elite in cash-back credit cards and is perhaps the ideal card for families.</p>
      <p>It offers an eye-popping 6% cash back at U.S. supermarkets on up to $6,000 in spending per year, 6% back on select U.S. streaming subscriptions, and a generous 3% back on transit including U.S. gas stations, plus 1% cash back on everything else. Terms apply. Cash back is received in the form of reward dollars that can be redeemed as a statement credit when your rewards total at least $25. Gift cards and merchandise are also available.</p>
      <p>Those premier rewards come at an annual cost. There’s an annual fee of $95. That’s pricey for a cash-back credit card, especially since most of its competitors charge no annual fee.</p>
      <p>Still, the card’s high rewards rates will more than make up for the fee for many cardholders, especially those with families. The decision becomes a break-even analysis: Will you spend enough on the card, especially on transit and supermarkets, to quickly cover its cost and start earning a profit?</p>
      <p>The annual fee on the Blue Cash Preferred® Card from American Express sets a high bar for its rewards. You can clear it fairly easily if you regularly spend a lot at the supermarket, the gas pump, or on commuting. And if you earn the card's bonus offer for new cardholders, your first year-plus with the card will cost you nothing.</p>
    </section>
    <footer>
      <div class="top">
        <h5>Política de Privacidade</h5>
        <h5>Termos de Serviço</h5>
      </div>
      <p>Plusdin©  2019 - Todos os Direitos Reservados</p>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'Product'
}
</script>

<style scoped>

section {
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  width: 100%;
}

ul {
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
  display: flex;
  flex-flow: row wrap;
  height: 90%;
  justify-content: center;
}

li {
  align-items: center;
  background: #FFFFFF;
  border-radius: 5px;
  display: block;
  height: 56px;
  justify-content: space-between;
  margin-bottom: 15px;
  padding: 0 10px;
  width: 315px;
}

li:before {
  content: " ";
  background: #468D73;
  display: block;
  min-width: 10px;
  min-height: 10px;
  border-radius: 50%;
  margin-right: 0.5rem;
}

h1 {
  font-size: 24px;
  font-style: normal;
  font-weight: 800;
  line-height: 28px;
  letter-spacing: 0em;
  margin-bottom: 30px;
  text-align: center;
}

li > img {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 6px;
}

p {
  color: #404542;
  font-size: 14px;
  font-weight: 600;
}

button {
  align-self: center;
  background: #3DDB93;
  box-shadow: 0px 4px 6px rgba(61, 219, 147, 0.15);
  border-radius: 4px;
  border-width: 0;
  color: #FFFFFF;
  cursor: pointer;
  font-family: 'Open Sans';
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  min-height: 48px;
  line-height: 20px;
  letter-spacing: 0em;
  margin: 1.7rem auto;
  max-width: 418px;
  text-align: center;
  transition: all .2s ease;
  width: 90%;
}

button:hover {
  background: #00fa9a;
}

footer {
  background: #252827;
  display: flex;
  flex-direction: column;
  height: 75px;
  width: 100%;
  padding-bottom: 1rem;
}

footer .top {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

footer .top h5 {
  color: #fff;
  font-family: 'Open Sans';
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: center;
  margin: 1rem;
}

footer p {
  color: #fff;
  font-family: Open Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0;
  text-align: center;
  margin: 1rem;
}

.card {
  margin: 0 auto;
  max-width: 300px;
  width: 75%;
}

.green-dots li {
  background: none;
  color: #404542;
  display: inherit;
  font-family: 'Open Sans';
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  height: 33px;
  justify-content: end;
  line-height: 20px;
  letter-spacing: 0;
  margin: 0;
  padding: 0 1rem;
  text-align: left;  
}

.container {
  align-items: center;
  background: #FCFFFE;
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 1200px;
  margin: 0px auto;
  overflow-y: auto;
}

.container::-webkit-scrollbar {
  width: 0px !important;
  display: none;
}

.contaier > h1 {
  color: #404542;
  font-family: 'Open Sans';
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: center;
}

.main h1 {
  color: #404542;
  font-family: 'Open Sans';
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.75;
  letter-spacing: 0em;
  margin: 0;
  padding: 2rem;
  text-align: center;
}

.publisher {
  display: flex;
  flex-direction: column;
}

.publisher h3 {
  color: #404542;
  font-family: 'Open Sans';
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 0em;
  padding: 0 1rem;
  text-align: left;
}

.publisher p {
  font-family: 'Open Sans';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  margin: 0 1rem;
  padding: 1rem;
}

.publisher .author {
  display: flex;
  margin: 0 1rem;
}

.publisher .author .wrapper {
  margin: 0 1rem;
}

.publisher .author .name {
  color: #404542;
  font-family: 'Open Sans';
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
}

.publisher .author .role {
  font-family: 'Open Sans';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: #468D73;
}

.details {
  background: #404542;
  max-width: 700px;
  padding: 15px 30px 0;
}

.details h1 {
  font-size: 21px;
  text-align: left;
  margin-bottom: 15px;
  padding: 0 1rem;
}

.details ul {
  padding: 0 1rem;
}

.details li {
  display: flex;
  width: 100%;
}

.details li:before {
  display: none;
}

.issuingBank h5 {
  display: flex;
  font-family: 'Open Sans';
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  justify-content: space-between;
  line-height: 20px;
  letter-spacing: 0em;
  margin: 1rem 1rem 0.5rem;
  text-align: left;
  color: #404542;
  width: calc(100% - 2rem);
}

.issuingBank h5::after {
  border-top: 2px solid #404542;
  border-right: 2px solid #404542;
  content: " ";
  height: 8px;
  transform-origin: center center;
  transform: translate(-50%, 50%) rotate(135deg);
  transition: 0.2s transform;
  width: 8px;
}

.issuingBank .hidden {
  overflow: hidden;
  height: 0;
  transition: 1s height;
}

.issuingBank:hover .hidden {
  height: 100%;
}

.issuingBank:hover h5::after {
  transform: translate(-50%, 50%) rotate(315deg);
}
.issuingBank p {
  font-family: 'Open Sans';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  margin: 0 1.5rem;
  overflow: auto;
  text-align: left;
  transition: 0.2s;
  width: calc(100% - 3rem);
}

.issuingBank p::-webkit-scrollbar {
  width: 0px !important;
}

.issuingBank p::-webkit-scrollbar {
  display: none;
}

.featured {
  display: flex;
  flex-direction: column;
}

.featured .block {
  padding-bottom: 1rem;
}

.featured .block h3 {
  color: #404542;
  font-family: 'Open Sans';
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 0em;
  margin: 0 1rem 0.5rem;
  text-align: left;
}

.featured .block h5 {
  color: #468D73;
  font-family: Open Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0em;
  margin: 0 1rem;
  text-align: left;
  width: calc(100% - 2rem);
}

.featured li {
  align-items: baseline;
  height: auto;
  margin: 0.5rem 0;
}

.prosAndCons > div {
  padding: 1rem 0;
}

.prosAndCons .title {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 1rem;
}

.prosAndCons h1 {
  color: #404542;
  display: flex;
  flex-direction: column;
  font-family: 'Open Sans';
  font-size: 30px;
  font-style: normal;
  font-weight: 800;
  justify-content: center;
  height: 50px;
  line-height: 42px;
  letter-spacing: 0em;
  text-align: left;    
}

.prosAndCons h1::before {
  content: " ";
  width: 22px;
  border: 2px solid #3DDB93;
}

.prosAndCons img {
  height: 50px;
}

.prosAndCons li {
  align-items: baseline;
  height: auto;
  margin: 0.5rem 0px;
  font-weight: 400;
}

.alternative {
  background: #404542;
  padding-bottom: 0;
}

.alternative h1 {
  font-family: 'Open Sans';
  font-size: 21px;
  font-style: normal;
  font-weight: 800;
  line-height: 28px;
  letter-spacing: 0em;
  margin: 0px;
  padding: 1rem 1rem 0;
  text-align: center;
}

.alternative h4 {
  font-family: 'Open Sans';
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: center;
  padding-bottom: 1rem;
}

.alternative p {
  color: #48AAF3;
  font-family: 'Open Sans';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  margin-top: 1rem;
  text-align: center;
}

.analysis h2 {
  color: #24326B;
  font-family: 'Open Sans';
  font-size: 23px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 0em;
  margin: 0.5rem 1rem;
  text-align: left;
}

.analysis p {
  font-family: 'Open Sans';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  margin: 0.5rem 1rem;
  text-align: left;
}

.text-wrapper {
  display: flex;
  flex-direction: row;
  width: calc(100% - 10px);
  justify-content: space-between;
  margin-left: 10px;
}

.icon-wrapper {
  background: rgba(64,69,66,.1);
  border-radius: 4px;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media only screen and (min-width: 730px) {

  /* .main > img {
    width: 400px;
    margin: 0;
  } */

  section .green-dots {
    flex-direction: column;
  }

  .main .green-dots {
    flex-direction: row;
    margin: 1rem auto 0;
  }

  .main .green-dots li {
    flex-direction: column;
    margin: 0 2rem;
    max-width: 150px;
    text-align: center;
    height: auto;
  }

  .publisher {
    max-width: 400px;
  }

  .details {
    padding: 15px 30px;
  }

  .details h1 {
    padding: 10px;
  }

  .details ul {
    height: 300px;
    justify-content: end;
    padding: 0px 10px;
  }

  .details li {
    width: 310px;
  }

  .details li:nth-child(even) {
    margin-left: 15px;
  }

  .issuingBank {
    max-width: 700px;
  }

  .featured {
    flex-direction: row;
    justify-content: space-evenly;
  }

  .featured .block {
    max-width: 40%;
  }

  .featured .block h3 {
    font-size: 30px;
    margin: 0px 1rem 1rem;
  }

  .featured .block h5 {
    font-size: 19px;
    margin: -30px 1rem 10px;
  }

  .prosAndCons {
    flex-direction: row;
    justify-content: space-evenly;
    margin-bottom: 5rem;
  }

  .prosAndCons li {
    font-size: 19px;
    line-height: 1.4;
  }

  .prosAndCons div {
    max-width: 400px
  }

  .analysis h2 {
    font-size: 33px;
  }

  .analysis p {
    font-size: 20px;
  }

  ul {
      justify-content: space-between;
  }

  h1 {
    text-align: left;
  }
}

@media only screen and (min-width: 1200px) {
  .main h1 {
    font-size: 36px;
  }

  .main .green-dots li {
    flex-direction: column;
    margin: 0;
    max-width: 200px;
    text-align: center;
    font-size: 1.3rem;
    line-height: 1.4;
  }
  
  li::before {
      content: " ";
      background: rgb(70, 141, 115);
      display: block;
      min-width: 13px;
      min-height: 13px;
      border-radius: 50%;
      margin-right: 0.5rem;
      margin-bottom: 0.5rem;
  }

  .prosAndCons h1 {
    font-size: 34px;    
  }

  .prosAndCons img {
    height: 38px;
  }

  .alternative h4 {
    font-size: 23px;
  }

  .alternative h1 {
    font-size: 37px;
  }

  .analysis {
    margin-bottom: 100px;
    width: 60%;
  }

  .analysis h2 {
    line-height: 40px;
    margin: 1.5rem 1rem;
  }

  .analysis p {
    line-height: 27px;
  }
}

</style>