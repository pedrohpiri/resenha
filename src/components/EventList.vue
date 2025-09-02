<template>
  <div>
    <h2>Eventos da Semana</h2>
    <ul>
      <li v-for="event in events" :key="event.id">
        <router-link :to="'/event/' + event.id">{{ event.name }} - {{ event.day }} {{ event.time }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'EventList',
  data() {
    return {
      events: [
        { id: 1, name: 'Cante ou Morra', day: 'Segunda', time: '12:30' },
        { id: 2, name: 'Briga de Bar', day: 'Segunda', time: '13:30' },
        { id: 3, name: 'Roleta Russa', day: 'Quarta', time: '12:30' },
        { id: 4, name: 'Vingança dos Players', day: 'Quinta', time: '12:30' },
        { id: 5, name: 'Battle Royale', day: 'Domingo', time: '23:30' }
        // Adicione mais eventos conforme necessário
      ]
    }
  }
}
</script>

<style scoped>
h2 {
  color: #6b21a8;
  margin-bottom: 10px;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  margin-bottom: 8px;
}
a {
  color: #4c1d95;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>
