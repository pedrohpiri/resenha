# Festival Dashboard

Este é um painel de controle para a equipe Festival do servidor FIVEMRP Cidade Grande. O projeto é uma aplicação Vue.js que fornece informações organizacionais, hierarquia, comandos, eventos e outras funcionalidades essenciais para a gestão da pasta Festival.

## Funcionalidades

- **Alinhamento Festival**: Informações sobre alinhamentos e organização de eventos.
- **Staff**: Detalhes sobre a equipe, hierarquia e responsabilidades.
- **Comandos**: Lista de comandos administrativos e suas funções.
- **Print Presença**: Sistema de presença para eventos.
- **Avisos**: Canal de avisos importantes da pasta.
- **Horários**: Cronograma de eventos da semana.
- **Mundos**: Lista de mundos disponíveis no servidor.
- **Controle Eventos**: Funções e responsabilidades da equipe Festival.
- **Logs Discord**: Logs de atividades no Discord.
- **Dúvidas**: Seção para esclarecer dúvidas frequentes.

## Tecnologias Utilizadas

- **Vue.js 3**: Framework JavaScript para construção da interface.
- **Vue Router**: Para navegação entre páginas.
- **FontAwesome**: Ícones utilizados na interface.
- **CSS3**: Estilização responsiva com media queries.
- **Vite**: Ferramenta de build e desenvolvimento.

## Responsividade

O projeto foi otimizado para dispositivos móveis e tablets, com media queries para diferentes tamanhos de tela:
- Desktop: > 1024px
- Tablet: 768px - 1024px
- Mobile: < 768px
- Small Mobile: < 480px

## Instalação e Execução

1. Clone o repositório:
```bash
git clone https://github.com/pedrohpiri/festival.git
cd festival
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

4. Acesse no navegador: `http://localhost:5173`

## Build para Produção

```bash
npm run build
```

## Deploy

O projeto está configurado para deploy automático no Vercel. Após push para a branch main, o deploy é feito automaticamente.

## Estrutura do Projeto

```
src/
├── components/
│   ├── Footer.vue
│   └── EventList.vue
├── views/
│   ├── Home.vue
│   ├── StaffInfo.vue
│   ├── Commands.vue
│   ├── ControleEventos.vue
│   ├── HallOfFame.vue
│   ├── Notices.vue
│   ├── Worlds.vue
│   └── ...
├── App.vue
└── main.js
```

## Contribuição

Para contribuir com o projeto:
1. Faça um fork do repositório
2. Crie uma branch para sua feature: `git checkout -b feature/nova-feature`
3. Commit suas mudanças: `git commit -m 'Adiciona nova feature'`
4. Push para a branch: `git push origin feature/nova-feature`
5. Abra um Pull Request

## Licença

Este projeto é propriedade da equipe Festival - Cidade Grande.

## Desenvolvedor

Desenvolvido por PH Id: 8493
