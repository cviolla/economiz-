# POP-008: Sistema de Detalhamento Interativo (Drill Down)

Este documento define as interações ao clicar nos cards de resumo do economiz+.

## 🖱️ Mapeamento de Cliques

### 1. Total Itens / Comprados
- **Ação:** Trocar aba ativa para `compras`.
- **Efeito:** Rolar a página para o topo.
- **Feedback:** Feedback tátil (vibration) se disponível.

### 2. Gasto Total
- **Ação:** Abrir `modal-drill-spending`.
- **Conteúdo:** 
    - Lista de Mercados (1 a 4).
    - Valor total gasto em cada um.
    - Percentual do orçamento que cada mercado representa.

### 3. Economia
- **Ação:** Abrir `modal-drill-savings`.
- **Conteúdo:** 
    - Ranking dos 5 produtos com maior diferença entre preço pago e preço máximo cadastrado.
    - Destaque do mercado onde a economia foi realizada.

## 🎨 Estilos de Interação
- Adicionar `cursor: pointer` em todos os cards da `summary-grid`.
- Adicionar efeito `:active { transform: scale(0.98); }` para simular um botão físico.
- Adicionar um ícone sutil de "seta" ou "toque" para indicar interatividade.

## 🚥 Critérios de Aceite
- [ ] Todos os 4 cards principais do resumo devem ser clicáveis.
- [ ] Modais de detalhamento devem ser responsivos e seguir o tema Dark Glassmorphism.
