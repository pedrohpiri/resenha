<template>
  <div class="staff-info-card">
    <h2><font-awesome-icon icon="mask" /> MASCARA EQUIPE RESENHA</h2>
    <div class="mask-content">
      <img src="/mascara.png" alt="Máscara Equipe Resenha" />
      <div class="mask-details">
        <ul>
          <li><strong>Masculina:</strong> 248</li>
          <li><strong>Feminino:</strong> 247</li>
        </ul>
        <p><strong>USADA EM EVENTOS OU RESENHAS</strong></p>
      </div>
    </div>
    <h3>Hierarquia dos Eventos</h3>
    <div class="hierarquia-container">
      <ul>
        <li><font-awesome-icon icon="crown" class="icon adm-master-icon" /> <strong>ADM MASTER</strong> </li>
        <li><font-awesome-icon icon="crown" class="icon adm-icon" /> <strong>ADM</strong></li>
        <li><font-awesome-icon icon="hands-helping" class="icon responsavel-icon" /> <strong>RESPONSÁVEL</strong> </li>
        <li><font-awesome-icon icon="user-friends" class="icon auxiliares-icon" /> <strong>AUXILIARES</strong> </li>
        <li><font-awesome-icon icon="star" class="icon lideres-icon" /> <strong>LÍDERES</strong> </li>
        <li><font-awesome-icon icon="user-tie" class="icon sublideres-icon" /> <strong>SUB-LÍDERES</strong> </li>
        <li><font-awesome-icon icon="users" class="icon membros-icon" /> <strong>MEMBROS</strong> </li>
        <li><font-awesome-icon icon="user" class="icon membro-t-icon" /> <strong>MEMBRO T</strong> </li>
      </ul>
      <p>
        A hierarquia deve ser sempre respeitada nos eventos. Qualquer problema que envolva membros teste ou membros deve ser reportado primeiro ao sub-líder de eventos. Caso ele não consiga resolver ou não esteja presente, o próximo passo é procurar o líder. Se ainda assim não houver solução, deve-se recorrer ao AUX ou ao responsável da pasta de eventos. É <strong>estritamente proibido</strong> entrar em contato direto com o ADM da pasta, <strong>exceto em casos extremos</strong>. Seguir essa ordem garante organização e respeito entre todos.
      </p>
    </div>
  </div>

  <div class="resenha-equipe-card">
    <h3>Equipe Resenha</h3>
    <ul>
      <li><strong>Manter o servidor e o roleplay:</strong></li>
      <ul>
        <li>Assegurar que a experiência de jogo seja fluida, divertida e justa para todos os jogadores, mantendo os padrões de roleplay estabelecidos pelo servidor!</li>
      </ul>
      <li><strong>Função nas Resenhas e Eventos:</strong></li>
      <ul>
        <li>Além do som e do F3, devemos ter atenção ao zaralho e ajudar os novatos e guiá-los. Não brigue nem discuta, você é um staff agora e pode simplesmente jogar o zaralho praça ou dar um kick (em último caso).</li>
      </ul>
      <li><strong>Prestar suporte:</strong></li>
      <ul>
        <li>Ajudar os jogadores, responder a dúvidas e atender a chamados para resolução de problemas, demonstrando proatividade e disponibilidade!</li>
      </ul>
      <li><strong>Conduta Exemplar:</strong></li>
      <ul>
        <li>Ser um modelo de comportamento ético e profissional dentro e fora do servidor, influenciando positivamente a comunidade.</li>
      </ul>
      <li><strong>Abuso de Poder:</strong></li>
      <ul>
        <li>O abuso de poder pelos próprios staffs é uma violação das regras que pode levar a banimento permanente do servidor!</li>
      </ul>
      <li><strong>Presença na Call do Discord:</strong></li>
      <ul>
        <li>Call é sagrada! Acordou na cidade? Já entra na call. Fica com o microfone ligado (quando possível), participa! Sua voz faz a diferença!</li>
      </ul>
      <li><strong>Skin é identidade:</strong></li>
      <ul>
        <li>Nada de se setar skin do nada! Só Auxiliar ou Resp pode mexer nisso.</li>
      </ul>
      <li><strong>Lembre aí, hein:</strong></li>
      <ul>
