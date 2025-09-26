# 🚀 Projeto de Pipeline CI/CD com Práticas DevSecOps

![Status do Pipeline](https://github.com/renatoribeirodev/pipeline-app/actions/workflows/pipeline.yml/badge.svg)

Bem-vindo(a) ao meu projeto de demonstração de um pipeline de automação completo! Esta aplicação foi desenvolvida como parte do módulo de **Platform Engineering - DevSecOps & SRE Practices**.

O objetivo aqui não é apenas criar uma aplicação, mas sim construir e orquestrar toda a **linha de montagem automática (Pipeline de CI/CD)** que leva o código do computador do desenvolvedor até a nuvem, de forma segura, testada e eficiente.

---

## 🎯 A Aplicação: Cinto de Utilidades DevOps

Para demonstrar o pipeline, foi criada uma ferramenta web simples, mas útil no dia a dia de um desenvolvedor: um **Codificador/Decodificador de Base64**.

Esta ferramenta é relevante no contexto de DevOps e SRE, pois configurações sensíveis (como *Secrets* no Kubernetes) são frequentemente codificadas em Base64.

---

## ⚙️ A Linha de Montagem Automatizada (Pipeline de CI/CD)

O coração deste projeto é o pipeline de automação construído com **GitHub Actions**. Toda vez que um novo código é enviado para o repositório, uma sequência de 6 passos é executada automaticamente para garantir a qualidade e a segurança antes da publicação.

Aqui estão os passos da nossa linha de montagem:

1. **🧐 Verificação de Qualidade do Código (Lint)**
    * **O que faz?** Garante que o código JavaScript siga um padrão de qualidade e estilo, evitando erros comuns antes mesmo de começar a "montagem".

2. **🔐 Login Seguro no "Depósito" de Imagens**
    * **O que faz?** Autentica de forma segura no GitHub Container Registry, que é o nosso depósito central para guardar os pacotes prontos da aplicação.

3. **📦 Construção e Publicação da Imagem (Build & Push)**
    * **O que faz?** Empacota a aplicação em um container Docker, criando um "pacote" padronizado. Em seguida, envia esse pacote para o nosso depósito seguro.

4. **✅ Teste Básico da Imagem**
    * **O que faz?** Realiza um teste rápido para verificar se a imagem recém-criada consegue ser iniciada sem erros, garantindo que o "pacote" não está corrompido.

5. **🛡️ Análise de Vulnerabilidades de Segurança**
    * **O que faz?** Utiliza a ferramenta Trivy para fazer um "raio-x" no pacote, procurando por qualquer brecha de segurança conhecida nos seus componentes.

6. **☁️ Implantação Automática (Deploy)**
    * **O que faz?** Após todos os passos acima serem concluídos com sucesso, o **Render** é notificado automaticamente e publica a nova versão da aplicação na internet para que todos possam acessar.

---

## 🛠️ Tecnologias Utilizadas

* **Linguagem:** JavaScript (com Node.js e Express)
* **Contêiner:** Docker
* **Automação (CI/CD):** GitHub Actions
* **Hospedagem (Cloud):** Render
* **Qualidade e Segurança:** ESLint, Trivy

---

## 💻 Como Executar Este Projeto Localmente

Se você quiser testar a aplicação no seu próprio computador, siga os passos abaixo.

### Pré-requisitos

Antes de começar, você precisa ter as seguintes ferramentas instaladas:

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/en/)
* [Docker Desktop](https://www.docker.com/products/docker-desktop/)

### Passos para Instalação

1. **Clone o repositório:**
    Abra seu terminal e rode o comando abaixo para baixar os arquivos do projeto.

    ```bash
    git clone [https://github.com/renatoribeirodev/pipeline-app.git](https://github.com/renatoribeirodev/pipeline-app.git)
    ```

2. **Acesse a pasta do projeto:**

    ```bash
    cd nome-do-repositorio
    ```

3. **Instale as dependências:**
    Este comando vai baixar as ferramentas necessárias que o projeto usa (como o Express e o ESLint).

    ```bash
    npm install
    ```

4. **Inicie a aplicação:**

    ```bash
    npm start
    ```

5. **Acesse no seu navegador!**
    Abra seu navegador de internet e visite o endereço `http://localhost:3000`. Você verá a aplicação rodando!

---

Projeto desenvolvido com dedicação para a conclusão do módulo de Platform Engineering.
