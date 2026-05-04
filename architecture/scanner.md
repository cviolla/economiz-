# POP - Scanner e Consulta de Produtos

## Objetivo
Descreve como o sistema deve capturar códigos de barras e enriquecer os dados via Open Food Facts.

## Fluxo de Execução
1. **Ativação da Câmera:** Solicitar permissão via `getUserMedia`. Usar o elemento `<video>` como viewfinder.
2. **Decodificação:** Utilizar QuaggaJS ou ZXing para processar frames em tempo real.
3. **Lookup API:**
   - URL: `https://world.openfoodfacts.org/api/v0/product/{barcode}.json`
   - Se `status == 1`: Extrair `product_name`, `brands`, `quantity`, `image_url`.
   - Se `status == 0`: Abrir formulário manual para o usuário.
4. **Preenchimento de Preço:** Exibir modal com os dados obtidos e campos para:
   - Valor (R$)
   - Mercado (Select entre os 4 cadastrados)
5. **Persistência:** Salvar no objeto de estado local e disparar sincronização.

## Casos de Borda
- **Câmera negada:** Exibir alerta e permitir apenas entrada manual do código de barras.
- **Sem internet:** Tentar ler o código, mas avisar que a busca automática falhou; permitir preenchimento manual total.
