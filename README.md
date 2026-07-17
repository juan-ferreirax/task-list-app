# Task List App

Um aplicativo fullstack para gerenciamento de tarefas. O projeto permite criar, editar, excluir e listar tarefas, organizando-as por categorias e filtrando pelo status (Pendentes, Em andamento e Concluídas).

## Tecnologias Usadas

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

**Infraestrutura:**
* Docker / Docker Compose

## Como Executar o Projeto

Existem duas formas de rodar o projeto: via **Docker** (recomendado, sobe tudo com um único comando) ou **manualmente** (rodando backend e frontend em terminais separados).

### Opção 1: Via Docker (recomendado)

#### Pré-requisitos
- Docker e Docker Compose instalados

#### Passos

1. Clone o repositório:
```bash
   git clone <url-do-repositorio>
   cd task-list-app
```

2. Crie o arquivo `.env` na raiz do projeto, baseado no `.env.example`:
```bash
   cp .env.example .env
```
   O Django exige uma `SECRET_KEY` para segurança (criptografia, sessões e tokens). Para gerar uma chave segura e aleatória, execute:
```bash
   python3 -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"
```
   Copie a string gerada e cole no `.env` (ex: `SECRET_KEY=sua_chave`). Preencha também as demais variáveis (credenciais do MySQL, `ALLOWED_HOSTS`, etc).

3. Suba os containers:
```bash
   docker compose up --build
```

4. Acesse a aplicação:
   - Frontend: **http://localhost:4200**
   - API: **http://localhost:8000/api/tasks/**

Para derrubar os containers:
```bash
docker compose down
```

Para derrubar os containers **e apagar os dados do banco**:
```bash
docker compose down -v
```

### Opção 2: Manualmente

Para rodar a aplicação localmente sem Docker, é necessário dois terminais abertos: um para a API e outro para o frontend.

#### 1. Backend (API)

Abra o terminal na pasta `backend/` e siga os passos abaixo:

```bash
# 1. Crie e ative um ambiente virtual
python -m venv .venv
source .venv/bin/activate  # Linux/macOS
# No Windows: .venv\Scripts\activate

# 2. Instale as dependências
# ATENÇÃO: Em ambientes ARM (como Termux), a instalação do mysqlclient pode falhar
# por falta de dependências de compilação (libmysqlclient-dev).
# Nesse caso, é necessário remover o mysqlclient do requirements.txt e usar apenas o PyMySQL.
# Em ambientes Debian e derivados a dependência específica pode ser instalada com sudo apt install libmysqlclient-dev.
pip install -r requirements.txt

# 3. Configure as variáveis de ambiente
# Faça uma cópia do arquivo .env.example (na raiz do projeto) e renomeie para .env,
# também na raiz do projeto
cp ../.env.example ../.env

# O Django exige uma SECRET_KEY para segurança (criptografia, sessões e tokens).
# Para gerar uma chave segura e aleatória, execute no terminal:
python3 -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"

# Copie a string gerada pelo comando e cole no arquivo .env (ex: SECRET_KEY=sua_chave).
# Preencha também as credenciais do seu banco de dados MySQL no mesmo arquivo.

# 4. Execute as migrações do banco de dados
python manage.py migrate

# 5. Inicie o servidor
python manage.py runserver
```
A API estará acessível no endereço: **http://127.0.0.1:8000/**

#### 2. Frontend

Abra um novo terminal na pasta `frontend/` e siga os passos abaixo:

```bash
# 1. Instale as dependências do projeto
npm install

# 2. Configure a conexão com a API
# Dentro da pasta src/environments/, faça uma cópia do arquivo
# environment.example.ts e renomeie para environment.ts
cp src/environments/environment.example.ts src/environments/environment.ts
# No Windows: copy src\environments\environment.example.ts src\environments\environment.ts

# Certifique-se de que a apiUrl esteja apontando para o backend

# 3. Inicie a aplicação Angular
ng serve
```
A interface do usuário estará acessível no endereço: **http://localhost:4200/**

## Estrutura do Projeto

```text
task-list-app/
├── backend/
│   ├── api/
│   │   ├── __init__.py
│   │   ├── asgi.py
│   │   ├── settings.py
│   │   ├── urls.py
│   │   └── wsgi.py
│   ├── tasks/
│   │   ├── migrations/
│   │   │   ├── __init__.py
│   │   │   ├── 0001_initial.py
│   │   │   ├── 0002_alter_task_table.py
│   │   │   ├── 0003_rename_creat_at_task_created_at.py
│   │   │   ├── 0004_alter_task_category.py
│   │   │   ├── 0005_remove_task_is_completed_task_status.py
│   │   │   └── 0006_remove_task_created_at_task_edited_at.py
│   │   ├── __init__.py
│   │   ├── admin.py
│   │   ├── apps.py
│   │   ├── models.py
│   │   ├── serializers.py
│   │   ├── tests.py
│   │   ├── urls.py
│   │   └── views.py
│   ├── Dockerfile
│   ├── manage.py
│   └── requirements.txt
│
├── frontend/
│   ├── public/
│   │   ├── fonts/
│   │   │   └── Google_Sans/
│   │   │       ├── GoogleSans-Italic-VariableFont_GRAD,opsz,wght.ttf
│   │   │       ├── GoogleSans-VariableFont_GRAD,opsz,wght.ttf
│   │   │       ├── OFL.txt
│   │   │       └── README.txt
│   │   └── favicon.ico
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/
│   │   │   │   ├── base-ui/
│   │   │   │   │   ├── base-ui.html
│   │   │   │   │   ├── base-ui.scss
│   │   │   │   │   └── base-ui.ts
│   │   │   │   ├── navbar/
│   │   │   │   │   ├── navbar.html
│   │   │   │   │   ├── navbar.scss
│   │   │   │   │   └── navbar.ts
│   │   │   │   ├── task-item/
│   │   │   │   │   ├── task-item.html
│   │   │   │   │   ├── task-item.scss
│   │   │   │   │   └── task-item.ts
│   │   │   │   ├── task-list/
│   │   │   │   │   ├── task-list.html
│   │   │   │   │   ├── task-list.scss
│   │   │   │   │   └── task-list.ts
│   │   │   │   └── task-modal/
│   │   │   │       ├── task-modal.html
│   │   │   │       ├── task-modal.scss
│   │   │   │       └── task-modal.ts
│   │   │   ├── interfaces/
│   │   │   │   └── task.ts
│   │   │   ├── services/
│   │   │   │   └── task.service.ts
│   │   │   ├── app.config.ts
│   │   │   ├── app.html
│   │   │   ├── app.routes.ts
│   │   │   ├── app.scss
│   │   │   ├── app.spec.ts
│   │   │   └── app.ts
│   │   ├── environments/
│   │   │   └── environment.example.ts
│   │   ├── index.html
│   │   ├── main.ts
│   │   └── styles.scss
│   ├── .editorconfig
│   ├── .prettierrc
│   ├── angular.json
│   ├── Dockerfile
│   ├── nginx.conf
│   ├── package-lock.json
│   ├── package.json
│   ├── README.md
│   ├── tsconfig.app.json
│   ├── tsconfig.json
│   └── tsconfig.spec.json
│
├── .env.example
├── .gitignore
├── docker-compose.yml
├── LICENSE
└── README.md
```