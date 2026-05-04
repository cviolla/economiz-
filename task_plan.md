# Task Plan - Economiz+

## 🎯 Objetivo
Implementar o projeto seguindo rigorosamente o protocolo V.L.A.E.G.

## 🟢 Fase 0: Inicialização (Protocolo 0)
- [x] Criar estrutura de pastas (`architecture/`, `tools/`, `.tmp/`)
- [x] Inicializar `task_plan.md`
- [x] Inicializar `findings.md`
- [x] Inicializar `progress.md`
- [x] Inicializar `gemini.md` (Constituição)

## 🏗️ Fase 1: V - Visão
- [x] Handshake de Descoberta realizado
- [x] Definir JSON Data Schema em `gemini.md`
- [x] Pesquisar melhores práticas para QuaggaJS

## ⚡ Fase 2: L - Link
- [x] Validar API Open Food Facts via `tools/api_handshake.js`
- [x] Validar inicialização do Supabase Client
- [x] Testar acesso à câmera no ambiente local

## ⚙️ Fase 3: A - Arquitetura
- [x] Criar POP em `architecture/scanner.md`
- [x] Criar POP em `architecture/sync.md`
- [x] Criar POP em `architecture/budget.md`

## ✨ Fase 4: E - Estilo
- [x] Implementar Layout Base (Dark Mode + Bento Grid)
- [x] Implementar Anel de Progresso SVG Dinâmico
- [x] Aplicar Glassmorphism nos cards de produtos

## 🗺️ Fase 6: Check-in Inteligente (Localização)
- [x] Criar POP em `architecture/checkin.md`
- [x] Atualizar Schema na Constituição (`gemini.md`)
- [x] Implementar integração com Leaflet.js e Nominatim API
- [x] Adicionar botão de "Check-in" na aba Mercados
- [x] Tratar permissões de Geolocalização e Fallback manual

## 🎨 Fase 7: Visualização Adaptativa (Cards)
- [x] Criar POP em `architecture/card_views.md`
- [x] Definir tokens de estilo para Normal, Compacto e Supercompacto
- [x] Implementar Switcher de visualização no Header da aba Compras
- [x] Adaptar função `renderProducts` para os 3 modos
- [x] Persistir escolha do usuário no `localStorage`

## 📊 Fase 8: Sistema de Comparação de Produtos
- [ ] Criar POP em `architecture/comparison.md`
- [ ] Implementar Algoritmo de "Cesta Otimizada"
- [ ] Criar UI de "Comparativo por Mercado" na aba Resumo
- [ ] Adicionar indicadores de "Preço Médio" e "Melhor Oportunidade"
