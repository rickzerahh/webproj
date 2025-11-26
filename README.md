Portfólio + Jogo da Forca — React Native + Expo

Este projeto é um currículo/portfólio interativo desenvolvido em React Native com Expo, contendo diversas telas apresentando informações acadêmicas, profissionais, projetos e um jogo da forca totalmente jogável dentro do app, como solicitado nos requisitos da disciplina.

📌 Tecnologias Utilizadas
🧩 Frameworks e Ferramentas

React Native

Expo

Expo Router (navegação entre telas)

Expo CLI

React Hooks

🎨 Estilização

StyleSheet nativo

Componentes reutilizáveis (Navbar, SectionTitle etc.)

🧱 Estrutura e Componentização

App dividido em telas usando Expo Router

Componentes reutilizáveis para:

Navbar fixa

Cartões de projeto

Títulos de seção

Layout global

🗂️ Estrutura do App

O app segue a seguinte arquitetura no diretório app/:

app/
│── index.js (Home)
│── sobre.js
│── experiencia-academica.js
│── experiencia-profissional.js
│── projetos.js
│── jogo.js   ← Tela do jogo da forca


Além disso:

components/
│── Navbar.jsx
│── SectionTitle.jsx
│── ProjectCard.jsx
theme/
│── styles.js
assets/
│── curriculo.png (scrollable na tela Sobre)

🎮 Jogo da Forca

O jogo foi implementado nativamente, sem WebView, cumprindo o requisito da disciplina.

Funcionalidades do jogo:

Palavras aleatórias

Teclado virtual

Contador de tentativas

Sistema de vitória e derrota

Imagens da forca mudando conforme erros

Botão para reiniciar a partida

Feedback visual de letras tentadas

A tela é totalmente integrada ao layout do portfólio, mantendo:

Navbar fixa

Estilo unificado com o restante do app

Cores e tipografia consistentes

🏠 Telas Implementadas
✔️ Home

Apresentação do usuário (nome, título, imagem e links principais).

✔️ Sobre

Imagem scrollável do currículo (curriculo.png)

Informações gerais

Tecnologias utilizadas no desenvolvimento

✔️ Experiência Acadêmica

Descrição do histórico estudantil.

✔️ Experiência Profissional

Experiências reais ou simuladas relevantes.

✔️ Projetos

Cards com descrição de projetos desenvolvidos.

✔️ Jogo

Tela contendo o jogo da forca funcional integrado ao app.

▶️ Rodando o Projeto
🔧 1. Instale as dependências:
npm install

🚀 2. Inicie o Expo:
npx expo start

📱 3. Execute no celular ou emulador:

Via Expo Go (Android/iOS)

Via emulador Android Studio

Via simulador iOS (Mac)

📄 Requisitos da Avaliação — Atendidos

✔️ App criado em React Native + Expo

✔️ Navegação usando Expo Router

✔️ Telas obrigatórias implementadas

✔️ Jogo funcionando dentro do app

✔️ Projeto organizado e responsivo

✔️ Código estruturado com componentes reutilizáveis

📬 Contato

Desenvolvido por: Ricardo André
LinkedIn: https://www.linkedin.com/in/ricardoandrejunior/
