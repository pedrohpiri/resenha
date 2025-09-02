<template>
  <div class="alignment-card">
    <h2>Alinhamento Festival</h2>
  </div>
</template>

<script>
export default {
  name: 'EventAlignment'
}
</script>

<style scoped>
.alignment-card {
  background: #a4c639; /* verde vibrante da imagem */
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0, 80, 0, 0.2); /* sombra verde escuro sutil */
  padding: 20px;
  margin-bottom: 20px;
  text-align: center;
}

.alignment-image {
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  margin-bottom: 15px;
}

h2 {
  color: #0b3d0b; /* verde escuro para contraste */
  font-weight: 700;
  font-size: 2em;
}
</style>
