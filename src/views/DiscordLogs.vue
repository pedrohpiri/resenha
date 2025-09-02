<template>
  <div class="discord-card">
    <h2><font-awesome-icon icon="link" /> Link de Logs Discord Grande</h2>
    <p><strong>Convite:</strong></p>
    <p><a href="https://discord.gg/emr9Untt" target="_blank" rel="noopener noreferrer">discord.gg/emr9Untt</a></p>
    <div class="discord-info">
      <p><strong>Sobre os "Logs" no Discord</strong></p>
      <ul>
        <li><strong>Logs</strong> = histórico de mensagens, ações e eventos dentro do servidor.</li>
        <li>Só são visíveis para <strong>moderadores/admins</strong> com permissão.</li>
        <li>Podem incluir:
          <ul>
            <li>Mensagens deletadas</li>
            <li>Entradas e saídas de membros</li>
            <li>Ações de moderação (banimentos, avisos etc.)</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DiscordLogs'
}
</script>

<style scoped>
.discord-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0,0,0,0.1);
  padding: 20px;
  margin-top: 20px;
}

h2 {
  color: #6b21a8;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
}

a {
  color: #3b82f6;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1em;
}

a:hover {
  text-decoration: underline;
}

.discord-info {
  margin-top: 15px;
  font-size: 1em;
  color: #333;
}

.discord-info ul {
  padding-left: 20px;
}

.discord-info li {
  margin-bottom: 8px;
}
</style>
