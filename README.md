# Meu Portfólio Pessoal

Este é o código-fonte do meu portfólio pessoal, desenvolvido com React e Material-UI, que apresenta minhas habilidades, projetos, e informações de contato.

## Visão Geral

O portfólio inclui:
- Uma seção introdutória com uma breve descrição e opções para baixar meu CV e entrar em contato.
- Seções para exibir minhas habilidades e projetos.
- Animações e uma interface responsiva para desktops, tablets e dispositivos móveis.

## Tecnologias Utilizadas

- **React**: Biblioteca para construção da interface.
- **Material-UI**: Biblioteca de componentes para React, que fornece estilização e responsividade.
- **Styled Components**: Estilização de componentes utilizando o estilo CSS-in-JS.
- **EmailJS**: Para enviar mensagens de contato por email.

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em seu ambiente de desenvolvimento:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [Yarn](https://yarnpkg.com/) ou [npm](https://www.npmjs.com/)

## Configuração do Ambiente

1. Clone o repositório para a sua máquina local:

   
   git clone https://github.com/Vitu26/meu-portifolio-react.git
   cd meu-portifolio-react

2. Instale as dependências do projeto:

  yarn install
ou
  npm install

3. Configure as variáveis de ambiente. Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis:

    O github me proibe de passar o token dele pelo projeto então para receber as variáreis acesse esse dococumente e copie e cole na raiz do projeto criando um arquivo ".env"
    https://docs.google.com/document/d/1W53oIwiq56vmlbBlwTKrD6HvfqFyz9_rGMrFB3xQ7-8/edit?usp=sharing


4. Lista de dependências

   O projeto utiliza as seguintes dependências principais:
   
   ### Dependências de Produção
   
   @emotion/react: Biblioteca para estilização com CSS-in-JS.
   
   @emotion/styled: Estilização de componentes com Emotion.
   
   @mui/material: Componentes do Material-UI.
   
   @mui/icons-material: Ícones do Material-UI.
   
   axios: Cliente HTTP para comunicação com APIs.
   
   emailjs-com: Integração para envio de e-mails com EmailJS.
   
   gh-pages: Publicação de projetos no GitHub Pages.
   
   marked: Conversor de Markdown para HTML.
   
   react: Biblioteca principal para criação de interfaces de usuário.
   
   react-dom: Pacote para renderização de componentes React no DOM.
   
   react-scroll: Biblioteca para rolagem suave em React.
   
   react-slick: Componente de carrossel para React.
   
   slick-carousel: Suporte ao carrossel Slick.
   
   typescript: Suporte a TypeScript.
   
   ### Dependências de Desenvolvimento
   
   @testing-library/react: Testes para componentes React.
   
   @types/react e @types/react-dom: Tipos para React e React DOM.
   
   react-scripts: Scripts e ferramentas para desenvolvimento com Create React App.




6. Baixe as dependências de desenvolvimento e prepare para iniciar.

## Rodando o Projeto
Para iniciar o projeto localmente, utilize o seguinte comando:


   yarn start

    ou

   npm start

   O projeto será iniciado em http://localhost:3000. 
   Acesse este endereço em seu navegador.

## Scripts Disponíveis
   Além do script de start, você pode utilizar os seguintes scripts:

   yarn build ou npm run build: Compila o projeto para produção, gerando os arquivos na pasta build.
   
   yarn test ou npm test: Roda os testes do projeto.
   
   yarn lint ou npm run lint: Executa o ESLint para verificar a formatação do código.
   
## Estrutura do Projeto
   
   src/components: Contém os componentes reutilizáveis do projeto.
   
   src/style: Estilos personalizados usando styled components para cada componente.
   
   public: Arquivos públicos, incluindo o index.html e outros recursos estáticos.
   
   src/App.js: Componente principal que organiza as seções do portfólio.
   
## Notas Importantes
   EmailJS: O formulário de contato utiliza o EmailJS para enviar mensagens. Certifique-se de configurar corretamente as credenciais no arquivo .env.
   
   Tokens do GitHub: O token do GitHub é usado para acessar informações públicas dos repositórios do GitHub. Para evitar problemas de acesso, use um token com permissões básicas de leitura de perfil.
   
   Personalização
   Para personalizar o projeto com seus próprios dados, edite as seguintes áreas:

   Intro: Atualize a seção de introdução com seu próprio nome e informações de contato.
   
   About: Atualize as descrições e imagens da seção Sobre.
   
   Skills e Projects: Atualize as habilidades e adicione seus projetos.
   
  




