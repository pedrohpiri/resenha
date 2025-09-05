<template>
  <div class="staff-age-card">
    <h2>Idade Mínima para Entrar na Staff</h2>
    <font-awesome-icon icon="user-shield" size="6x" class="staff-age-icon" />
    <p>
      Para garantir responsabilidade e um bom desempenho nas funções da nossa equipa, a idade mínima para integrar na STAFF da pasta de Eventos é de <strong>16 anos</strong>. Esta exigência visa assegurar que todos os membros tenham maturidade suficiente para colaborar de forma eficaz nas atividades e organização dos eventos.
    </p>
  </div>
</template>

<script>
export default {
  name: 'StaffAge'
}
</script>

<style scoped>
.staff-age-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0,0,0,0.1);
  padding: 20px;
  margin-top: 20px;
  text-align: center;
}

@media (max-width: 768px) {
  .staff-age-card {
    padding: 15px;
    margin-top: 15px;
  }

  .staff-age-card h2 {
    font-size: 1.5em;
  }

  .staff-age-card p {
    font-size: 1em;
  }
}

@media (max-width: 480px) {
  .staff-age-card {
    padding: 10px;
    margin-top: 10px;
  }

  .staff-age-card h2 {
    font-size: 1.3em;
  }

  .staff-age-card p {
    font-size: 0.9em;
  }
}

  .staff-age-image {
  max-width: 200px;
  height: auto;
  margin: 15px 0;
  border-radius: 12px;
}

.staff-age-icon {
  color: #ffcc00; /* amarelo vibrante */
  margin: 15px 0;
}

.staff-age-card h2 {
  color: #000000; /* preto */
  font-weight: 700;
  font-size: 2em;
  margin-bottom: 10px;
}

.staff-age-card p {
  font-size: 1.1em;
  color: #333;
  line-height: 1.4;
}
</style>
