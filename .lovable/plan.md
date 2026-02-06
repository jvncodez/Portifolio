

# Depoimentos em Grid 3x3

## Objetivo
Alterar o layout da seção de depoimentos de 2 colunas para 3 colunas no desktop.

## Alterações

### Arquivo: `src/components/portfolio/Testimonials.tsx`

1. **Mudar o grid de 2 para 3 colunas:**
   - Alterar `grid md:grid-cols-2` para `grid md:grid-cols-3`
   - Ajustar `max-w-5xl` para `max-w-6xl` para acomodar 3 colunas

2. **Corrigir dados do Joanderson Lacerda** (aproveitando a mudança):
   - Cargo: "Professor de Química, Coordenador de Projetos - Hortec, Mentor"
   - Textos EN/ES: "Under development" / "En desarrollo"

3. **Adicionar fallback de avatar** para quando a foto estiver vazia:
   - Mostrar as iniciais do nome em um círculo estilizado

4. **Centralizar cards da última linha** quando não preencherem as 3 colunas (5 cards = 3 + 2, os 2 últimos ficam centralizados)

### Arquivo: `src/lib/utils.ts`
- Remover o array `testimonialsData` duplicado, mantendo apenas a função `cn`

