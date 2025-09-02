<template>
  <div class="schedule-card">
    <h2>Horários dos Eventos do Festival</h2>
    <table class="schedule-table">
      <thead>
        <tr>
          <th>Hora</th>
          <th>Evento</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in schedule" :key="index">
          <td>{{ row.time }}</td>
          <td>{{ row.event }}</td>
        </tr>
      </tbody>
    </table>
    <p class="note">
      Nossos eventos acontecem em dias e horários fixos para que todos possam participar! Todos os horários seguem o fuso de Brasília (BRT).
    </p>
  </div>
</template>

<script>
export default {
  name: 'EventSchedule',
  data() {
    return {
      schedule: [
        { time: '01h30', event: 'Noite da perdição' },
        { time: '03h30', event: 'Rolê da madruga' },
        { time: '05H30', event: 'Cafénejo' },
        { time: '07h30', event: 'Festinha na city' },
        { time: '09h30', event: 'Trap do Amanhecer' },
        { time: '11h30', event: 'MC IG' },
        { time: '13h30', event: 'Barzinho do Omar' },
        { time: '15h30', event: 'Sunset Eletrônico' },
        { time: '17h30', event: 'Luau da Tarde' },
        { time: '19h30', event: 'Resenha Prime' },
        { time: '21h30', event: 'Cayo Perico' },
        { time: '23h30', event: 'Bailão da Noite' }
      ]
    }
  }
}
</script>

<style scoped>
.schedule-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0,0,0,0.1);
  padding: 20px;
  margin-top: 20px;
}

h2 {
  color: #6b21a8;
  margin-bottom: 15px;
  font-weight: 700;
  font-size: 1.8em;
  display: flex;
  align-items: center;
  gap: 10px;
}

.schedule-table {
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  font-size: 1em;
}

.schedule-table th,
.schedule-table td {
  border: 1px solid #ddd;
  padding: 10px;
}

.schedule-table th {
  background-color: #5a2d82;
  color: white;
  font-weight: 600;
}

.schedule-table tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}

.note {
  margin-top: 15px;
  font-size: 1em;
  color: #333;
  font-style: italic;
}
</style>
