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
  background: #fffacd; /* amarelo claro */
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(255, 204, 0, 0.2); /* sombra amarela */
  padding: 30px 40px;
  margin-top: 30px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333300; /* amarelo escuro */
}

h2 {
  color: #000000; /* preto */
  margin-bottom: 25px;
  font-weight: 700;
  font-size: 2em;
  text-shadow: 0 0 8px #ffcc00; /* sombra amarela */
}

.halloffame-content {
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
}

/* Responsividade para dispositivos móveis */
@media (max-width: 768px) {
  .halloffame-content {
    flex-direction: column;
    gap: 30px;
  }

  .halloffame-section {
    max-width: 100%;
    min-width: auto;
  }
}

@media (max-width: 480px) {
  .halloffame-card {
    padding: 20px 15px;
  }

  h2 {
    font-size: 1.5em;
  }

  .halloffame-section h3 {
    font-size: 1.2em;
  }

  .halloffame-section p,
  .halloffame-call-text {
    font-size: 1em;
  }

  .halloffame-footer-text {
    font-size: 1em;
    margin-top: 20px;
  }
}

.halloffame-section {
  flex: 1 1 45%;
  min-width: 320px;
  max-width: 48%;
  background: #fffacd; /* amarelo claro */
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(255, 204, 0, 0.3); /* sombra amarela */
}

.halloffame-section h3 {
  color: #ffcc00; /* amarelo vibrante */
  font-weight: 700;
  font-size: 1.4em;
  margin-bottom: 15px;
  text-shadow: 0 0 5px #ffcc00;
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
  color: #333300; /* amarelo escuro */
}

.halloffame-call-text {
  font-family: monospace;
  font-weight: bold;
  white-space: pre-line;
  font-size: 1.1em;
  color: #333300; /* amarelo escuro */
  background: #fffacd; /* amarelo claro */
  padding: 15px;
  border-radius: 8px;
  box-shadow: inset 0 0 5px #ffcc00; /* sombra amarela */
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
