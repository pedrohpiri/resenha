<template>
  <header>
    <nav>
      <ul>
        <!-- Menu removido pois o projeto é de página única -->
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
header {
  background-color: #6b21a8;
  padding: 10px 20px;
  color: white;
}
nav ul {
  list-style: none;
  display: flex;
  gap: 15px;
  margin: 0;
  padding: 0;
}
nav ul li a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}
nav ul li a.router-link-exact-active {
  text-decoration: underline;
}
</style>
