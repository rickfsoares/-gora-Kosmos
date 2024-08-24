# Projeto Agora Kosmos

Este projeto utiliza Docker Compose para facilitar a configuração e execução do ambiente de desenvolvimento. Abaixo estão os comandos disponíveis para gerenciar o ciclo de vida da aplicação.

## Pré-requisitos

- Docker
- Docker Compose

## Comandos Disponíveis

### Subir e Configurar o Ambiente

- **`make up`**  
  Sobe os serviços definidos no `docker-compose.yml`.

- **`make up-build`**  
  Sobe os serviços com a opção de recriar as imagens. Use este comando quando modificar o `Dockerfile` ou as dependências.

- **`make build`**  
  Recria as imagens dos serviços sem cache.

- **`make upd`**  
  Sobe os serviços em segundo plano (`detached mode`) e recria as imagens, se necessário.

### Parar e Remover os Serviços

- **`make down`**  
  Para e remove todos os serviços definidos no `docker-compose.yml`.

### Comandos para Gerenciamento da Aplicação

- **`make app-build`**  
  Recria a imagem de um serviço especificado no Docker Compose, sem usar cache. Por padrão, o serviço agora_kosmos é recriado, mas você pode especificar outro serviço alterando o valor da variável target.

  ```bash
    make app-build target=agora_kosmos
  ```

  **Substitua o valor da variável target pelo serviço desejado conforme definido no docker-compose.yml.**

- **`make app-bundle-install`**  
  Instala as dependências Ruby utilizando o `bundle install` por padrão no agora_kosmos. Mas você pode especificar outro serviço alterando o valor da variável target. Os serviços serão iniciados automaticamente utilizando o comando `make upd`.

  ```bash
    make app-bundle-install target=agora_kosmos
  ```

    **Substitua o valor da variável target pelo serviço desejado conforme definido no docker-compose.yml.**

- **`make app-bash`**  
  Acessa o terminal (`/bin/bash`) do serviço `agora_kosmos` por padrão. Mas você pode especificar outro serviço alterando o valor da variável target. Os serviços serão iniciados automaticamente utilizando o comando `make upd`.

  ```bash
   make app-bash target=agora_kosmos
  ```

    **Substitua o valor da variável target pelo serviço desejado conforme definido no docker-compose.yml.**

- **`make app-migrate`**  
  Executa as migrações do banco de dados (`rails db:migrate`) da aplicação do `agora_kosmos` por padrão. Mas você pode especificar outro serviço alterando o valor da variável target. Os serviços serão iniciados automaticamente utilizando o comando `make upd`.

  ```bash
    make app-migrate target=agora_kosmos
  ```

    **Substitua o valor da variável target pelo serviço desejado conforme definido no docker-compose.yml.**

- **`make app-seed`**  
  Popula o banco de dados com os dados iniciais (`rails db:seed`). Os serviços serão iniciados automaticamente.
  
   ```bash
    make app-seed
  ```

- **`make app-create-db`**  
  Cria o banco de dados (`rails db:create`). Os serviços serão iniciados automaticamente.

  ```bash
    make app-create-db
  ```

## Como Usar

1. Clone o repositório.
2. Execute `make up-build` para subir o ambiente.
3. Utilize os comandos disponíveis para gerenciar a aplicação.

## Notas

- Certifique-se de ter o Docker e o Docker Compose instalados e configurados corretamente no seu ambiente de desenvolvimento.
- Para qualquer alteração nas dependências ou no ambiente de execução, utilize os comandos `make up-build` ou `make build` conforme necessário.
