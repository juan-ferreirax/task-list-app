# Task List App

Um aplicativo fullstack para gerenciamento de tarefas. O projeto permite criar, editar, excluir e listar tarefas, organizando-as por categorias e filtrando pelo status (Pendentes, Em andamento e Concluídas).

## 💻 Tecnologias Usadas

**Frontend:**
* Angular
* TypeScript
* SCSS
* HTML5

**Backend:**
* Python
* Django
* Django REST Framework
* Banco de Dados: MySQL / configurável via `.env`

## 📂 Estrutura do Projeto

```text
task-list-app/
├── backend/                 # RESTful API
│   ├── api/                 # Configurações globais do projeto Django
│   ├── tasks/               # App principal (models, views, serializers, urls)
│   ├── .env.example         # Exemplo de variáveis de ambiente
|   ├── .gitignore           # Arquivos e pastas ignorados pelo Git no backend
│   ├── manage.py            # Script de gerenciamento do Django
│   └── requirements.txt     # Dependências do Python
│
└── frontend/                # Interface de Usuário (SPA)
    ├── public/              # Arquivos estáticos e assets públicos (ex: favicon)
    ├── src/
    │   ├── app/
    │   │   ├── components/  # Componentes (base-ui, navbar, task-item, task-list, task-modal)
    │   │   ├── interfaces/  # Tipagens e modelos (task.ts)
    │   │   └── services/    # Serviços de comunicação com a API REST (task.service.ts)
    │   ├── environments/    # Configurações de ambiente (URLs da API)
    │   ├── index.html       # Arquivo HTML principal
    │   ├── main.ts          # Ponto de entrada do Angular
    │   └── styles.scss      # Estilos globais e importação de fontes
    ├── .editorconfig        # Configurações padronizadas para o editor de código
    ├── .gitignore           # Arquivos e pastas ignorados pelo Git no frontend
    ├── .prettierrc          # Configurações de formatação do Prettier
    ├── angular.json         # Configuração do Angular Workspace
    ├── package.json         # Dependências do projeto Node.js
    ├── package-lock.json    # Versões exatas da árvore de dependências
    ├── tsconfig.app.json    # Configuração do compilador TypeScript para a aplicação
    ├── tsconfig.json        # Configuração base do TypeScript
    └── tsconfig.spec.json   # Configuração do TypeScript para testes