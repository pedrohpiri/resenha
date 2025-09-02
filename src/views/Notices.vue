<template>
  <div>
    <h2>Canal de Avisos</h2>
    <p>
      É muito importante verificar o canal de <strong>avisos</strong> com regularidade. Informações importantes, reuniões, mudanças e decisões da pasta são sempre postadas lá.
    </p>
    <font-awesome-icon :icon="['fab', 'discord']" size="6x" style="margin-top: 10px; color: #5865F2;" />
  </div>
</template>

<script>
export default {
  name: 'Notices'
}
</script>

<style scoped>
h2 {
  color: #0b3d0b; /* verde escuro */
  margin-bottom: 15px;
}
img {
  border-radius: 8px;
}
</style>
