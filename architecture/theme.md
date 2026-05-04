# POP - Gerenciamento de Temas (Light/Dark Mode)

Este documento define o padrão para a implementação e manutenção dos modos claro e escuro no sistema economiz+.

## 🎨 Design System

O sistema utiliza variáveis CSS para garantir consistência entre os temas. O tema padrão é o **Dark Mode Profundo**.

### Variáveis de Cor

| Variável | Dark Mode (Padrão) | Light Mode |
| :--- | :--- | :--- |
| `--bg-deep` | `#0F0F12` | `#F5F5F7` |
| `--text-main` | `#FFFFFF` | `#0F0F12` |
| `--text-dim` | `#A0A0A5` | `#6E6E73` |
| `--bg-card` | `rgba(255, 255, 255, 0.05)` | `rgba(0, 0, 0, 0.03)` |
| `--bg-card-hover` | `rgba(255, 255, 255, 0.08)` | `rgba(0, 0, 0, 0.06)` |
| `--border` | `rgba(255, 255, 255, 0.1)` | `rgba(0, 0, 0, 0.08)` |
| `--accent` | `#FFCC00` | `#FFCC00` |
| --success | #00E676 | #00C853 (Preços: #000) |
| --error | #FF5252 | #D32F2F (Preços: #000) |
| --text-price | #FFFFFF | #000000 |

## 🛠️ Implementação Técnica

1. **Persistência**: O tema escolhido deve ser salvo no `localStorage` sob a chave `economiz-theme`.
2. **Aplicação**: O tema deve ser aplicado adicionando a classe `.light-mode` ao elemento `<body>`.
3. **Detecção do Sistema**: Caso não haja preferência salva, o sistema deve respeitar a configuração do SO (`prefers-color-scheme`).
4. **Componente de Toggle**: Um botão no header deve permitir a alternância rápida.

## 🔄 Fluxo de Trabalho

1. Usuário clica no botão de tema.
2. Script altera a classe no `body`.
3. Script atualiza o `localStorage`.
4. Script atualiza a tag `<meta name="theme-color">` para garantir a estética da barra de status em PWAs.
