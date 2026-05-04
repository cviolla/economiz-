# POP-004: Check-in Inteligente de Mercados

## 🎯 Objetivo
Permitir que o usuário registre um mercado baseado em sua localização física, automatizando o preenchimento do nome e armazenando coordenadas geográficas.

## 🛠️ Stack Técnica
- **Library:** Leaflet.js (v1.9.4) via CDN.
- **Provider:** OpenStreetMap (Tiles) + Nominatim (Search API).
- **API Browser:** `navigator.geolocation`.

## 🔄 Fluxo de Execução
1. **Ativação:** Usuário clica em "Check-in" ao lado de um campo de mercado.
2. **Geolocalização:** O app solicita acesso às coordenadas (Lat/Long).
3. **Busca (Nominatim):** Realiza uma busca reversa filtrando por categorias:
   - `amenity=supermarket`
   - `shop=supermarket`
   - `shop=convenience`
4. **Exibição:** Abre um modal com um mapa e marcadores dos 5 mercados mais próximos.
5. **Seleção:** Usuário toca no marcador correto.
6. **Retorno:** O nome do mercado é injetado no input e as coordenadas são salvas no estado global.

## ⚠️ Tratamento de Exceções
- **Permissão Negada:** Exibir alerta amigável e permitir busca manual por nome de rua/bairro no mapa.
- **Sem Internet:** Usar fallback para o modo manual (texto puro) já existente.
- **Sem Mercados Próximos:** Permitir que o usuário arraste o marcador para definir um ponto novo.
