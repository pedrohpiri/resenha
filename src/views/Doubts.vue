<template>
  <div class="doubts-card">
    <font-awesome-icon icon="question-circle" size="6x" class="doubts-icon" />
    <p class="doubts-text">
      Se tiver qualquer dúvida sobre eventos, comandos ou regras, não hesite em perguntar! Estamos aqui para ajudar e garantir que tudo funcione da melhor forma possível.
    </p>
  </div>
</template>

<script>
export default {
  name: 'Doubts'
}
</script>

<style scoped>
.doubts-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0,0,0,0.1);
  padding: 20px;
  margin-top: 20px;
  text-align: center;
}

.doubts-icon {
  color: #6b21a8;
  margin-bottom: 15px;
}

.doubts-text {
  font-size: 1.1em;
  color: #333;
  line-height: 1.4;
}
</style>
