<template>
  <div class="alignment-card">
    <h2>Alinhamento Resenha</h2>
    <a href="https://docs.google.com/document/d/e/2PACX-1vRUQx4N7Lm6nOfvorc2w_9avhTtB7nLmy1AGnmtHEjy_JruYtg3YlQJnMzaVbNIvheKGxmAG6JRdz9X/pub" target="_blank" rel="noopener noreferrer" class="rules-link">
      <font-awesome-icon icon="external-link-alt" class="link-icon" />
      REGRAS GERAIS DA CIDADE GRANDE!
    </a>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faExternalLinkAlt)

export default {
  name: 'EventAlignment',
  components: {
    FontAwesomeIcon
  }
}
</script>

<style scoped>
.alignment-card {
  background: #fffacd; /* amarelo claro */
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(255, 204, 0, 0.2); /* sombra amarela suave */
  padding: 20px;
  margin-bottom: 20px;
  text-align: center;
}

.alignment-image {
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  margin-bottom: 15px;
}

h2 {
  color: #000000; /* preto */
  font-weight: 700;
  font-size: 2em;
}
.rules-link {
  color: #000000;
  font-weight: 600;
  font-size: 1.2em;
  text-decoration: none;
  display: inline-block;
  margin-top: 10px;
  transition: text-decoration 0.3s ease;
}
.rules-link:hover {
  text-decoration: underline;
}
.link-icon {
  margin-right: 6px;
  vertical-align: middle;
  color: #000000;
  font-size: 1em;
}
</style>
