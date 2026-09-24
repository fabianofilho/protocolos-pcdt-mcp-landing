# protocolos-pcdt-mcp-landing

Landing page do
[`protocolos-pcdt-mcp`](https://github.com/fabianofilho/protocolos-pcdt-mcp), um
servidor MCP que consulta os PCDTs vigentes do Ministério da Saúde/Conitec e
resume a conduta para um contexto clínico, com um LLM local. Um projeto
[IA.med](https://iamed.cc), da mesma família do `anvisa-mcp` e do `radar-cfm-mcp`.

Página estática, sem backend e sem coleta de dados de visitante.

## Stack

- [Astro](https://astro.build) (saída estática)
- [Tailwind CSS](https://tailwindcss.com) via `@astrojs/tailwind`
- Realce de código com Shiki (build-time)
- JavaScript mínimo (apenas o botão de copiar código)

## Rodar localmente

```bash
npm install
npm run dev
```

Abre em `http://localhost:4321/mcps/pcdt` (o `base` é `/mcps/pcdt`).

## Build

```bash
npm run build     # gera dist/
npm run preview
```

## Deploy

A página é servida em `https://iamed.cc/mcps/pcdt` (`site` + `base` em
`astro.config.mjs`), pela Vercel. Este repositório não tem integração de Git com a Vercel
nem GitHub Pages: nada é publicado automaticamente no merge. O deploy é manual e o projeto
da Vercel que serve esse caminho é configurado fora deste repositório.

## Notas

- O repositório do projeto `protocolos-pcdt-mcp` é público, então os links de GitHub funcionam.
- O servidor é só local, por stdio. A página não aponta para nenhum serviço hospedado.
- Os exemplos de `consultar_protocolo` e `resumir_conduta` em `Tools.astro` são saídas
  reais da v0.1.0 do `protocolos-pcdt-mcp`, rodadas em 24/09/2026 numa cópia da base
  local já migrada. Nenhum resumo ou citação foi escrito à mão. Ao mudar o formato das
  tools, troque os exemplos por uma saída nova.
- Não é fonte oficial do Ministério da Saúde nem da Conitec, e não substitui o
  julgamento clínico nem a leitura do protocolo completo.

## Licença

Apache-2.0.
