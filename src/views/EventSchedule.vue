<template>
  <div class="schedule-card">
    <h2>Horários dos Eventos da Resenha</h2>
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
        { time: '02h30', event: 'Noite da perdição' },
        { time: '04h30', event: 'Rolê da madruga' },
        { time: '06h30', event: 'Cafénejo' },
        { time: '08h30', event: 'Festinha na city' },
        { time: '10h30', event: 'Trap do Amanhecer' },
        { time: '12h30', event: 'MC IG' },
        { time: '14h30', event: 'Barzinho do Omar' },
        { time: '16h30', event: 'Sunset Eletrônico' },
        { time: '18h30', event: 'Luau da Tarde' },
        { time: '20h30', event: 'Resenha Prime' },
        { time: '22h30', event: 'Cayo Perico' },
        { time: '00h30', event: 'Bailão da Noite' }
      ]
    }
  }
}
</script>

<style scoped>
.schedule-card {
  background: #fffacd; /* amarelo claro */
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(255, 204, 0, 0.2); /* sombra amarela suave */
  padding: 20px;
  margin-top: 20px;
}

h2 {
  color: #000000; /* preto */
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
  background-color: #ffcc00; /* amarelo vibrante */
  color: black;
  font-weight: 600;
}

.schedule-table tbody tr:nth-child(even) {
  background-color: #e6f2d9; /* fundo claro alternado */
}

.note {
  margin-top: 15px;
  font-size: 1em;
  color: #355e1a; /* verde médio */
  font-style: italic;
}
</style>
