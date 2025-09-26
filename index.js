// Importa o framework Express
const express = require('express');
const app = express();

// Define a porta que nosso servidor vai usar. 
// O Render (nossa vitrine) nos diz qual porta usar, por isso a variável de ambiente.
const PORT = process.env.PORT || 3000;

// Cria uma rota principal. Quando alguém acessar nosso site, verá essa mensagem.
app.get('/', (req, res) => {
  res.send('<h1>Meu primeiro Pipeline de Deploy!</h1><p>Funcionou! 🎉</p>');
});

// Manda o servidor começar a "escutar" por acessos na porta definida.
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});