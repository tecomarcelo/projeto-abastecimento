# Vue Paper Dashboard - Sistema de Abastecimento ⛽

Este projeto é um painel administrativo moderno desenvolvido com **Vue.js**, baseado no template *Paper Dashboard*. Ele funciona como a interface de usuário (Front-End) para o gerenciamento de dados de abastecimento, consumindo uma **API REST** estruturada sob os princípios de **Domain-Driven Design (DDD)**.

## 🚀 Tecnologias

As principais dependências do projeto incluem:

* **Core:** [Vue.js](https://vuejs.org/) v2.7.14
* **UI Framework:** [Bootstrap](https://getbootstrap.com/) v4.6.2
* **Gráficos:** Chartist v0.11.0 (para métricas de consumo e custos)
* **Estilização:** SASS/SCSS
* **Linter:** ESLint com Prettier

---

## 🏗️ Integração com API DDD

A aplicação foi desenhada para interagir com um backend robusto. A comunicação com a API de abastecimento foca na clareza do domínio:

* **Entidade de Domínio:** Abastecimento (Fueling)
* **Comunicação:** Axios/Fetch para os endpoints REST.
* **Arquitetura:** Separação entre componentes de interface e serviços de consumo de dados para manter a consistência com o desacoplamento proposto pelo DDD no backend.

---

## 🔧 Instalação e Execução

Para rodar este projeto localmente, você precisará do [Node.js](https://nodejs.org/) (versão >= 8.1.4) instalado.

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
   cd seu-repositorio

👤 Autor
Desenvolvido por Marcelo Teodoro.