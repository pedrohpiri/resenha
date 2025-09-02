<template>
  <div class="staff-age-card">
    <h2>Idade Mínima para Entrar na Staff</h2>
    <font-awesome-icon icon="user-shield" size="6x" class="staff-age-icon" />
    <p>
      Para garantir responsabilidade e um bom desempenho nas funções da nossa equipa, a idade mínima para integrar na STAFF da pasta de Eventos é de <strong>15 anos</strong>. Esta exigência visa assegurar que todos os membros tenham maturidade suficiente para colaborar de forma eficaz nas atividades e organização dos eventos.
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

  .staff-age-image {
  max-width: 200px;
  height: auto;
  margin: 15px 0;
  border-radius: 12px;
}

.staff-age-icon {
  color: #0b3d0b; /* verde escuro */
  margin: 15px 0;
}

.staff-age-card h2 {
  color: #0b3d0b; /* verde escuro */
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
