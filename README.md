# Agora Kosmos

![Preview da tela home](https://raw.githubusercontent.com/rickfsoares/Agora-Kosmos/refs/heads/main/agora-home.png)

## Objetivo

O projeto tem como objetivo construir uma aplicação web para compra e venda de ativos possuindo como diferencial a utilização de gameficação e inteligência artificial para auxiliar o usuário na tomada de decisão.

## Requistos

- Listagem de ativos
- Visualização de detalhes de um ativo
- Listagem de notícias sobre o mercado financeiro
- Filtro de notícias
- Compra de ativos
- Venda de Ativos
- Transferência de dinheiro para conta do usuário
- Visualizar transferências pendente de dinheiro para conta do usuário
- Listagem de missões
- Listagem de ranking
- Entrega XP Usuário
- Chatbot
- Exclusão de conta
- Alteração de dados da conta
- Realizar Cadastro
- Realizar login

## Pré-requisitos

- Docker
- Docker Compose

## Comandos Disponíveis

### Subir e Configurar o Ambiente

- **`make up`**  
  Sobe os serviços definidos no `docker-compose.yml`.

  ```bash
    make up
  ```

- **`make up-build`**  
  Sobe os serviços com a opção de recriar as imagens. Use este comando quando modificar o `Dockerfile` ou as dependências.

    ```bash
        make up-build
    ```

- **`make build`**  
  Recria as imagens dos serviços sem cache.

    ```bash
        make build
    ```

- **`make upd`**  
  Sobe os serviços em segundo plano (`detached mode`) e recria as imagens, se necessário.

    ```bash
        make upd
    ```

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
  
- **`app-create-db-test `**  
  Cria o banco de dados de teste (`rails db:create RAILS_ENV=test`).

  ```bash
    make app-create-db-test
  ```

- **`app-migrate-test`**
  Executa as migrações do banco de dados de teste (`rails db:migrate RAILS_ENV=test`).

  ```bash
    make app-migrate-test
  ```

- **`app-run-tests`** 

  Executa os testes da aplicação (`minitest`).

  ```bash
    make app-run-tests
  ```

## Como Usar

1. Clone o repositório.
2. Execute `make up-build` para subir o ambiente.
3. Utilize os comandos disponíveis para gerenciar a aplicação.

## Notas

- Certifique-se de ter o Docker e o Docker Compose instalados e configurados corretamente no seu ambiente de desenvolvimento.
- Para qualquer alteração nas dependências ou no ambiente de execução, utilize os comandos `make up-build` ou `make build` conforme necessário.
- Para o sistema operacional Windows, utilize o WSL2 para executar os comandos.

## Contribuídores

- [Clóvis Sérgio Côrreia Lima Júnior](https://github.com/sergioclimajr)
- [Jonas Ariel Passos de Medeiros](https://github.com/Jonasapm94)
- [Julyana Santos Alencar](https://github.com/alencarjulyana)
- [Ricardo França Soares](https://github.com/rickfsoares)
- [Taw-Ham Almeida Balbino de Paula](https://github.com/tawhamjavascript)

## Licença

Este projeto está licenciado sob a Licença MIT - consulte o arquivo [MIT](https://opensource.org/license/mit) para obter detalhes.
