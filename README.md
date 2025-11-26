# 📱 Portfólio + Jogo da Forca — React Native + Expo

Este projeto é um **currículo/portfólio interativo** desenvolvido em **React Native com Expo**, contendo diversas telas apresentando informações acadêmicas, profissionais, projetos e um **jogo da forca totalmente jogável dentro do app**.

---

## 📌 Tecnologias Utilizadas

### **🧩 Frameworks e Ferramentas**
- React Native
- Expo
- Expo Router
- React Hooks

### **🎨 Estilização**
- StyleSheet nativo
- Componentes reutilizáveis (Navbar, SectionTitle etc.)

### **🧱 Estrutura e Componentização**
- App dividido em telas usando Expo Router
- Componentes reutilizáveis para Navbar, cartões de projeto, títulos de seção e layout global

---

## 🗂️ Estrutura do App

```
app/
│── index.js (Home)
│── sobre.js
│── experiencia-academica.js
│── experiencia-profissional.js
│── projetos.js
│── jogo.js   ← Tela do jogo da forca

components/
│── Navbar.jsx
│── SectionTitle.jsx
│── ProjectCard.jsx

theme/
│── styles.js

assets/
│── curriculo.png (scrollable na tela Sobre)
```

---

## 🎮 Jogo da Forca

Funcionalidades:
- Palavras aleatórias
- Teclado virtual
- Contador de tentativas
- Sistema de vitória e derrota
- Boneco da forca mudando conforme erros
- Botão para reiniciar a partida
- Feedback visual de letras tentadas

A tela do jogo mantém a **navbar fixa** e o estilo unificado com o restante do app.

---

## 🏠 Telas Implementadas

- **Home:** Apresentação do usuário (nome, título, imagem e links principais)  
- **Sobre:** Imagem scrollável do currículo + informações e tecnologias utilizadas  
- **Experiência Acadêmica:** Histórico estudantil  
- **Experiência Profissional:** Experiências relevantes  
- **Projetos:** Cards com descrição de projetos desenvolvidos  
- **Jogo:** Tela do jogo da forca funcional integrado ao app  

---

## ▶️ Como Rodar o Projeto

### 1. Instale as dependências:
```bash
npm install
```

### 2. Inicie o Expo:
```bash
npx expo start
```

### 3. Execute no celular ou emulador:
- Via **Expo Go** (Android/iOS)
- Via emulador Android Studio
- Via simulador iOS (Mac)

---

## 📄 Requisitos Atendidos

- App criado em React Native + Expo  
- Navegação usando Expo Router  
- Telas obrigatórias implementadas  
- Jogo funcionando dentro do app  
- Projeto organizado e responsivo  
- Código estruturado com componentes reutilizáveis  

---
