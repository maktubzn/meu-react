# Soso Music

Um projeto mobile‑first feito com carinho, focado em uma experiência romântica e pessoal: memórias, músicas e momentos.

## Visão Geral

- Tema romântico com paleta em tons de rosa e lilás.
- Áudio de fundo com autoplay, mudo e volume responsivo.
- Players do Spotify que pausam o áudio de fundo ao interagir.
- Navbar com blur rosa; drawer em mobile com “Reclamações”.
- Página de Reclamações com fundo animado e envio para WhatsApp.
- Calendário com destaque fixo no dia 11 e mês travado em Dezembro.

## Como eu construí (passo a passo)

1. Criei a base do app em React (Vite) e estruturei componentes: `Hero`, `CardMusic`, `CardAlbum`, `Audio`, `Navbar`, `Calendar`, `Reclamacoes`.
2. Modelei estilos globais (`src/style.css`) com variáveis de cores e animações, priorizando telas de celular (clamp, media queries, containers).
3. Adaptei a tipografia e sombras para “liberar paixão nos olhos”: glows suaves e fundos com gradiente animado.
4. Implementei o áudio de fundo:
   - Autoplay com desbloqueio no primeiro toque.
   - Botão de mudo confiável e volume responsivo.
   - Pausa automática quando qualquer player do Spotify recebe interação.
5. Criei a Navbar fixa com blur rosa; no mobile, drawer lateral com overlay.
6. Construi a página de Reclamações com visual “glass”, inputs e envio para WhatsApp.
7. Reescrevi o calendário para não depender de libs externas; destaquei sempre o dia 11 e travei o mês em Dezembro.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra `http://localhost:5173/` (ou a porta mostrada).

## Estrutura dos arquivos

- `src/App.jsx` – composição e roteamento por hash (`#/` e `#/reclamacoes`).
- `src/style.css` – paleta, animações, navbar, áudio, calendário e página de reclamações.
- `src/components/audio/Audio.jsx` – player de fundo.
- `src/components/nav/Navbar.jsx` – navbar com drawer mobile.
- `src/components/Reclamacoes.jsx` – formulário com envio via WhatsApp.
- `src/components/nav/Calendar.jsx` – calendário simples (mobile‑friendly), travado em Dezembro, destaque no dia 11.
- `src/components/cards/CardMusic.jsx` – embeds do Spotify com pausa do áudio de fundo.
- `src/components/cards/CardAlbum.jsx` – cards visuais “tortos”, com foto e vídeo de exemplo.

## Deploy no GitHub

1. Instale o Git para Windows: https://git-scm.com/download/win
2. No diretório do projeto, execute:

```bash
git init
git add -A
git commit -m "feat: initial site setup and features"
git branch -M main
git remote add origin https://github.com/maktubzn/sosotest.git
git push -u origin main
```

Depois disso, o repositório ficará disponível em:

`https://github.com/maktubzn/sosotest`

## Notas de uso

- Em mobile, o autoplay pode exigir uma interação inicial. O primeiro toque libera a reprodução suave.
- O botão “Som/Mudo” altera `audio.muted` e aplica um fade ao desmutar.
- Interações com Spotify pausam o áudio de fundo para evitar sobreposição.
- Em `Reclamações`, se o nome não começar com “S“, aparece um alerta (“voce é msm a soso?”), mas o envio é permitido; se começar com “S“, aparece “sabia que era voce” na página.

## Como me senti construindo

Foi uma experiência divertida e carinhosa: pensar nos detalhes, priorizar o celular, criar transições suaves e um clima romântico. Cada tela foi feita para causar aquela sensação de “meu universo particular”.

