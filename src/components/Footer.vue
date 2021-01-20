<template>
  <footer>
    <div class="top">
      <h5>Política de Privacidade</h5>
      <h5>Termos de Serviço</h5>
    </div>
    <p>Plusdin©  2019 - Todos os Direitos Reservados</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
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
</style>