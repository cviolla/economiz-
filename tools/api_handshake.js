const https = require('https');

const testBarcode = '7891000053508'; // Coca-cola
const url = `https://world.openfoodfacts.org/api/v0/product/${testBarcode}.json`;

console.log(`[*] Testando conexão com Open Food Facts: ${testBarcode}...`);

https.get(url, (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
        try {
            const json = JSON.parse(data);
            if (json.status === 1) {
                console.log(`[SUCCESS] Produto encontrado: ${json.product.product_name} (${json.product.brands})`);
                process.exit(0);
            } else {
                console.log('[INFO] API respondeu, mas produto não encontrado. Conectividade OK.');
                process.exit(0);
            }
        } catch (e) {
            console.error(`[ERROR] Falha ao parsear JSON: ${e.message}`);
            process.exit(1);
        }
    });
}).on('error', (err) => {
    console.error(`[FATAL] Erro de conexão: ${err.message}`);
    process.exit(1);
});
