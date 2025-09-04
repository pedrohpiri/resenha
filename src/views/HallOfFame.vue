<template>
  <div class="halloffame-card">
    <h2>Print de Presença</h2>
    <div class="halloffame-content">
      <div class="halloffame-section">
        <img src="/presenca.png" alt="Print de Presença" class="halloffame-image" />
        <h3>Participação Oficial</h3>
        <p>
          Esta seção exibe os prints oficiais de presença dos eventos realizados. Serve para registrar e comprovar a participação dos membros, facilitando a organização e controle da equipe.
        </p>
      </div>
      <div class="halloffame-section">
        <h3>Presença Call</h3>
        <img src="/presencacall.png" alt="Exemplo de Presença Call" class="halloffame-image" />
        <pre class="halloffame-call-text">
EXEMPLO DE PRESENÇA CALL
(NOME DA FESTA)

HORARIO:
F3: 
SOM:
AZ: 
(PRINT DA CALL DO DC)
        </pre>
      </div>
    </div>
    <p class="halloffame-footer-text">
      A presença na call é fundamental, pois é a partir dela que conseguimos avaliar o desempenho semanalmente.
    </p>
  </div>
</template>

<script>
export default {
  name: 'HallOfFame'
}
</script>

<style scoped>
.halloffame-card {
  background: #f9fff0;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(164, 198, 57, 0.2);
  padding: 30px 40px;
  margin-top: 30px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #355e1a;
}

h2 {
  color: #0b3d0b;
  margin-bottom: 25px;
  font-weight: 700;
  font-size: 2em;
  text-shadow: 0 0 8px #a4c639;
}

.halloffame-content {
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
}

.halloffame-section {
  flex: 1 1 45%;
  min-width: 320px;
  max-width: 48%;
  background: #e6f0c3;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(164, 198, 57, 0.3);
}

.halloffame-section h3 {
  color: #a4c639;
  font-weight: 700;
  font-size: 1.4em;
  margin-bottom: 15px;
  text-shadow: 0 0 5px #a4c639;
}

.halloffame-image {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  margin-bottom: 15px;
}

.halloffame-section p {
  font-size: 1.1em;
  line-height: 1.6;
  color: #3a5a1a;
}

.halloffame-call-text {
  font-family: monospace;
  font-weight: bold;
  white-space: pre-line;
  font-size: 1.1em;
  color: #3a5a1a;
  background: #d9e6b8;
  padding: 15px;
  border-radius: 8px;
  box-shadow: inset 0 0 5px #a4c639;
  margin-top: 0;
}

.halloffame-footer-text {
  margin-top: 30px;
  font-weight: 600;
  font-size: 1.2em;
  color: #355e1a;
  text-align: center;
}
</style>
