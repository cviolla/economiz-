# Gemini - A Constituição do Projeto economiz+

## 📜 Regras Comportamentais
- Seguir estritamente o protocolo **V.L.A.E.G.**
- Priorizar confiabilidade sobre velocidade.
- Nunca adivinhar lógica de negócios.
- Lógica de negócios deve ser determinística (Scripts Node.js em `tools/`).
- Mudanças de lógica exigem atualização de POPs em `architecture/` primeiro.

## 🏗️ Invariantes Arquiteturais
- **Camada 1 (Architecture):** POPs em Markdown.
- **Camada 2 (Navegação):** Raciocínio e roteamento do Piloto (AI).
- **Camada 3 (Tools):** Scripts Node.js atômicos e testáveis.
- **Temporários:** Uso obrigatório de `.tmp/` para arquivos intermediários.

## 📊 Data Schemas (Supabase/LocalStorage)

### Tabela: `mercados`
```json
{
  "id": "uuid (pk)",
  "nome": "text",
  "lat": "numeric",
  "long": "numeric"
}
```

### Tabela: `produtos`
```json
{
  "id": "uuid (pk)",
  "codigo_barras": "text",
  "nome": "text",
  "marca": "text",
  "imagem_url": "text",
  "mercado_id": "uuid (fk)",
  "preco": "numeric",
  "comprado": "boolean",
  "data_cadastro": "timestamp"
}
```

### Tabela: `orcamento`
```json
{
  "id": "uuid (pk)",
  "valor_total": "numeric",
  "user_id": "text"
}
```

## 🎨 Design System (Aesthetics)
- **Tema:** Suporte a Dark Mode Profundo (Base: `#0F0F12`) e Light Mode (Base: `#F5F5F7`).
- **Cards:** Glassmorphism adaptativo (Dark: `rgba(255, 255, 255, 0.05)`, Light: `rgba(0, 0, 0, 0.03)`).
- **Cores de Destaque:** Amarelo Vibrante (`#FFCC00`) para ações principais, Verde (`#00E676`/`#00C853`) para menor preço, Vermelho (`#FF5252`/`#D32F2F`) para maior preço.
- **Tipografia:** Inter ou Roboto (Sans-serif moderna).
- **Interações:** Micro-animações de hover, transições suaves entre abas e troca de tema.

## 🛠️ Log de Manutenção
- **2026-05-04:** Inicialização do sistema e definição da constituição inicial.
