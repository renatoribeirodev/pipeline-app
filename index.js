// Importa o framework Express
const express = require('express');
// Importa o módulo 'path' do Node.js, para lidar com caminhos de arquivos
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware Mágico do Express!
// Isso diz ao Express: "Qualquer arquivo que o navegador pedir,
// primeiro procure na pasta 'public'".
app.use(express.static(path.join(__dirname, 'public')));

// Como agora temos um 'index.html' dentro da pasta 'public', o Express
// é inteligente o suficiente para servi-lo automaticamente quando alguém
// acessa a raiz do site ('/'). Por isso, não precisamos mais do app.get('/'...)!

// Manda o servidor começar a "escutar" por acessos na porta definida.
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});