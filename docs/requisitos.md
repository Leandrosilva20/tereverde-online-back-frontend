# 📋 Requisitos e Escopo — Circuito Terê Verde Online

## ✅ Requisitos Funcionais

| ID | Descrição |
|----|-----------|
| RF01 | O sistema deve permitir que visitantes consultem trilhas disponíveis |
| RF02 | O sistema deve permitir que visitantes consultem eventos programados |
| RF03 | O sistema deve permitir que visitantes consultem novidades dos parques |
| RF04 | O sistema deve permitir que administradores façam login com email e senha |
| RF05 | O sistema deve permitir que administradores cadastrem trilhas |
| RF06 | O sistema deve permitir que administradores editem trilhas |
| RF07 | O sistema deve permitir que administradores removam trilhas |
| RF08 | O sistema deve permitir que administradores cadastrem eventos |
| RF09 | O sistema deve permitir que administradores editem eventos |
| RF10 | O sistema deve permitir que administradores removam eventos |
| RF11 | O sistema deve permitir que administradores cadastrem novidades |
| RF12 | O sistema deve permitir que administradores editem novidades |
| RF13 | O sistema deve permitir que administradores removam novidades |
| RF14 | O sistema deve indicar disponibilidade de trilhas e eventos |
| RF15 | O sistema deve exibir datas e horários dos eventos |

---

## ⚙️ Requisitos Não-Funcionais

| ID | Descrição |
|----|-----------|
| RNF01 | A API deve responder em menos de 2 segundos |
| RNF02 | As senhas dos administradores devem ser criptografadas com bcryptjs |
| RNF03 | A autenticação deve usar tokens JWT com expiração de 8 horas |
| RNF04 | O sistema deve estar disponível 24/7 via nuvem (Railway) |
| RNF05 | O código deve estar versionado no GitHub |
| RNF06 | A API deve seguir o padrão REST |
| RNF07 | O sistema deve suportar múltiplos acessos simultâneos |
| RNF08 | Os dados devem ser armazenados em banco de dados relacional (PostgreSQL) |

---

## 🚫 Escopo — O que o MVP não faz

| # | Fora do Escopo |
|---|----------------|
| 1 | Não possui sistema de reservas de trilhas |
| 2 | Não envia notificações por email ou SMS |
| 3 | Não possui aplicativo mobile |
| 4 | Não integra mapas ou GPS |
| 5 | Não possui sistema de avaliações ou comentários de visitantes |
| 6 | Não possui painel de métricas ou relatórios |
| 7 | Não realiza pagamentos ou cobranças |
| 8 | Não possui sistema de cadastro de visitantes |
| 9 | Não possui suporte a múltiplos idiomas |
| 10 | Não possui integração com redes sociais |
