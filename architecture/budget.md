# POP - Calculadora de Orçamento e Economia

## Objetivo
Processar os cálculos financeiros de forma precisa e visual.

## Lógica do Orçamento
1. **Entrada:** Valor total (`budget_total`).
2. **Gasto Atual:** Soma dos preços dos produtos onde `comprado == true`.
3. **Saldo:** `budget_total - gasto_atual`.
4. **Alerta de Risco:**
   - Se `gasto_atual > (budget_total * 0.85)`, ativar estado de alerta (piscante).
5. **Visual:** Calcular `stroke-dashoffset` do anel SVG baseado no percentual.

## Lógica de Economia (Benchmark)
1. Para cada produto na lista de compras:
   - Identificar o `maior_preco` registrado entre os 4 mercados (ou histórico).
   - Se o produto foi comprado pelo `preco_praticado`, a economia é `maior_preco - preco_praticado`.
2. **Economia Total:** Somatório das economias individuais de todos os itens marcados como `comprado`.

## Visualização (Listagem)
- Highlight **Verde**: `preco == min(precos_do_produto)`.
- Highlight **Vermelho**: `preco == max(precos_do_produto)`.
