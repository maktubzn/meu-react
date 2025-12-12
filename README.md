# Soso Music

Um projeto mobile‑first feito com carinho, focado em uma experiência romântica e pessoal: memórias, músicas e momentos.

## Visão Geral

- Mobile‑first com transições suaves e destaque em cobre/ruivo.
- Modal inicial “Sua biblioteca Soso”: clique em qualquer lugar para liberar a trilha.
- Áudio de fundo com autoplay, mudo e troca de faixa via “joinha”.
- Embeds do Spotify: exclusividade (toca um por vez) e pausa do fundo.
- Navbar fixa com drawer mobile; página de Reclamações com fundo animado.
- Calendário navegável com ênfase no dia 11 e mensagens contextuais.

## Como eu construí (passo a passo)

1. Base React (Vite) e componentes principais: `Hero`, `CardMusic`, `CardAlbum`, `Audio`, `Navbar`, `Calendar`, `Reclamacoes`, `Footer`.
2. Estilos globais (`src/style.css`) com variáveis de cor (cobre/ruivo), animações e media queries.
3. CardMusic virou lista vertical: cada embed cresce ao passar pelo centro, garantindo foco e exclusividade.
4. Áudio de fundo com autoplay, mudo e troca de faixa ao clicar no “joinha” do Footer.
5. Navbar fixa com drawer; Reclamações em glassmorphism com envio para WhatsApp.
6. Álbum com cards que entram dos lados ao rolar; seção extra de artistas.
7. Calendário navegável: 11 sempre em destaque; ao clicar em dias diferentes, abre um modal pequeno com mensagens. Ao avançar de Dezembro para Janeiro, mostra: “não insiste eu ainda vou persistir em voce”.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra `http://localhost:5173/` (ou a porta mostrada).

## Estrutura dos arquivos

- `src/App.jsx` – composição, modal inicial e roteamento por hash (`#/` e `#/reclamacoes`).
- `src/style.css` – paleta, animações, navbar, áudio, calendário e página de reclamações.
- `src/components/audio/Audio.jsx` – player de fundo.
- `src/components/nav/Navbar.jsx` – navbar com drawer mobile.
- `src/components/Reclamacoes.jsx` – formulário com envio via WhatsApp.
- `src/components/nav/Calendar.jsx` – calendário navegável (mobile‑friendly), destaque no dia 11 e mensagens por faixa de dia.
- `src/components/cards/CardMusic.jsx` – lista vertical com efeito de scroll; exclusividade de reprodução.
- `src/components/cards/CardAlbum.jsx` – cards que entram dos lados; foto, vídeo e blocos de artistas.
- `src/components/Footer.jsx` – rodapé com “joinha” para trocar a trilha do fundo.

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
- Interações com Spotify pausam o áudio de fundo e fazem tocar apenas um player por vez.
- No início, clique em qualquer lugar do modal para liberar a música.
- Clique no 11 para ver a mensagem especial; antes do 11, “antes desse dia era chatao sem voce”; depois do 11, “Agora tudo tem um tom de colorido...”
- Ao avançar de Dezembro para Janeiro, aparece: “não insiste eu ainda vou persistir em voce”.
- Em `Reclamações`, se o nome não começar com “S“, aparece um alerta (“voce é msm a soso?”), mas o envio é permitido; se começar com “S“, aparece “sabia que era voce” na página.

## Como me senti construindo

Foi uma experiência divertida e carinhosa: pensar nos detalhes, priorizar o celular, criar transições suaves e um clima romântico. Cada tela foi feita para causar aquela sensação de “meu universo particular”.
