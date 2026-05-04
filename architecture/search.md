# POP-007: Sistema de Busca Inteligente

Este documento descreve as diretrizes para a funcionalidade de busca dentro do economiz+.

## 🛠️ Especificação Técnica

### 1. Algoritmo de Filtro
- A busca deve ser feita sobre o array `state.products`.
- Campos pesquisáveis: `nome`, `marca`, `codigo_barras`.
- **Normalização:** Converter strings para minúsculo e remover acentos para comparação.
- **Debounce:** Aplicar um pequeno atraso (150ms) para evitar re-renderizações excessivas em listas gigantes.

### 2. Interface (UI)
- Input fixo no topo da seção de produtos.
- Ícone de lupa (`search`) à esquerda.
- Botão "Limpar" (`x`) visível apenas quando houver texto.
- Transição suave (fade) ao ocultar itens que não condizem com a busca.

### 3. Comportamento de Estados Vazios
- Se a busca não retornar nada: exibir ilustração de "Nenhum resultado" e botão para limpar a busca.

## 🚥 Critérios de Aceite
- [ ] Filtrar itens instantaneamente ao digitar.
- [ ] Funcionar em conjunto com os Modos de Visualização (Normal/Compacto/Super).
- [ ] Manter o estado da busca ao alternar entre abas (opcional, mas recomendado).
