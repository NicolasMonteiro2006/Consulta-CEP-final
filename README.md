# 📌 API de Consulta de CEP

Esta é uma API simples de consulta de CEP, desenvolvida com **Node.js** e **Express**, utilizando a biblioteca **cep-promise** para buscar informações sobre endereços no Brasil.

---

## 🚀 Funcionalidades

- Consulta de endereço a partir de um CEP.
- Resposta no formato **JSON**, com informações como **logradouro, bairro, cidade e estado**.
- Suporte a **CORS**, permitindo integração com frontends.

---

## 📥 Como baixar e rodar o projeto

### 1️⃣ **Clone o repositório**
```sh
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio
```

### 2️⃣ **Instale as dependências**
Certifique-se de ter o **Node.js** instalado. Depois, rode:
```sh
npm install
```

### 3️⃣ **Inicie o servidor**
```sh
node server.js
```
O servidor será iniciado na porta **3000**.

---

## 📡 Como usar a API

### 🔎 **Consulta de CEP**

**Rota:**
```
GET /consultar-cep/:cep
```

**Exemplo de requisição:**
```sh
curl http://localhost:3000/consultar-cep/13466-902
```

**Resposta esperada:**
```json
{
  "cep": "13466-902",
  "estado": "SP",
  "cidade": "Americana",
  "bairro": "Parque Industrial Werner Plaas",
  "rua": "Avenida Nossa Senhora de Fátima"
}
```

Se o CEP for inválido, a API retorna:
```json
{
  "error": "CEP não encontrado"
}
```

---

## 🛠 Tecnologias utilizadas
- **Node.js**
- **Express**
- **cep-promise** (para consulta de CEPs)
- **CORS**

---

## 📝 Dificuldades encontradas
*As principais dificuldades para o projeto foi a falta de experiencia na linguagem utilizada, assim precisando de uma vasta pesquisa na area.*

---

## 📄 Licença
Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

### 📌 Autor
Desenvolvido por **Nicolas Monteiro**.
📩 Contato: [LinkedIn](https://www.linkedin.com/in/nicolas-monteiro-61170a240/)

