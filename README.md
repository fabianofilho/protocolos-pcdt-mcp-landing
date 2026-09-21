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

Abre em `http://localhost:4321/pcdt` (o `base` é `/pcdt`).

## Build

```bash
npm run build     # gera dist/
npm run preview
```

## Deploy

Destino pretendido: `https://mcp.iamed.cc/pcdt` (`site` + `base` em
`astro.config.mjs`). O deploy na Vercel e o domínio são configurados manualmente.

## Notas

- O repositório do projeto `protocolos-pcdt-mcp` é público, então os links de GitHub funcionam.
- O exemplo de `resumir_conduta` mostra apenas o formato do retorno: o resumo e a
  citação literal são produzidos em tempo de execução a partir do PDF real, e o
  campo `citacao_confere` indica se a citação existe mesmo no protocolo. Nenhum
  resumo ou citação foi fabricado para ilustrar.
- Não é fonte oficial do Ministério da Saúde nem da Conitec, e não substitui o
  julgamento clínico nem a leitura do protocolo completo.

## Licença

Apache-2.0.
