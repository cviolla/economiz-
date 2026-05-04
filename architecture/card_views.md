# POP-005: Modos de Visualização Adaptativa

Este documento define os estilos e a lógica de troca entre os modos de visualização dos cards de produtos.

## 📐 Definição dos Modos

### 1. Normal (Padrão)
- **Imagem:** 80x80px com border-radius.
- **Informações:** Nome em destaque, marca e mercado.
- **Comparativo:** Grid de 2 colunas com preços nos 4 mercados.
- **Ações:** Botões de Comprar/Excluir visíveis.

### 2. Compacto
- **Imagem:** 50x50px.
- **Informações:** Tipografia reduzida (14px).
- **Comparativo:** Lista horizontal simples ou apenas o melhor preço.
- **Espaçamento:** Padding reduzido em 30%.

### 3. Supercompacto
- **Imagem:** Oculta (apenas ícone pequeno se necessário).
- **Layout:** Linha única (Fila). Nome e Preço no mesmo alinhamento.
- **Comparativo:** Oculto (mostra apenas o badge do melhor mercado).

## 🛠️ Implementação Técnica

1. **Estado:** Adicionar `viewMode: 'normal' | 'compact' | 'super'` ao objeto `state`.
2. **CSS:** Utilizar classes dinâmicas no container da lista (`.products-list.view-compact`).
3. **Persistência:** Salvar a escolha no `localStorage` via função `persist()`.

## 🚦 Critérios de Aceite
- [ ] O switcher deve estar visível no topo da aba Compras.
- [ ] A troca deve ser instantânea sem recarregar a página.
- [ ] O layout deve se manter responsivo em telas pequenas (iPhone SE).
