<template>
  <div class="worlds-card">
    <h2>Mundos Disponíveis</h2>
    <div class="worlds-content">
      <ul class="worlds-list">
        <li v-for="world in worlds" :key="world.name" class="world-item" :title="world.name">
          <font-awesome-icon :icon="world.icon" class="icon" />
          {{ world.name }}
        </li>
      </ul>
      <div class="worlds-info">
        <p>
          Eventos que são feitos ao decorrer do dia puxados do F3 devem ser obrigatoriamente realizados no <em>mundo evento</em>.
        </p>
        <div class="command-highlight">
          <font-awesome-icon icon="lightbulb" class="icon" /> <strong>Comando útil:</strong>
          <p>
            <code>mundoarea 10 evento</code> - O número <code>10</code> é apenas um exemplo de distância (pode ser de <code>0</code> a <code>100</code>). Esse comando envia todas as pessoas no <strong>raio de distância X</strong> para o <strong>mundo desejado</strong>, podendo ser qualquer um dos listados acima.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Worlds',
  data() {
    return {
      worlds: [
        { name: 'mundo padrão', icon: 'globe' },
        { name: 'mundo evento', icon: 'calendar-check' },
        { name: 'mundo guerra', icon: 'shield-alt' },
        { name: 'mundo dominação', icon: 'flag' },
        { name: 'mundo tóxico', icon: 'biohazard' },
        { name: 'mundo testdrive', icon: 'car' },
        { name: 'mundo farme', icon: 'seedling' },
        { name: 'mundo fotografia', icon: 'camera' },
        { name: 'mundo royale', icon: 'crown' },
        { name: 'mundo primário', icon: 'star' },
        { name: 'mundo secundário', icon: 'star-half-alt' },
        { name: 'mundo terciário', icon: 'star-half-alt' },
        { name: 'mundo 1 até 999', icon: 'hashtag' }
      ]
    }
  }
}
</script>

<style scoped>
.worlds-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0,0,0,0.1);
  padding: 20px;
  margin-top: 20px;
}

h2 {
  color: #6b21a8;
  margin-bottom: 15px;
}

.worlds-content {
  display: flex;
  gap: 40px;
  align-items: flex-start;
  flex-wrap: wrap;
  border-top: 1px solid #ccc;
  padding-top: 20px;
}

.worlds-list {
  list-style: none;
  padding: 0;
  margin: 0;
  flex: 1 1 300px;
}

.worlds-list li {
  margin-bottom: 10px;
  font-size: 1em;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: default;
  transition: color 0.3s ease;
}

.worlds-list li:hover {
  color: #6b21a8;
}

.icon {
  color: #1e90ff;
  transition: color 0.3s ease;
}

.worlds-list li:hover .icon {
  color: #6b21a8;
}

.worlds-info {
  flex: 1 1 300px;
  font-size: 1em;
  color: #333;
  line-height: 1.4;
  border-left: 1px solid #ccc;
  padding-left: 20px;
}

.worlds-info p {
  margin-bottom: 15px;
}

.command-highlight {
  background-color: #f3f4f6;
  border-left: 4px solid #6b21a8;
  padding: 10px 15px;
  border-radius: 4px;
  margin-top: 10px;
}

code {
  background: #e0e7ff;
  padding: 2px 6px;
  border-radius: 4px;
  font-family: monospace;
  color: #3730a3;
}
</style>
