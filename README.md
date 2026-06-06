# Circuito Tere Verde Online - MVP Back-End

Plataforma digital para promover o ecoturismo em Teresopolis.

## Integrante

- Nome: Leandro Silva
- Curso: Desenvolvimento de Software
- Polo: Teresopolis

## Situacao-Problema

Situacao-Problema 1 - Circuito Tere Verde. Desenvolvimento de plataforma digital para acesso a informacoes sobre o Parque Nacional da Serra dos Orgaos, Parque Estadual dos Tres Picos e Parque Natural Municipal Montanhas de Teresopolis.

## Descricao do MVP

API REST com Node.js e Express conectada ao PostgreSQL. Permite consulta publica de trilhas, eventos e novidades, login seguro com JWT e gestao de disponibilidade pelo administrador.

## Tecnologias

- Node.js + Express
- PostgreSQL
- JWT (autenticacao)
- bcryptjs (criptografia)
- Railway (deploy)

## Links

- Site: https://leandrosilva20.github.io/tereverde-online-back-frontend/
- API: https://tereverde-online-back-frontend-production.up.railway.app/api/trilhas
- GitHub: https://github.com/Leandrosilva20/tereverde-online-back-frontend

## Estrutura

- src/ - codigo-fonte da API
- src/controllers/ - logica das rotas
- src/routes/ - definicao das rotas
- src/middlewares/ - autenticacao JWT
- src/models/ - conexao com banco de dados
- test/ - exemplos de requisicoes
- docs/ - requisitos e escopo
- server.js - ponto de entrada
- package.json - dependencias

## Como executar localmente

1. Clone o repositorio
2. Execute: npm install
3. Configure o arquivo .env com DATABASE_URL e JWT_SECRET
4. Execute: npm run dev

## Requisitos Funcionais

- RF01 - Visitantes consultam trilhas disponiveis
- RF02 - Visitantes consultam eventos programados
- RF03 - Visitantes consultam novidades dos parques
- RF04 - Administradores fazem login com email e senha
- RF05 - Administradores cadastram, editam e removem trilhas
- RF06 - Administradores cadastram, editam e removem eventos
- RF07 - Administradores cadastram, editam e removem novidades
- RF08 - Sistema indica disponibilidade de trilhas e eventos

## Requisitos Nao-Funcionais

- RNF01 - API responde em menos de 2 segundos
- RNF02 - Senhas criptografadas com bcryptjs
- RNF03 - Autenticacao com JWT expirando em 8 horas
- RNF04 - Sistema disponivel 24/7 na nuvem
- RNF05 - Codigo versionado no GitHub
- RNF06 - API segue padrao REST

## Escopo - O que o MVP nao faz

- Sem sistema de reservas de trilhas
- Sem notificacoes por email ou SMS
- Sem aplicativo mobile
- Sem integracao com mapas ou GPS
- Sem sistema de avaliacoes ou comentarios
- Sem painel de metricas ou relatorios
- Sem pagamentos ou cobracas
- Sem cadastro de visitantes
