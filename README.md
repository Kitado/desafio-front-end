# Desafio Front-end - Blu365

## Sobre o desafio

O projeto simula uma aplicação de inscrição na Academia de Jedis, do filme [Star Wars](https://pt.wikipedia.org/wiki/Star_Wars).

Para obter os dados, a API a ser utilizada é a [swapi.co](https://swapi.co/).


## Orientações

#### Página inicial - index.html
Na primeira página, há um formulãrio básico, onde o usuário informa seus dados de cadastro. (Nome, idade e email).

Após o preenchimento e envio do formulãrio, ele deverá ser redirecionado para a página `confirmacao.html`.


#### Aceitar mentor - confirmacao.html
Na segunda página um mentor é selecionado aleatóriamente.

Para encontrar o nome do mentor, é necessário uma consulta de personagem na [API Swapi.co](https://swapi.co/documentation#people).

A consulta é feita via um identificador, que deve ser um número randômico entre 1 e 90.

Com o resultado dessa consulta, o nome do mentor deve ser exibido na tela, no local reservado `#mentor-name`.

Ainda nessa tela, o usuário pode:

- Aceitar o mentor, e seguir para a página `inscrito.html`
- Negar, e ter outro mentor aleatóriamente escolhido.


#### Inscrito com sucesso - inscrito.html

Essa é a tela de confirmação da inscrição.

Nessa tela, algumas informações devem ser preenchidas dinâmicamente:

- Nome do aluno (Informada previamente na tela index.html)
- Nome do mentor (Informada previamente na tela confirmacao.html)
- Nome do planeta natal do mentor (Consumido via [API swapi.co](https://swapi.co/documentation))


## Desenvolvimento

Para desenvolver o projeto, utilizamos o ambiente [NodeJS](https://nodejs.org/en/).

É necessário ter o [npm](https://www.npmjs.com/get-npm) ou [yarn](https://yarnpkg.com/pt-BR/) instalado.

#### Para instalar as dependências:
```
npm init
```
ou
```
yarn
```


#### Para rodar o projeto:
```
npm run start
```
ou
```
yarn start
```

## Entrega
O prazo de entrega é de 1 semana a partir do recebimento deste teste.

Você pode clonar este repósitório e nos enviar o link, ou nos enviar seus arquivos finais.

## Que a força esteja com você! :)