<template>
  <div class="commands-card">
    <h2>📝  Poderes Admin 5 📝</h2>
    <div class="commands-content">
      <pre class="commands-list">
god id - ( Revive o player )
god id p/pn/dp/mec/hp/hpn/praca - ( Manda o player para os locais: Pier Sul, Pier Norte, Departamento Policia, Mecanica, Hospital Sul, Hospital Norte e Praça )
nc - ( Fica invisivel para os players e voa )
wall - ( Vê o nome/vida/colete/set de players/source )
fix - ( Conserta o veiculo )
dv - ( Exclui veiculos proximos )
tpto id - ( Teleporta para o player )
tptome id - ( Puxa o player até você )
tpway - ( Se teleporta para o local marcado no mapa )
ugroups id - ( Verifica os poderes e grupos dos players )
qru - ( Mostra as áreas com disparos )
      </pre>
      <p>
        Os comandos da pasta Festival servem para organizar e controlar tudo durante a realização dos eventos do festival. São utilizados para puxar membros, iniciar, encerrar, dar avisos ou padronizar roupas. Apenas quem tem autorização pode usá-los.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Commands'
}
</script>

<style scoped>
h2 {
  color: #6b21a8;
  margin-bottom: 15px;
}
pre {
  background-color: #1e1e1e;
  color: #d4d4d4;
  padding: 15px;
  border-radius: 8px;
  overflow-x: auto;
  font-family: 'Courier New', Courier, monospace;
  white-space: pre-wrap;
  flex: 1 1 300px;
  max-width: 600px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

.commands-card {
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

.commands-content {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  flex-wrap: wrap;
}

.commands-content p {
  flex: 1 1 300px;
  font-size: 1em;
  color: #333;
  line-height: 1.4;
  margin: 0;
}

/* Media queries for responsiveness */
@media (max-width: 768px) {
  .commands-content {
    flex-direction: column;
  }

  pre {
    max-width: 100%;
  }

  .commands-content p {
    flex: 1 1 auto;
  }
}

@media (max-width: 480px) {
  pre {
    font-size: 0.8em;
    padding: 10px;
  }

  .commands-content p {
    font-size: 0.9em;
  }
}
</style>
