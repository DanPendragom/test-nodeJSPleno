# Markers Maneger
Aplicação de agrupamento de markers utilizando react, nodejs, react-google-maps e docker

### Recursos

- Agrupamento de pontos com Cluster
- Delimitação de pontos por área 
- Plotagem dos pontos no mapa em tempo real

----
### Executando com Docker

- Na raiz do projeto execute o comando para criar a imagem e subir os containers a partir do docker compose

`$ docker-compose -f "docker-compose.yml" up -d --build`

----

### Execução sem docker(webservice)

- Acesse o diretório "server" e execute o comando
`$ npm install`

ou

`$ yarn install`

Após a conclusão execute: 
`$ npm start`

----

### Execução sem docker(app)

- Acesse o diretório "client" e execute o comando
`$ npm install`

ou

`$ yarn install`

Após a conclusão execute: 
`$ npm start`