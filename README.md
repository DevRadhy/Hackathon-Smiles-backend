# Hackathon Smiles

Documentação do Backend.

## Introdução

Documentação de uso criada para o Backend da aplicação do **Hackathon Smiles.**

## Tópicos

Se você preferir pode navegar por tópicos.

* **[Instalação](#instalação)**
* **[Wish List](#wish-list)**
* **[Presets](#presets)**
* **[Conclusão](#conclusão)**

## Instalação

Aqui irei mostrar como baixar o repositório e fazer a instalação das dependências.

Você pode começar clonando o repositório da seguinte forma:

```bash
git clone https://github.com/DevRadhy/Hackathon-Smiles-backend.git
```

e em seguida fazer a instalação das dependências.

```bash
yarn install
# ou npm install
```

## Wish List

Rotas para criação de um item.

## Criando uma viagem

Para criar um item você pode fazer um requisição do tipo `POST` em `/create-travel` 

```json
// POST /create-travel

{
	"name": "Nome do objetivo",
	"description": "Descrição do item"
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
  "travel": {
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
	"product": "Produto"
	"description": "Descrição do item"
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
  "product": {
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
