<template>
  <div class="halloffame-card">
    <h2>Print de Presença</h2>
    <div class="halloffame-content">
      <img src="/presenca.png" alt="Print de Presença" />
      <div class="halloffame-text">
        <h3>Participação Oficial</h3>
        <p>
          Esta seção exibe os prints oficiais de presença dos eventos realizados. Serve para registrar e comprovar a participação dos membros, facilitando a organização e controle da equipe.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HallOfFame'
}
</script>

<style scoped>
.halloffame-card {
  background: #f9fff0; /* fundo claro para cards */
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(164, 198, 57, 0.2); /* sombra verde suave */
  padding: 20px;
  margin-top: 20px;
}

h2 {
  color: #0b3d0b; /* verde escuro */
  margin-bottom: 15px;
}

.halloffame-content {
  display: flex;
  gap: 20px;
  align-items: center;
}

.halloffame-content img {
  max-width: 600px;
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

.halloffame-text h3 {
  color: #a4c639; /* verde vibrante */
  margin-bottom: 10px;
  font-weight: 700;
  text-shadow: 0 0 5px #a4c639;
}

.halloffame-text p {
  font-size: 1em;
  color: #355e1a; /* verde médio para texto */
  line-height: 1.4;
}
</style>
