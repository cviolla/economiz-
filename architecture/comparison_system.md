# POP-006: Sistema de Detalhes e Comparação

Este documento define a UX para a visão imersiva do produto e a lógica de comparação de preços.

## 📱 Visão de Detalhes (Full Screen)
- **Gatilho:** Clique em qualquer card de produto (exceto nos botões de ação).
- **Layout:** Modal que ocupa 100% da viewport (ou 95% com bordas arredondadas).
- **Conteúdo:**
    - Imagem grande do produto.
    - Nome, Marca e Código de Barras.
    - Histórico de preços (Lista ou Gráfico).
    - Botão de "Comparar" para fixar o produto em uma bandeja de comparação.

## 📊 Sistema de Comparação
- **Objetivo:** Permitir que o usuário veja lado a lado as variações de um mesmo item ou itens similares entre mercados.
- **Lógica:**
    - Quando dois ou mais produtos são selecionados para comparação, o sistema gera uma tabela de matriz.
    - **Eixos:** Produtos (Linhas) vs Mercados (Colunas).
    - O sistema deve destacar a célula de menor valor absoluto na matriz.

## 🛠️ Roadmap Técnico
1. Criar `modal-details` no HTML.
2. Adicionar listener de clique no card que dispara `showProductDetails(id)`.
3. Implementar a lógica de busca de "irmãos" (produtos com mesmo código de barras em mercados diferentes) para a visão de comparação.
