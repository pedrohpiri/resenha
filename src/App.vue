<template>
  <div id="app">
    <nav class="menu">
      <a href="#eventalignment"><font-awesome-icon icon="house" /> Alinhamento Resenha</a>
      <a href="#staff"><font-awesome-icon icon="users" /> Staff</a>
      <a href="#commands"><font-awesome-icon icon="terminal" /> Comandos</a>
<a href="#halloffame"><font-awesome-icon icon="trophy" /> Print Presença</a>
      <a href="#notices"><font-awesome-icon icon="bell" /> Avisos</a>
      <a href="#eventschedule"><font-awesome-icon icon="clock" /> Horários</a>
      <a href="#worlds"><font-awesome-icon icon="link" /> Mundos</a>
      <a href="#controleeventos"><font-awesome-icon icon="link" /> Controle Eventos</a>
      <a href="#discordlogs"><font-awesome-icon icon="link" /> Logs Discord</a>
      <a href="#doubts"><font-awesome-icon icon="link" /> Dúvidas</a>
    </nav>

    <section id="eventalignment" class="card">
      <EventAlignment />
    </section>

    <section id="staffage" class="card">
      <StaffAge />
    </section>

    <section id="staff" class="card">
      <StaffInfo />
    </section>

    <section id="controleeventos" class="card">
      <ControleEventos />
    </section>

    <section id="halloffame" class="card">
      <HallOfFame />
    </section>

    <section id="commands" class="card">
      <Commands />
    </section>

    <section id="worlds" class="card">
      <Worlds />
    </section>

    <section id="notices" class="card">
      <Notices />
    </section>

    <section id="eventschedule" class="card">
      <EventSchedule />
    </section>

    <section id="discordlogs" class="card">
      <DiscordLogs />
    </section>

    <section id="doubts" class="card">
      <Doubts />
    </section>

    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import EventAlignment from './views/EventAlignment.vue'
import StaffAge from './views/StaffAge.vue'
import Home from './views/Home.vue'
import StaffInfo from './views/StaffInfo.vue'
import Commands from './views/Commands.vue'
import HallOfFame from './views/HallOfFame.vue'
import Notices from './views/Notices.vue'
import Schedule from './views/Schedule.vue'
import Worlds from './views/Worlds.vue'
import ControleEventos from './views/ControleEventos.vue'
import EventSchedule from './views/EventSchedule.vue'
import DiscordLogs from './views/DiscordLogs.vue'
import Doubts from './views/Doubts.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHouse, faUsers, faTerminal, faTrophy, faBell, faClock, faLink } from '@fortawesome/free-solid-svg-icons'

library.add(faHouse, faUsers, faTerminal, faTrophy, faBell, faClock, faLink)

export default {
  components: {
    Header,
    Footer,
    EventAlignment,
    StaffAge,
    Home,
    StaffInfo,
    Commands,
    Worlds,
    ControleEventos,
    EventSchedule,
    DiscordLogs,
    Doubts,
    HallOfFame,
    Notices,
    Schedule,
    FontAwesomeIcon
  }
}
</script>

<style>
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #fff8dc; /* fundo amarelo claro (cornsilk) */
  color: #000000; /* texto preto */
}

#app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.menu {
  background-color: #ffcc00; /* amarelo vibrante */
  padding: 12px 20px;
  display: flex;
  gap: 20px;
  justify-content: center;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(255, 204, 0, 0.3); /* sombra amarela */
  flex-wrap: wrap;
}

.menu a {
  color: #000000; /* texto preto */
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1em;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: color 0.3s ease;
}

.menu a:hover {
  color: #333300; /* amarelo escuro para hover */
}

.card {
  margin-top: 40px;
  padding: 25px 30px;
  background-color: #fffacd; /* fundo amarelo claro (lemon chiffon) */
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(255, 204, 0, 0.2); /* sombra amarela suave */
  transition: box-shadow 0.3s ease;
}

.card:hover {
  box-shadow: 0 10px 25px rgba(255, 204, 0, 0.3);
}

section h2 {
  color: #000000; /* texto preto */
  margin-bottom: 15px;
  font-weight: 700;
  font-size: 1.8em;
}

section p {
  line-height: 1.6;
  font-size: 1.05em;
  color: #666600; /* amarelo escuro para texto secundário */
}

img {
  transition: transform 0.3s ease;
  cursor: pointer;
}

img:hover {
  transform: scale(1.2);
  z-index: 10;
  position: relative;
}



/* Media queries for responsiveness */
@media (max-width: 1024px) {
  #app {
    padding: 15px;
  }

  .menu {
    gap: 15px;
  }

  .menu a {
    font-size: 1em;
  }

  .card {
    padding: 20px 25px;
  }

  section h2 {
    font-size: 1.6em;
  }
}

@media (max-width: 768px) {
  #app {
    padding: 10px;
  }

  .menu {
    padding: 10px;
    gap: 10px;
    justify-content: space-around;
  }

  .menu a {
    font-size: 0.9em;
    padding: 5px 10px;
  }

  .card {
    padding: 15px 20px;
    margin-top: 30px;
  }

  section h2 {
    font-size: 1.5em;
  }

  section p {
    font-size: 1em;
  }
}

@media (max-width: 480px) {
  .menu {
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }

  .menu a {
    font-size: 0.8em;
    width: 100%;
    justify-content: center;
  }

  .card {
    padding: 10px 15px;
    margin-top: 20px;
  }

  section h2 {
    font-size: 1.3em;
  }

  section p {
    font-size: 0.95em;
  }
}
</style>
