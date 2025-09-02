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
  color: #6b21a8;
  margin-bottom: 15px;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0 0 15px 0;
}

li {
  background: #f9f9f9;
  margin-bottom: 8px;
  padding: 10px 15px;
  border-radius: 8px;
  border-left: 4px solid #6b21a8;
  font-weight: 600;
  color: #333;
}

li:nth-child(even) {
  background: #f0f0f5;
}
</style>
