# POP - Sincronização de Dados (Supabase & Cache)

## Objetivo
Garantir que o app funcione offline e sincronize dados quando houver conexão.

## Estratégia: Cache-First with Background Sync
1. **Carregamento Inicial:**
   - Tentar ler `localStorage` para exibir UI instantânea.
   - Em background, buscar dados do Supabase.
   - Comparar `data_cadastro` e mesclar (prioridade para o mais recente).
2. **Escrita (Novos Produtos/Mercados):**
   - Gravar imediatamente no `localStorage`.
   - Tentar `POST/PATCH` no Supabase via Client SDK.
   - Se falhar (offline), marcar registro como `pending_sync: true`.
3. **Recuperação:**
   - Adicionar listener de evento `online`.
   - Ao voltar a conexão, percorrer registros `pending_sync` e enviá-los ao Supabase.

## Tabelas Envolvidas
- `produtos`, `mercados`, `orcamento`.
