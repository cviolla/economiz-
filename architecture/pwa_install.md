# POP - Instalação do Web App (PWA)

## Objetivo
Fornecer uma experiência de aplicativo nativo permitindo que o usuário instale o economiz+ em sua tela inicial.

## Fluxo de Execução
1. **Captura do Evento:** Escutar o evento `beforeinstallprompt` no navegador.
2. **Armazenamento do Evento:** Salvar o evento em uma variável global para uso posterior.
3. **Exibição do Botão:** Mostrar um botão de "Instalar App" (geralmente no header ou menu de configurações) quando o evento for capturado.
4. **Acionamento:** Quando o usuário clicar no botão:
   - Chamar `deferredPrompt.prompt()`.
   - Aguardar a escolha do usuário (`deferredPrompt.userChoice`).
   - Se aceito, esconder o botão de instalação.
   - Limpar a variável `deferredPrompt`.
5. **Estado de Instalação:** Escutar o evento `appinstalled` para confirmar o sucesso e esconder definitivamente o botão.

## Casos de Borda
- **Navegador não suporta PWA:** O botão de instalação nunca será exibido.
- **Já instalado:** O evento `beforeinstallprompt` não será disparado; o botão deve permanecer oculto.
