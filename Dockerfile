# 1. Começamos com uma imagem base que já tem o Node.js instalado.
# A versão "alpine" é super leve, o que é ótimo!
FROM node:18-alpine

# 2. Define o diretório de trabalho dentro do container (da nossa caixa mágica).
WORKDIR /app

# 3. Copia os arquivos que listam as dependências do nosso projeto.
COPY package.json package-lock.json ./

# 4. Instala as dependências (no nosso caso, o Express).
RUN npm install

# 5. Copia o resto do código da nossa aplicação para dentro do container.
COPY . .

# 6. Expõe a porta 3000, que é a que nossa aplicação usa.
EXPOSE 3000

# 7. O comando que será executado quando o container iniciar.
CMD ["node", "index.js"]