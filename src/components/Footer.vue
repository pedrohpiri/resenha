<template>
  <footer>
    <p>© 2025 Cidade Grande - Pasta de Festival. DEV por PH Id: 8493</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
footer {
  background-color: #000000; /* preto */
  color: #ffcc00; /* amarelo */
  text-align: center;
  padding: 15px 0;
  margin-top: 40px;
  font-size: 14px;
}

@media (max-width: 768px) {
  footer {
    padding: 12px 0;
    margin-top: 30px;
    font-size: 13px;
  }
}

@media (max-width: 480px) {
  footer {
    padding: 10px 0;
    margin-top: 20px;
    font-size: 12px;
  }
}
</style>
