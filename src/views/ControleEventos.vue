<template>
  <div class="controle-eventos-card">
    <h2>Controle Festival - Participantes da Call</h2>
    <div class="controle-festival-image">
      <img src="/controle.png" alt="Controle Festival Discord Call" />
    </div>
    <p>Esta seção exibe os participantes da call do Discord durante os eventos, facilitando o acompanhamento da presença.</p>
  </div>
</template>

<script>
export default {
  name: 'ControleEventos'
}
</script>

<style scoped>
.controle-eventos-card {
  background: #f9fff0; /* fundo claro para cards */
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(164, 198, 57, 0.2); /* sombra verde suave */
  padding: 20px;
  margin-top: 20px;
  text-align: center;
}

h2 {
  color: #0b3d0b; /* verde escuro */
  margin-bottom: 15px;
}

.controle-festival-image img {
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}
</style>