Você agora é uma Figura Pública da cidade. Mantenha a postura, represente a Nossa família da Resenha, e bora viver o RP com estilo!
      </ul>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'StaffInfo'
}
</script>

<style scoped>
.staff-info-card {
  background: #f9fff0; /* fundo claro para cards */
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(164, 198, 57, 0.2); /* sombra verde suave */
  padding: 20px;
  margin-top: 20px;
}

@media (max-width: 768px) {
  .staff-info-card {
    padding: 15px;
    margin-top: 15px;
  }
}

@media (max-width: 480px) {
  .staff-info-card {
    padding: 10px;
    margin-top: 10px;
  }
}

h2 {
  color: #000000; /* preto */
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.mask-content {
  display: flex;
  gap: 20px;
  align-items: center;
  margin-bottom: 20px;
}

.mask-content img {
  max-width: 300px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

.mask-details ul {
  list-style: none;
  padding: 0;
  margin: 0 0 10px 0;
}

.mask-details li {
  font-weight: bold;
  margin-bottom: 5px;
}

.mask-details p {
  font-weight: normal;
  color: #444;
}

/* Media queries for responsiveness */
@media (max-width: 768px) {
  .mask-content {
    flex-direction: column;
    align-items: center;
  }

  .mask-content img {
    max-width: 200px;
  }

  .hierarquia-container {
    padding: 15px;
  }

  .hierarquia-container li {
    font-size: 0.9em;
  }
}

@media (max-width: 480px) {
  .mask-content img {
    max-width: 150px;
  }

  .hierarquia-container {
    padding: 10px;
  }

  .hierarquia-container li {
    font-size: 0.8em;
  }
}

h3 {
  margin-top: 30px;
  color: #000000; /* preto */
}
.hierarquia-container {
  background: #0b2e00; /* verde escuro */
  color: white;
  padding: 20px;
  border-radius: 12px;
  margin-top: 20px;
  box-shadow: 0 6px 15px rgba(11, 61, 11, 0.4); /* sombra verde */
}

.hierarquia-container ul {
  list-style: none;
  padding: 0;
  margin: 0 0 15px 0;
}

.hierarquia-container li {
  margin-bottom: 10px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
}

.role {
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 0.9em;
  font-weight: 700;
  color: white;
}

.adm {
  background: #ff4500;
}

.responsavel {
  background: #ffa500;
}

.auxiliar {
  background: #32cd32;
}

.lider {
  background: #1e90ff;
}

.sublider {
  background: #4cbb17; /* verde médio para sublíder */
}

.mention {
  background: #2f2f2f;
  padding: 4px 8px;
  border-radius: 6px;
  font-family: monospace;
  font-size: 0.85em;
  color: #d1d1d1;
}
.icon {
  margin-right: 8px;
  color: #ffd700;
}

.adm-icon {
  color: #ff4500;
}

.responsavel-icon {
  color: #ffa500;
}

.auxiliar-icon {
  color: #32cd32;
}

.lider-icon {
  color: #1e90ff;
}

.sublider-icon {
  color: #4cbb17; /* verde médio */
}
  </style>

  <style scoped>
  .resenha-equipe-card {
    background: #f0fff4;
    border-radius: 12px;
    box-shadow: 0 6px 15px rgba(57, 181, 74, 0.2);
    padding: 20px;
    margin-top: 30px;
    color: #1a3d1a;
  }

  .resenha-equipe-card h3 {
    margin-bottom: 15px;
    color: #2e7d32;
  }

  .resenha-equipe-card ul {
    list-style-type: disc;
    padding-left: 20px;
  }

  .resenha-equipe-card ul ul {
    list-style-type: circle;
    padding-left: 20px;
  }

  .resenha-equipe-card li {
    margin-bottom: 8px;
    font-weight: 500;
  }
  </style>
