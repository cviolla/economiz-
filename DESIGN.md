---
name: economiz+
description: Comparador inteligente de preços com alma vibrante
colors:
  primary: "#FFCC00"
  success: "#00E676"
  neutral-bg: "#0F0F12"
  neutral-text: "#FFFFFF"
  bg-deep-light: "#F5F5F7"
  bg-deep-dark: "#0F0F12"
typography:
  display:
    fontFamily: "Outfit, sans-serif"
    fontWeight: 800
    lineHeight: 1.1
  body:
    fontFamily: "Inter, sans-serif"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  lg: "24px"
  md: "12px"
spacing:
  md: "16px"
  sm: "12px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#000000"
    rounded: "12px"
    padding: "10px 15px"
  card-product:
    backgroundColor: "{colors.bg-deep-dark}"
    rounded: "{rounded.lg}"
    padding: "12px"
---

# Design System: economiz+

## 1. Overview

**Creative North Star: "Economia Vibrante"**

O economiz+ é um ecossistema visual focado na eficiência técnica e no prazer da descoberta. O design equilibra a precisão de uma ferramenta de comparação com a energia de uma marca premium, utilizando contrastes fortes e uma paleta que comunica agilidade e valor.

A filosofia estética rejeita o aspecto "poluído" dos encartes tradicionais e o "sóbrio" dos aplicativos corporativos, optando por uma interface viva, onde o **glassmorphism** e as sombras atmosféricas criam uma hierarquia clara e moderna.

**Key Characteristics:**
- **Agilidade Visual**: Transições rápidas e feedback imediato.
- **Hierarquia Atmosférica**: Camadas separadas por blurs profundos e sombras suaves.
- **Contraste de Decisão**: Cores vibrantes usadas para destacar o que realmente importa: a economia.

## 2. Colors

A paleta é dominada pelo Amarelo Economiz+, uma cor que transmite energia e alerta o usuário para as melhores oportunidades de compra.

### Primary
- **Amarelo Economiz+** (#FFCC00): Usado em ações principais, logos e destaques de preço. Transmite agilidade e valor.

### Success
- **Verde Vitória** (#00E676): Indica o menor preço, sucesso no escaneamento e progresso positivo do orçamento.

### Neutral
- **Deep Slate** (#0F0F12): O fundo base para o modo escuro, proporcionando profundidade sem ser um preto puro.
- **Pure Cloud** (#FFFFFF): Usado para cards no modo claro e textos principais no modo escuro.
- **Dim Gray** (#6E6E73): Cor secundária para textos de apoio e metadados.

### Dashboard Pastels (Semantic)
Utilizadas exclusivamente nos `Summary Boxes` para diferenciar métricas de forma suave.
- **Economia Pink** (#FFE5E5): Para débitos ou alertas de gasto.
- **Aviso Yellow** (#FFF9E5): Para orçamentos em andamento.
- **Sucesso Green** (#E8F5E9): Para economias e saldos positivos.
- **Info Purple** (#EDE7F6): Para metadados gerais e contagens.

### Named Rules
**The 10% Gold Rule.** O Amarelo Economiz+ é usado em no máximo 10% da tela para garantir que seu impacto seja preservado e guie o olhar para a ação principal.

## 3. Typography

O sistema utiliza uma combinação de **Outfit** para impacto e personalidade nos títulos, e **Inter** para legibilidade máxima nos dados e corpo de texto.

**Display Font:** Outfit
**Body Font:** Inter

### Hierarchy
- **Display** (800, 28px, 1.1): Usado nos valores de orçamento e títulos de seções principais.
- **Headline** (700, 20px, 1.2): Usado na marca e cabeçalhos de modais.
- **Title** (600, 16px, 1.4): Usado em nomes de produtos nos cards.
- **Body** (400, 13px, 1.5): Usado em descrições e textos informativos.
- **Label** (800, 9px, uppercase): Usado em metadados secundários e versões de sistema.

## 4. Elevation

O economiz+ utiliza uma elevação **Atmosférica**. Em vez de bordas rígidas, a profundidade é comunicada através de `backdrop-filter` e sombras difusas que fazem os elementos parecerem flutuar sobre o conteúdo.

### Shadow Vocabulary
- **Atmospheric Glow** (`--shadow-atm`): `0 8px 24px rgba(0,0,0,0.04)` no modo claro e `rgba(0,0,0,0.2)` no modo escuro. Cria uma separação suave e moderna.
- **Scanner Glow** (0 0 20px rgba(255, 204, 0, 0.2)): Usado para destacar o campo de visão do scanner de código de barras.

## 5. Components

### Buttons
- **Shape:** Cantos suavemente arredondados (12px).
- **Primary (btn-buy):** Fundo Amarelo Economiz+ com texto preto. Usado para a ação principal de cada card.
- **Hover:** Brilho aumentado (filter: brightness(1.1)) e leve subida (translateY(-1px)).

### Cards
- **Product Card:** Bordas generosas (24px), padding interno de 12px. Utiliza um background que se adapta ao tema (Light/Dark).
- **Summary Box:** Utiliza cores pastéis (Pink, Yellow, Green, Purple) para categorizar diferentes métricas financeiras.

### Navigation
- **App Nav:** Uma barra flutuante com blur (glassmorphism) e cantos arredondados (30px), centralizada na base da tela.

## 6. Do's and Don'ts

### Do:
- **Do** usar o raio de 24px para cards principais para manter a linguagem "bonita" e amigável.
- **Do** priorizar o contraste do Amarelo Economiz+ sobre o fundo Deep Slate.
- **Do** utilizar micro-animações de entrada (fadeIn + translateY) para novas seções.

### Don't:
- **Don't** usar bordas pretas puras ou sombras pesadas que tornem o design "corporativo".
- **Don't** poluir a interface com muitos elementos de texto; deixe o design respirar.
- **Don't** usar cores sóbrias demais para indicadores de sucesso; a economia deve ser celebrada.
