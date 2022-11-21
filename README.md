# Projeto NG backend

O projeto consiste em um desafio proposto pela NG.CASH, que tem como especificação dada pela própria empresa:<br> `Estruturar uma aplicação web fullstack, dockerizada, cujo objetivo seja possibilitar que usuários da NG consigam realizar transferências internas entre si.`

# Requisitos básicos de instalação

Para que seja possível executar a aplicação é necessário possuir os seguintes pacotes:

-   [Docker](https://www.docker.com)
-   [YARN](https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable)<br>
    É recomendado instalar o Yarn pelo NPM e o NPM pelo NVM
-   [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
-   [NVM](https://github.com/nvm-sh/nvm)

# Configuração do ambiente

Para começar é necessário copiar o arquivo `.env.example` no mesmo local, após isso deve renomear a cópia para `.env`

### Network

Por aqui que o serviço e a imagem irão se comunicar, atráves de uma rede interna do docker, para criar essa rede o comando é: `yarn network`

### MYSQL e Node

O próximo passo é iniciar o ambiente node e mysql, para essa etapa basta utilizar o comando `yarn compose`, caso não deseje visualizar a execução da aplicação e acompanhar os logs utilize `yarn compose -d`

# Uso
Pode ser tanto conectado a uma aplicação front-end na arquitetura desejada pelo desenvolvedor (como módulo a parte, importando os arquivos, etc), ou para validações no ponto de entrada index, chamando os métodos e testando as funções
