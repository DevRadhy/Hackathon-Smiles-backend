# Hackathon Smiles

Documentação do Backend.

## Introdução

Documentação de uso criada para o Backend da aplicação do **Hackathon Smiles.**

Projeto construido com **Node.js** e **Typescript**.

Mais algums ferramentas usadas foram

* **Express**
* **Postgres**
* **TypeORM**
* **UUID**

## Tópicos

Se você preferir pode navegar por tópicos.

* **[Instalação](#instalação)**
* **[Migrations](#migrations)**
* **[Wish List](#wish-list)**
* **[Presets](#presets)**
* **[Conclusão](#conclusão)**

## Instalação

Aqui irei mostrar como baixar o repositório e fazer a instalação das dependências.

Você pode começar clonando o repositório da seguinte forma:

```bash
git clone https://github.com/DevRadhy/Hackathon-Smiles-backend.git
```

Após clonar o repositório você deverá configurar as variáveis de ambiente, crie um arquivo `.env` na pasta raiz do projeto, como seguinte conteúdo

```
# Postgres credentials
POSTGRES_HOST='host onde está rodando o postgres'
PRSTGRES_PORT='porta onde está rodando'
POSTGRES_DB='nome do bando de dados'
POSTGRES_USER='usuário do banco de dados'
POSTGRES_PASSWORD='senha do usuário'
```

essas configuranções serão usadas com o `Typeorm` para rodar o banco de dados.

e em seguida fazer a instalação das dependências.

```bash
yarn install
# ou npm install
```

Para iniciar a aplicação basta colocar o seguinte comando no terminal

```bash
yarn dev
# ou npm run dev
```

Para acessar a aplicação você pode entra em `http://localhost:3333`

## Migrations

Para configurar o bando de dados você pode usar o seguinte comando no terminal

```bash
yarn typeorm migration:run
# ou npm run typeorm migration:run
```

O `TypeORM` configurará o banco de dados na ordem dos arquivos na pasta `migrations`, que você pode chegar navegando pelos arquivos ou clicando **[aqui](src/database/migrations)**

## Wish List

Rotas para criação de um item.

## Criando uma viagem

Para criar um item você pode fazer um requisição do tipo `POST` em `/create-travel` 

```json
// POST /create-travel

{
	"name": "Nome do objetivo",
	"description": "Descrição do item",
	"from": "De onde vai partir",
	"to": "Para onde vai",
	"objective": "Quanto pretende polpar"
}
```

por exemplo

```bash
{
	"name": "Férias",
	"description": "Planejamento paras férias"
	"from": "Timbó Grande",
	"to": "Florianópolis",
	"objective": 100
}
```

Após a criação de item, a requisição terá a seguinte resposta:

```json
// Response

{
  "id": "f2f69cef-98e0-4c93-880e-4ffe2d0931c5",
  "item": {
    "name": "Florianópolis",
    "price": 1200,
    "daily": 600
  }
}
```

## Criando um produto

Para criar um produto na wish list você pode fazer um requisição do tipo `POST` em `/create-product`

```json
// POST /create-product

{
	"name": "Nome do objetivo",
	"product": "Produto",
	"description": "Descrição do item",
	"objective": "Quanto pretende polpar"
}
```

por exemplo

```json
{
	"name": "Computador",
	"description": "Planejamento para comprar um computador novo",
	"product": "Computador",
	"objective": 100
}
```

Como na criação de um item de viagem, o item de produto retorna

```json
// Response

{
  "id": "75d846a2-6c95-4272-968d-a9ed6ac76fe2",
  "item": {
    "name": "Computador",
    "price": 5000
  }
}
```

## Presets

A aplicação faz uso de alguns dados estáticos que simulam a busca de dados externas, como preços de pacotes de viagens e preços de produtos e itens de shopping.

Você pode encontrar esses dados estátios no formato `.json` navegando até a pasta `providers`, ou clicando **[aqui](src/providers)**.

O tratamento e a busca desses dados estão presentes navegando até a pasta `lib` ou clicando **[aqui](src/lib)**.

## Conclusão

Se você chegou até aqui obrigado por acompanhar o conteúdo que foi desenvolvido para o evento organizado pela **Shawee**, o primeiro **Hackathon Smiles.**
