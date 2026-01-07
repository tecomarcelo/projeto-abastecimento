# Vue Paper Dashboard - Sistema de Abastecimento ⛽

Este projeto é um painel administrativo moderno desenvolvido com **Vue.js 2.7**, baseado no template *Paper Dashboard*. Ele funciona como a interface de usuário (**Front-End**) para o gerenciamento de dados de abastecimento, consumindo uma **API REST** estruturada sob os princípios de **Domain-Driven Design (DDD)**.

O projeto utiliza **Vite** como ferramenta principal de build e desenvolvimento, garantindo maior performance e melhor experiência de desenvolvimento.

---

## 🚀 Tecnologias

As principais dependências do projeto incluem:

### 🔹 Core
* **Vue.js** v2.7.14  
* **Vite** (ambiente de desenvolvimento e build)
* **Vue Router** v3.0.1

### 🎨 UI & Estilização
* **Bootstrap** v4.6.2
* **SASS / SCSS**
* **Paper Dashboard UI Template**

### 📊 Gráficos
* **Chartist** v0.11.0 (métricas de consumo, autonomia e custos)

### 🔌 Comunicação com API
* **Axios** (requisições HTTP para API REST)

### 🧹 Qualidade de Código
* **ESLint**
* **Prettier**
* **eslint-plugin-vue**

---

## 🏗️ Integração com API DDD

A aplicação foi desenhada para interagir com um backend robusto orientado a domínio.

* **Domínio Principal:** Abastecimento (Fueling)
* **Comunicação:** Axios para consumo dos endpoints REST
* **Arquitetura:**  
  - Componentes focados apenas em UI  
  - Serviços responsáveis pela comunicação com a API  
  - Separação clara de responsabilidades, alinhada ao DDD aplicado no backend

---

## 🔧 Instalação e Execução

### Pré-requisitos

* **Node.js:** >= 8.1.4  
* **NPM:** >= 5.0.0  

### Passos para execução local

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio

👤 Autor
Desenvolvido por Marcelo Teodoro.