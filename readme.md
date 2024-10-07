# API Clima

Esta API fornece informações meteorológicas para uma cidade específica utilizando o framework **Express** e a biblioteca **Axios** para fazer chamadas HTTP à API do **OpenWeather**.

## Tecnologias Utilizadas

- **Node.js**
- **Express**
- **Axios**
- **dotenv** (para gerenciar variáveis de ambiente)

## Funcionalidades

- Consulta as condições meteorológicas atuais de uma cidade.
- Retorna dados como temperatura, descrição do clima, umidade, velocidade do vento, e mais.

## Pré-requisitos

- Node.js e npm instalados em sua máquina.
- Uma chave de API do OpenWeather. Você pode se inscrever [aqui](https://openweathermap.org/api) para obter uma chave gratuita.

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu_usuario/seu_repositorio.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd seu_repositorio
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Crie um arquivo `.env` na raiz do projeto e adicione sua chave de API:

   ```plaintext
   API_KEY=sua_chave_api_aqui
   PORT=5500
   ```

## Execute o Servidor

Para iniciar o servidor, use o seguinte comando:

```bash
node app.js
```

## Contato

Para dúvidas ou sugestões, entre em contato pelo e-mail: andremasierodev@gmail.com
