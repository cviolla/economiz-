# POP - Inserção Manual de Produtos

## Objetivo
Permitir a inclusão de produtos que não possuem código de barras ou que não foram encontrados na base de dados do Open Food Facts.

## Fluxo de Execução
1. **Gatilho:** Usuário clica em "Manual" -> "Cadastrar Sem Código" ou a busca por código de barras falha.
2. **Formulário de Entrada:** Exibir modal contendo:
   - Nome do Produto (Obrigatório)
   - Marca (Opcional)
   - Preço (Obrigatório, máscara monetária)
   - Mercado (Seleção entre mercados cadastrados)
3. **Identificador Único:** 
   - Se houver código de barras, utilizá-lo.
   - Se não houver, gerar um UUID ou timestamp precedido de 'MANUAL-'.
4. **Imagem:** Usar um placeholder padrão de produto se não houver imagem.
5. **Persistência:** Adicionar ao estado `products` e salvar no LocalStorage/Supabase.

## Casos de Borda
- **Nome Vazio:** Impedir salvamento e alertar o usuário.
- **Preço Zero:** Impedir salvamento.
