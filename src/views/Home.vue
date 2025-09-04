<template>
  <div>
    <h1>Eventos FIVEMRP Cidade Grande</h1>
    <EventList />
  </div>
</template>

<script>
import EventList from '../components/EventList.vue'

export default {
  components: {
    EventList
  }
}
</script>

<style scoped>
h1 {
  color: #6b21a8;
  margin-bottom: 20px;
}

@media (max-width: 768px) {
  h1 {
    font-size: 1.8em;
    margin-bottom: 15px;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 1.5em;
    margin-bottom: 10px;
  }
}
</style>
