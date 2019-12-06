# Markers Manager
Aplicação de agrupamento de markers utilizando react, nodejs, react-google-maps e docker

### Recursos

- Agrupamento de pontos com Cluster
- Delimitação de pontos por área 
- Plotagem dos pontos no mapa em tempo real


![](/assets/frontend.png)

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

----

### Testes - Swagger

Para testar a rota da nossa API, usaremos o Swagger 

![](/assets/telainicial.png)

Acessando o _localhost:/PORTA_API/swagger_ vamos ter acesso a interface de testes do swagger, com nossas rotas e também os models da API caso houvesse algum. No caso desta API acessaremos o link abaixo:

> Swagger Interface: http://localhost:4000/swagger/

Na interface do swagger acessaremos nossa rota **Get Markers**

![](/assets/parameters.png)

**Get Makers** recebe um parâmetro de consulta para ter um retorno válido, este parâmetro equivale  as coornedanadas de dois pontos (A e B) e o retorno será igual a todos os valores ou, "markers" localizados entre estes pontos. 

> Get Markers receberá uma string como Query Parameter, essa string deve seguir a formatação apresentada como "Default" pois será convertida em um **Objeto**

```
"default": {
    "lat": [
        -24.03194,
        -24.081513
    ],
    "lng": [
        -46.399934,
        -46.605015
    ]
}
```