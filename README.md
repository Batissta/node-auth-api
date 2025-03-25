# 🔒 API Node.js + MongoDB: Autenticação Segura com JWT e Bcrypt

Uma API RESTful com autenticação de usuários, desenvolvida em Node.js e MongoDB. **Projeto ideal para aprender fundamentos de back-end, segurança e integração com banco de dados!**<br>
Todo o passo a passo de criação e desenvolvimento desse projeto se encontra em meu canal do youtube! **Acesse: [youtube.com/@Francinaldob](https://www.youtube.com/@Francinaldob)**

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

## ✍🏻 Autor

<a><img src="https://gitlab.com/uploads/-/system/user/avatar/23003426/avatar.png" width="200"></a><br><br>

Olá, Sou **Francinaldo Batista** <br>

📍 **Localidade:** Campina Grande, Paraíba<br>
🎓 **Formação:** Sistemas de informação - UniFacisa, 4° Semestre<br>

Me encontre no **LinkedIn:**<br>
<a href="https://www.linkedin.com/in/francinaldobatista"><img src="https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin" width="100"></a>

## ✨ Funcionalidades
- **Cadastro e autenticação de usuários** (JWT)
- **Criptografia de senhas** com Bcrypt
- CRUD de recursos protegidos por token
- Configuração segura usando variáveis de ambiente (Dotenv)
- Integração profissional com MongoDB (Mongoose)

## 🛠️ Tecnologias
| Biblioteca      | Finalidade                          |
|-----------------|-------------------------------------|
| Express         | Servidor web e rotas                |
| Mongoose        | Conexão e modelos do MongoDB        |
| Nodemon         | Reinicialização automática (dev)    |
| Dotenv          | Gerenciamento de variáveis de ambiente |
| Bcrypt          | Criptografia de senhas              |
| JSON Web Token  | Autenticação stateless              |
| UUID            | Geração de IDs únicos               |

## 🚀 Começando

### Pré-requisitos
- Node.js (v18+)
- MongoDB (local ou Atlas)
- Postman/Insomnia (para testar endpoints)

### Instalação
```bash
# Clone o repositório
git clone [https://github.com/Batissta/node-auth-api.git](https://github.com/Batissta/node-auth-api.git)

# Instale as dependências
npm install

# Crie o arquivo .env (veja o exemplo abaixo)
cp .env.example .env
```

### Configuração do Ambiente (.env)
```env
PORT=3000
MONGODB_URI=sua_uri_mongodb
```

### Executando a API
```bash
# Modo desenvolvimento (com Nodemon)
npm run dev
```

## 📡 Endpoints Principais

### Autenticação
| Método | Endpoint         | Descrição               | Exemplo de Body                  |
|--------|------------------|-------------------------|-----------------------------------|
| POST   | /usuarios   | Registra novo usuário   | `{ "apelido": "seuapelidomaiscriativo", "idade":19, "senha": "***" }` |
| GET   | /usuarios      | Lista todos os usuários criados          | `não é necessário` |


## 🔐 Boas Práticas de Segurança
- **Senhas nunca armazenadas em texto puro** (hash com Bcrypt)
- Tokens JWT com expiração e assinatura criptografada
- Variáveis sensíveis isoladas em `.env`
- IDs imutáveis gerados com UUID

## 🤝 Como Contribuir
Deixa uma estrela no repositório! Depois disso:
1. Faça um fork do projeto
2. Crie sua branch (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m "Add nova funcionalidade Co-authored-by: Batissta <francinaldofilho05@gmail.com>"`)
5. Push para a branch (`git push origin feature/nova-funcionalidade`)
6. Abra um Pull Request

## 📄 Licença
Este projeto está sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

---

**Feito por _[Francinaldo Batista]_**  
📺 **Assista à série completa no YouTube:** [Youtube ->](https://youtu.be/fCQfRp_ME80?si=BcDL40gtHVuT0sDX)
