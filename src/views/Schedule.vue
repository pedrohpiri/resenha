<template>
  <div class="schedule-card">
  </div>
</template>

<script>
export default {
  name: 'Schedule'
}
</script>

<style scoped>
h2 {
  color: #0b3d0b; /* verde escuro */
  margin-bottom: 15px;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0 0 15px 0;
}

li {
  background: #f9fff0; /* fundo claro */
  margin-bottom: 8px;
  padding: 10px 15px;
  border-radius: 8px;
  border-left: 4px solid #a4c639; /* verde vibrante */
  font-weight: 600;
  color: #0b3d0b; /* texto verde escuro */
}

li:nth-child(even) {
  background: #e6f2d9; /* fundo claro alternado */
}
</style>
