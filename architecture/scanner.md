# POP - Scanner e Consulta de Produtos

## Objetivo
Descreve como o sistema deve capturar códigos de barras e QR Codes e enriquecer os dados via Open Food Facts (se for código de produto comercial).

## Fluxo de Execução
1. **Ativação da Câmera:** Solicitar permissão via `getUserMedia`. Usar o elemento `<video>` como viewfinder.
2. **Decodificação:** Utilizar QuaggaJS ou ZXing/Html5Qrcode para processar frames em tempo real.
3. **Lookup API:**
   - URL: `https://world.openfoodfacts.org/api/v0/product/{code}.json`
   - Se `status == 1`: Extrair `product_name`, `brands`, `quantity`, `image_url`.
   - Se `status == 0` (incluindo leitura de QR Code que não é EAN): Abrir formulário manual para o usuário com o código lido no campo.
4. **Preenchimento de Preço:** Exibir modal com os dados obtidos e campos para:
   - Valor (R$)
   - Mercado (Select entre os cadastrados)
5. **Persistência:** Salvar no objeto de estado local e disparar sincronização.

## Casos de Borda
- **Câmera negada:** Exibir alerta e permitir apenas entrada manual do código de barras/QR Code.
- **Sem internet:** Tentar ler o código, mas avisar que a busca automática falhou; permitir preenchimento manual total.
