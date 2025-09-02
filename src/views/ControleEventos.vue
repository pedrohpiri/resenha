<template>
  <div class="controle-eventos-card">
    <h2>Controle Festival - Participantes da Call</h2>
    <div class="controle-festival-image">
      <img src="/controle.png" alt="Controle Festival Discord Call" />
    </div>
    <p>Esta seção exibe os participantes da call do Discord durante os eventos, facilitando o acompanhamento da presença.</p>

    <section class="funcoes-festival">
      <h3>Funções da Equipe Festival</h3>

      <div class="funcao">
        <h4>Resp Festival</h4>
        <ul>
          <li>Administra toda a estrutura da equipe</li>
          <li>Supervisionar toda a pasta e cobrar resultados.</li>
          <li>Validar ou bloquear novos membros, promoções e saídas.</li>
          <li>Cuidar da imagem da pasta (qualidade, organização, disciplina)</li>
          <li>Garantir que o cronograma, divulgação e engajamento estejam rodando.</li>
          <li>Conferir e atualizar todos o dias a planilha de membros</li>
          <li>Criar metas e recompensar para manter a pasta engajada.</li>
          <li>Organizar mini reuniões semanais ou drop de recados para manter todo mundo sempre alinhado.</li>
          <li>Conferir sempre se todos o cargos, calls, membros, discord, estão funcionando de forma correta.</li>
        </ul>
      </div>

      <div class="funcao">
        <h4>Aux Festival</h4>
        <ul>
          <li>Apoio estratégico da liderança e responsável por manter o padrão da pasta</li>
          <li>Acompanhar a execução dos eventos e corrigir falhas, feedbacks após evento (principalmente baladas)</li>
          <li>Fazer ou supervisionar alinhamentos.</li>
          <li>Avaliar desempenho com base em presença, engajamento e qualidade das funções.</li>
          <li>Ajudar a manter o padrão da pasta (postura, criatividade e frequência).</li>
          <li>Atualizar todos os dias a planilha de desempenho e controle de membros.</li>
          <li>Ajudar na criação de metas e recompensas para engajar os membros da pasta.</li>
        </ul>
      </div>

      <div class="funcao">
        <h4>Líder Festival</h4>
        <ul>
          <li>Comanda a equipe das festas, organiza eventos e cronogramas.</li>
          <li>Criar o cronograma de festas da semana.</li>
          <li>Conferir sempre presença call.</li>
          <li>Criar os chamados principais, ensinar auxiliar os fst e fst-t a criar chamados para festas.</li>
          <li>Coordenar a equipe no dia do evento.</li>
          <li>Participar da avaliação de desempenho.</li>
          <li>Identificar quem está engajado ou ausente para repassar aos aux e resp.</li>
          <li>Fazer alinhamentos</li>
        </ul>
      </div>

      <div class="funcao">
        <h4>Sub Líder Festival</h4>
        <ul>
          <li>Suporte direto ao líder, organiza e supervisiona os membros</li>
          <li>Supervisionar presenças e atividade/funções dos fst e fst-t.</li>
          <li>Ajudar na criação de chamados mais elaborados e ideias para cronogramas.</li>
          <li>Auxiliar o recrutamento e fazer Alinhamento.</li>
          <li>Delegar funções (f3, som, az), auxiliar e ensinar os fst e fst-t.</li>
          <li>Ativar call e fazer f1 (dar tp nos membros).</li>
        </ul>
      </div>

      <div class="funcao">
        <h4>Membro Festival</h4>
        <ul>
          <li>Parte ativa da equipe, já com função definida</li>
          <li>Participar ativamente de eventos e estar presente nas calls obrigatórias.</li>
          <li>Pricipal: Anti-zaralho | F3 e Som (caso não tenha fst-t pra puxar)</li>
          <li>Ajudar na organização básica do evento. (baladas)</li>
          <li>Divulgação (fazendo chamados para o chat geral).</li>
          <li>Fazer presença call.</li>
          <li>Fazer recrutamento.</li>
        </ul>
      </div>

      <div class="funcao">
        <h4>Festival Teste</h4>
        <ul>
          <li>Avaliado pela presença, vontade, disciplina e desenvolvimento na pasta.</li>
          <li>Participar ativamente dos eventos (F3/Som/AZ)</li>
          <li>Treinar como fazer divulgação e presença call.</li>
          <li>Ajudar no recrutamento.</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserShield, faHandsHelping, faCrown, faUserTie, faUsers, faUserCheck } from '@fortawesome/free-solid-svg-icons'

library.add(faUserShield, faHandsHelping, faCrown, faUserTie, faUsers, faUserCheck)

export default {
  name: 'ControleEventos',
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      icons: {
        resp: faUserShield,
        aux: faHandsHelping,
        lider: faCrown,
        sublider: faUserTie,
        membro: faUsers,
        teste: faUserCheck
      }
    }
  }
}
</script>

<style scoped>
.controle-eventos-card {
  background: #f9fff0; /* fundo claro para cards */
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(164, 198, 57, 0.2); /* sombra verde suave */
  padding: 20px;
  margin-top: 20px;
  text-align: center;
}

h2 {
  color: #0b3d0b; /* verde escuro */
  margin-bottom: 15px;
}

.controle-festival-image img {
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}
</style>
