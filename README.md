# Projeto NG backend

O projeto consiste em um desafio proposto pela NG.CASH, que tem como especificação dada pela própria empresa:<br> `Estruturar uma aplicação web fullstack, dockerizada, cujo objetivo seja possibilitar que usuários da NG consigam realizar transferências internas entre si.`

# Requisitos básicos de instalação

Para que seja possível executar a aplicação é necessário possuir os seguintes pacotes:

-   [Docker](https://www.docker.com)
-   [YARN](https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable)
    É recomendado instalar o Yarn pelo NPM e o NPM pelo NVM
-   [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
-   [NVM](https://github.com/nvm-sh/nvm)

# Configuração do ambiente

Para começar é necessário copiar o arquivo `.env.example` no mesmo local, após isso deve renomear a cópia para `.env`

### Network

Por aqui que o serviço e a imagem irão se comunicar, atráves de uma rede interna do docker, para criar essa rede o comando é: `yarn network`

### MYSQL

Primeiro é necessário preparar o ambiente do banco de dados que será utilizado, para essa tarefa o banco utilizado é o banco relacional MYSQL, que possui uma imagem oficial no docker hub, o que facilita o processo. O primeiro comando utilizado será: `docker pull mysql` que tornará a instância disponível localmente e `docker run --network=ng_network --detach --name=NGDB -p 33360:3306 -e="MYSQL_ROOT_PASSWORD=admin" -e="MYSQL_DATABASE=NGDB" mysql` que iniciará a instância no ambiente local.

### Node

O próximo passo é iniciar o ambiente node, para essa etapa basta utilizar o comando `yarn composeProd` caso a necessidade seja apenas vizualizar a aplicação de forma funcional ou `yarn composeDev` para iniciar o ambiente em modo dev que permite ao desenvolvedor trabalhar no código e visualizar as suas alterações em tempo real
