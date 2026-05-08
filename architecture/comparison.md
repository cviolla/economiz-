# POP-006: Sistema de Comparação de Cestas

Este documento descreve a lógica para comparar o custo total da lista de compras entre diferentes mercados.

## 🧠 Lógica de Cálculo

### 1. Mapeamento de Produtos Unique
- **Modo Código de Barras (Padrão):** Agrupar produtos pelo `codigo_barras`.
- **Modo Palavras-Chave (Novo):** Agrupar produtos por uma chave gerada a partir das palavras significativas do nome e marca (normalizadas, sem acentos, sem stop-words e no singular).

### 2. Cálculo da Cesta por Mercado
Para cada Mercado (0 a 3):
- Somar o preço de todos os produtos da lista (usando a melhor correspondência no mercado).
- Se um produto NÃO tiver preço cadastrado naquele mercado específico:
    - **Fallback:** Usar o "Preço Médio" dos outros mercados ou o preço do mercado onde ele foi originalmente cadastrado (como estimativa).
    - Marcar como "Preço Estimado" na UI.

### 3. Resultado Final
- Exibir um ranking:
    1. **Mercado Mais Barato:** Total R$ XXX
    2. **Mercado X:** Total R$ YYY (+ R$ Diff)
- Adicionar um seletor na UI para alternar entre "Código de Barras" e "Palavras-Chave".

## 🎨 Interface (UI)
- Inserir na aba **Resumo** um card de "Simulador de Cesta".
- Mostrar barras de progresso ou comparativos visuais entre os 4 mercados.
- Adicionar um badge "Melhor Escolha" no mercado vencedor.

## 🚥 Critérios de Aceite
- [ ] O sistema deve processar a comparação em tempo real ao adicionar/editar preços.
- [ ] O cálculo deve ignorar produtos que não possuem preço em nenhum mercado (itens sem preço).
- [ ] A diferença de preço deve ser exibida em Reais (R$) e Percentual (%).
