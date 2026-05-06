# POP - Gerenciamento de Temas (Light/Dark Mode)

Este documento define o padrão para a implementação e manutenção do novo design system moderno do economiz+.

## 🎨 Design System

A arquitetura visual foi atualizada para focar primariamente em um **Light Mode Moderno** com alta aderência a elementos de interface de dashboard (cards coloridos, sombras suaves, arredondamentos amplos). O Dark Mode agora atua como fallback ou modo secundário.

### Variáveis de Cor (Modern Dashboard)

| Variável | Light Mode (Padrão) | Dark Mode | Descrição |
| :--- | :--- | :--- | :--- |
| `--bg-deep` | `#F5F5F7` | `#0F0F12` | Fundo principal da aplicação |
| `--bg-card` | `#FFFFFF` | `rgba(255, 255, 255, 0.05)` | Fundo dos cards brancos/neutros |
| `--text-main` | `#1A1A1F` | `#FFFFFF` | Texto de alta prioridade e valores numéricos |
| `--text-dim` | `#6E6E73` | `#A0A0A5` | Labels, subtítulos e textos auxiliares |
| `--accent` | `#E5B800` | `#FFCC00` | Amarelo de destaque e ações primárias |
| `--border` | `rgba(0, 0, 0, 0.06)` | `rgba(255, 255, 255, 0.1)` | Linhas divisórias muito sutis |
| `--card-pink` | `#FFE5E5` | `rgba(255, 182, 193, 0.15)` | Destaque pastel (ex: Gasto Total) |
| `--card-yellow`| `#FFF0D4` | `rgba(255, 204, 0, 0.1)` | Destaque pastel (ex: Comprados) |
| `--card-green` | `#E5FFE5` | `rgba(0, 230, 118, 0.1)` | Destaque pastel (ex: Economia) |
| `--card-purple`| `#E5E5FF` | `rgba(107, 102, 255, 0.15)` | Destaque pastel (ex: Itens) |
| `--grad-red` | `linear-gradient(135deg, #FF4B72, #FF7B93)` | `linear-gradient(135deg, #A82E47, #C64A62)` | Fundo super-destacado vermelho |
| `--grad-blue`| `linear-gradient(135deg, #6B66FF, #8B86FF)` | `linear-gradient(135deg, #4440B3, #5F5AD4)` | Fundo super-destacado azul |

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
