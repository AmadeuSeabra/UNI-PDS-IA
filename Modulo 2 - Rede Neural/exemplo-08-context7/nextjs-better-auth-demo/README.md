# Demo Next.js + Better Auth + GitHub OAuth + SQLite

Demo extremamente simples de autenticação com GitHub usando Better Auth, Next.js (App Router) e SQLite.

## 🚀 Funcionalidades

- ✅ Login/Signup via GitHub OAuth
- ✅ Página Home mostrando estado da sessão
- ✅ Persistência local com SQLite
- ✅ UI bonita com Tailwind CSS

# Demo Next.js + Better Auth

Aplicação mínima com login GitHub, estado da sessão na página inicial e persistência local em SQLite.

## Requisitos

- Node.js 20.9 ou superior e npm
- Uma GitHub OAuth App

Configure a OAuth App com a URL inicial `http://localhost:3000` e callback `http://localhost:3000/api/auth/callback/github`. Copie `.env.example` para `.env.local` e preencha o Client ID, Client Secret e um segredo aleatório para Better Auth.

## Executar

```bash
npm install
npx @better-auth/cli migrate
npm run dev
```

Abra http://localhost:3000. A página inicial mostra se há uma sessão ativa; `/login` inicia o login com GitHub e, após a autorização, retorna à página inicial. Use “Sair” para encerrar a sessão.

O banco `better-auth.sqlite` é criado no diretório do projeto. As variáveis de ambiente e o banco local não devem ser publicados.
```env
