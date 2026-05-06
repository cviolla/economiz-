# UI-SPEC - Dashboard Moderno (Refatoração Visual)

## 1. Visão Geral
Este documento estabelece o contrato visual para a nova interface do economiz+, baseada na referência "Dashboard Moderno". O objetivo é adotar um visual predominantemente **Light Mode**, com cantos arredondados generosos, uso de gradientes e cores pastéis vibrantes, além de tipografia moderna para maximizar a densidade de informação sem perder a clareza.

## 2. Tipografia
- Fonte Principal: `Inter` ou `Roboto`.
- Fonte Secundária (Marcas/Títulos grandes): `Outfit`.
- Pesos:
  - Títulos e Valores Financeiros: 700 (Bold) / 800 (ExtraBold).
  - Texto de suporte: 400 (Regular).
  - Labels Secundárias: 600 (SemiBold).

## 3. Cores e Gradientes (Design System)

### Fundo e Estrutura
- **Background Principal:** `#F5F5F7` (Cinza muito claro)
- **Background Nav/Modais:** `rgba(255, 255, 255, 0.95)` com backdrop blur.
- **Background Cards Padrão:** `#FFFFFF` com drop shadow leve.

### Cores de Cards (Resumo)
- **Card Rosa Pastel (Gasto Total):** `rgba(255, 182, 193, 0.3)` ou equivalente CSS (`#FFE5E5`)
- **Card Amarelo Pastel (Total Itens):** `#FFF0D4`
- **Card Verde Pastel (Economia):** `#E5FFE5`
- **Card Roxo Pastel (Comprados):** `#E5E5FF`

### Cores de Cards de Ranking (Destacados)
- **Top 1 (Rosa/Vermelho Gradiente):** `linear-gradient(135deg, #FF4B72, #FF7B93)`
- **Top 2 (Azul Gradiente):** `linear-gradient(135deg, #6B66FF, #8B86FF)`

### Texto e Ícones
- **Texto Principal (Títulos/Valores escuros):** `#1A1A1F`
- **Texto Secundário (Labels):** `#6E6E73`
- **Ações Principais:** `#E5B800` (Amarelo) para botões de destaque, com texto `#000000`.

## 4. Componentes Estruturais

### 4.1 Header (Top Bar)
- Fundo transparente ou branco que se mistura ao background geral.
- Ícone do menu ou ações à esquerda e à direita, sempre com cantos arredondados.
- Logo centralizada.

### 4.2 Cards e Sombras
- **Border Radius Geral:** `20px` a `24px` para cards de resumo, `16px` para botões e modais.
- **Sombra Padrão (Drop Shadow):** `box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);`
- **Paddings:** `15px` a `20px` internamente, mantendo respiro (breathing room).

### 4.3 Nav Bar (Bottom Navigation)
- Flutuante no final da tela.
- Cor de fundo: Branco sólido ou levemente translúcido.
- Sombra: `box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.05);`

## 5. Micro-interações
- Hover e active states reduzem levemente o tamanho (`transform: scale(0.98)`).
- Botões de nav bar destacam o ícone da aba ativa.
