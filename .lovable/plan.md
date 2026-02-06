

## Plano: Seção de Projetos dentro de Notebook 3D com Animação de Scroll (Apple-style)

Transformar a seção de projetos em uma experiência cinematográfica onde os projetos aparecem dentro de um notebook 3D que abre conforme o usuário faz scroll.

---

### O que vai acontecer

1. A seção de projetos atual sera envolvida por um notebook 3D animado
2. O notebook começa fechado e abre suavemente conforme o scroll
3. O conteudo dos projetos rola dentro da tela do notebook
4. Background escuro (#05070F) com particulas flutuantes e acentos neon azul
5. Texto fade-in aparece abaixo do notebook quando o scroll completa

---

### Estrutura Visual

- Seção sticky de tela cheia (~250vh de altura para controle de scroll)
- Notebook centralizado com perspectiva 3D
- Tela do notebook mostra os cards de projetos existentes com scroll interno
- Particulas flutuantes no fundo
- Sombra suave, reflexos e bordas com brilho azul

---

### Detalhes Tecnicos

**Novo componente: `LaptopScrollSection.tsx`**
- Wrapper que substitui a seção `<Projects />` no Index
- Usa `useScroll` e `useTransform` do Framer Motion para vincular animacoes ao scroll
- Estrutura sticky com `position: sticky; top: 0` dentro de um container alto (250vh)
- Fases de animacao:
  - **0% - 40% scroll**: Notebook abre (rotateX de 85deg para 15deg), scale de 0.9 para 1
  - **40% - 100% scroll**: Conteudo dos projetos rola internamente (translateY)
- CSS 3D com `perspective: 1500px` e `transform-style: preserve-3d`

**Modificacao: `Projects.tsx`**
- Remover o wrapper `<section>` e background proprio
- Exportar o conteudo (header + grid + modal) como componente reutilizavel dentro do laptop

**Modificacao: `Index.tsx`**
- Substituir `<Projects />` por `<LaptopScrollSection />`

**Novo componente: `LaptopParticles.tsx`**
- Particulas flutuantes lentas no background escuro
- Separado do ParticleBackground existente (estilo diferente: neon azul em fundo escuro)

**Elementos visuais do notebook (CSS puro + Framer Motion)**:
- Tampa (lid): div com rotateX controlado pelo scroll, borda azul brilhante
- Base: div representando o teclado/base do notebook
- Tela: area de overflow hidden com conteudo dos projetos
- Reflexo: pseudo-elemento com gradiente sutil
- Sombra: box-shadow difusa abaixo do notebook

**Responsividade**:
- Desktop: notebook em tamanho completo
- Tablet: notebook reduzido (~80% scale)
- Mobile: animacao simplificada (sem 3D, scroll normal com fade-in)

---

### Arquivos Afetados

| Arquivo | Acao |
|---------|------|
| `src/components/portfolio/LaptopScrollSection.tsx` | Criar - componente principal do notebook 3D |
| `src/components/portfolio/LaptopParticles.tsx` | Criar - particulas neon no fundo escuro |
| `src/components/portfolio/Projects.tsx` | Modificar - adaptar para renderizar dentro do notebook |
| `src/pages/Index.tsx` | Modificar - trocar Projects por LaptopScrollSection |

