# 🏎️ Formula 1 API

Uma API REST leve, rápida e tipada desenvolvida com **Fastify** e **TypeScript**, fornecendo dados sobre as equipes e pilotos da temporada de Fórmula 1.

---

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Fastify](https://fastify.dev/) - Framework web de alta performance
- [@fastify/cors](https://github.com/fastify/fastify-cors) - Habilitação de CORS (Cross-Origin Resource Sharing)
- [tsx](https://github.com/privatenumber/tsx) / [ts-node-dev](https://github.com/wclr/ts-node-dev)

---

## 📦 Instalação e Configuração

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git](https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git)
   cd NOME_DO_REPOSITORIO
   ```

2. **Instale as dependências:**
```bash
npm install

```


*Dependências principais:*
```bash
npm install fastify @fastify/cors
npm install -D typescript @types/node tsx

```


3. **Inicie o servidor de desenvolvimento:**
```bash
npm run start:dev
# ou diretamente com tsx:
tsx --env-file=.env src/server.ts
```


O servidor iniciará por padrão na porta **3636**: `http://localhost:3636`

---

## 🛣️ Rotas da API (Endpoints)

A API possui suporte nativo a CORS (`origin: "*"`) e retorna respostas em formato JSON.

### 🏁 Equipes (`/teams`)

| Método | Endpoint | Descrição |
| --- | --- | --- |
| `GET` | `/teams` | Retorna a lista com todas as equipes |
| `GET` | `/teams/:name` | Retorna os detalhes de uma equipe pelo nome |

#### Exemplos de requisição:

* `GET http://localhost:3636/teams`
* `GET http://localhost:3636/teams/Ferrari`
* `GET http://localhost:3636/teams/Red%20Bull%20Racing`

---

### 🏎️ Pilotos (`/drivers`)

| Método | Endpoint | Descrição |
| --- | --- | --- |
| `GET` | `/drivers` | Retorna a lista completa com todos os pilotos |
| `GET` | `/drivers/:id` | Retorna os detalhes de um piloto pelo seu ID numérico |

#### Exemplos de requisição:

* `GET http://localhost:3636/drivers`
* `GET http://localhost:3636/drivers/18`

---

## ⚠️ Códigos de Status HTTP

* `200 OK`: Requisição realizada com sucesso.
* `404 Not Found`: Equipe ou piloto não encontrado (`{ "message": "Team Not Found" }` ou `{ "message": "Driver Not Found" }`).

---

## 📄 Licença

Este projeto está sob a licença [MIT](https://www.google.com/search?q=LICENSE).

