<template>
  <div>
    <h2>Detalhes do Evento</h2>
    <div v-if="event">
      <h3>{{ event.name }}</h3>
      <p><strong>Dia:</strong> {{ event.day }}</p>
      <p><strong>Horário:</strong> {{ event.time }}</p>
      <p><strong>Descrição:</strong> {{ event.description }}</p>
      <p><strong>Comandos:</strong></p>
      <ul>
        <li v-for="command in event.commands" :key="command">{{ command }}</li>
      </ul>
    </div>
    <div v-else>
      <p>Evento não encontrado.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventDetails',
  props: ['id'],
  data() {
    return {
      events: [
        {
          id: '1',
          name: 'Cante ou Morra',
          day: 'Segunda',
          time: '12:30',
          description: 'Evento musical para animar a cidade.',
          commands: ['puxar membros', 'iniciar', 'encerrar']
        },
        {
          id: '2',
          name: 'Briga de Bar',
          day: 'Segunda',
          time: '13:30',
          description: 'Luta entre jogadores no bar.',
          commands: ['puxar membros', 'iniciar', 'encerrar']
        },
        {
          id: '3',
          name: 'Roleta Russa',
          day: 'Quarta',
          time: '12:30',
          description: 'Evento de risco onde os participantes jogam roleta russa.',
          commands: ['puxar membros', 'iniciar', 'encerrar']
        },
        {
          id: '4',
          name: 'Vingança dos Players',
          day: 'Quinta',
          time: '12:30',
          description: 'Evento de vingança entre jogadores.',
          commands: ['puxar membros', 'iniciar', 'encerrar']
        },
        {
          id: '5',
          name: 'Battle Royale',
          day: 'Domingo',
          time: '23:30',
          description: 'Evento de batalha real entre todos os participantes.',
          commands: ['puxar membros', 'iniciar', 'encerrar']
        }
      ],
      event: null
    }
  },
  created() {
    this.event = this.events.find(e => e.id === this.id)
  }
}
</script>

<style scoped>
h2 {
  color: #6b21a8;
  margin-bottom: 15px;
}
</style>
