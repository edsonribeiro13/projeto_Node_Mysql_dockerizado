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

### MYSQL

primeiro é necessário preparar o ambiente do banco de dados que será utilizado, para essa tarefa o banco utilizado é o banco relacional MYSQL, que possui uma imagem oficial no docker hub, o que facilita o processo. O primeiro comando utilizado será: `docker pull mysql` que tornará a instância disponível localmente e `docker run --name NGCASH -e MYSQL_ROOT_PASSWORD=NGAdmin -d mysql` que iniciará a instância no ambiente local.

### Node

O próximo passo é iniciar o ambiente node, para essa etapa basta utilizar o comando `yarn compose prod` caso a necessidade seja apenas vizualizar a aplicação de forma funcional ou `yarn compose dev` para iniciar o ambiente em modo dev que permite ao desenvolvedor trabalhar no código e visualizar as suas alterações em tempo real
