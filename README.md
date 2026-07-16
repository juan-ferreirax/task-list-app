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

## Como Executar o Projeto

Para rodar a aplicação localmente, é necessário dois terminais abertos: um para a API e outro para o frontend.

Para o Backend (API):
Abra o terminal na pasta backend/ e siga os passos abaixo:
```bash
# 1. Crie e ative um ambiente virtual
python -m venv venv
source venv/bin/activate  # Linux/macOS
# No Windows use: venv\Scripts\activate

# 2. Instale as dependências
pip install -r requirements.txt

# 3. Configure as variáveis de ambiente
# Faça uma cópia do arquivo .env.example e renomeie para .env
# Preencha com as credenciais do seu banco de dados MySQL

# 4. Execute as migrações do banco de dados
python manage.py migrate

# 5. Inicie o servidor
python manage.py runserver
```
A API estará acessível no endereço: http://127.0.0.1:8000/

Abra um novo terminal na pasta frontend/ e siga os passos abaixo:
```bash
# 1. Instale as dependências do projeto
npm install

# 2. Configure a conexão com a API
# Dentro da pasta src/app/environments/, faça uma cópia do arquivo
# environment.example.ts e renomeie para environment.ts
# Certifique-se de que a apiUrl esteja apontando para o backend

# 3. Inicie a aplicação Angular
ng serve
```

A interface do usuário estará acessível no endereço: http://localhost:4200/

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