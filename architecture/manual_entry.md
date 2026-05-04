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
   - **Imagem do Produto (Opcional):** Botão para tirar foto com a câmera do dispositivo.
3. **Identificador Único:** 
   - Se houver código de barras, utilizá-lo.
   - Se não houver, gerar um UUID ou timestamp precedido de 'MANUAL-'.
4. **Captura de Imagem:**
   - O modal exibe uma área clicável de imagem (thumbnail).
   - Ao tocar, abre a câmera do dispositivo (`capture="environment"`).
   - A foto é redimensionada para max 400x400px e convertida para base64 (JPEG, qualidade 0.7).
   - A imagem base64 é armazenada no campo `imagem_url` do produto.
   - Se o produto já tem imagem da API, o botão de câmera aparece como overlay para substituição opcional.
5. **Imagem na Lista de Produtos:**
   - Cards de produtos sem imagem exibem um ícone de câmera clicável.
   - Ao clicar, o usuário pode tirar foto e atualizar o produto.
6. **Persistência:** Adicionar ao estado `products` e salvar no LocalStorage/Supabase.

## Limites de Armazenamento
- Imagens são comprimidas para JPEG com qualidade 0.7 e redimensionadas para max 400px.
- Estimativa: ~20-40KB por imagem. Com 100 produtos = ~2-4MB (dentro do limite de 5MB do localStorage).
- Fallback: Se localStorage estiver cheio, alertar o usuário.

## Casos de Borda
- **Nome Vazio:** Impedir salvamento e alertar o usuário.
- **Preço Zero:** Impedir salvamento.
- **Câmera indisponível:** Exibir fallback para galeria de imagens.
- **localStorage cheio:** Alertar e manter produto sem imagem.
