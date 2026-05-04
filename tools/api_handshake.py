import requests
import sys

def test_openfoodfacts(barcode):
    print(f"[*] Testando código de barras: {barcode}")
    url = f"https://world.openfoodfacts.org/api/v0/product/{barcode}.json"
    try:
        response = requests.get(url, timeout=10)
        if response.status_code == 200:
            data = response.json()
            if data.get('status') == 1:
                product = data.get('product', {})
                name = product.get('product_name', 'N/A')
                brand = product.get('brands', 'N/A')
                print(f"[SUCCESS] Produto encontrado: {name} ({brand})")
                return True
            else:
                print("[INFO] Produto não encontrado na base OFF.")
                return True # API respondeu, teste passou
        else:
            print(f"[ERROR] API retornou status {response.status_code}")
            return False
    except Exception as e:
        print(f"[FATAL] Erro na conexão: {e}")
        return False

if __name__ == "__main__":
    # Exemplo: Coca-cola (7891000053508)
    test_barcode = "7891000053508"
    if test_openfoodfacts(test_barcode):
        sys.exit(0)
    else:
        sys.exit(1)
