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
  color: #000000; /* preto */
  margin-bottom: 15px;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0 0 15px 0;
}

li {
  background: #fffacd; /* fundo amarelo claro */
  margin-bottom: 8px;
  padding: 10px 15px;
  border-radius: 8px;
  border-left: 4px solid #ffcc00; /* amarelo vibrante */
  font-weight: 600;
  color: #000000; /* texto preto */
}

li:nth-child(even) {
  background: #e6f2d9; /* fundo claro alternado */
}
</style>
