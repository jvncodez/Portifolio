

# Plano Unificado: Preparar Projeto para GitHub

## Parte 1 -- Proteger dados pessoais e imagens

### 1.1 Atualizar `.gitignore`
Adicionar ao final do arquivo:
```
# Dados pessoais e imagens privadas
public/images/
public/lovable-uploads/
src/assets/hortec-bg.jpg
src/data/personal.ts
```

### 1.2 Criar `src/data/personal.ts` (ignorado pelo Git)
Arquivo com todos os dados reais: fotos de depoimentos, links sociais, foto de perfil, imagem do Hortec e dados dos testimonials (nomes, cargos, textos).

### 1.3 Criar `src/data/personal.defaults.ts` (commitado no Git)
Arquivo com dados placeholder:
- Nomes genericos ("Colaborador 1", etc.)
- Textos placeholder para depoimentos
- Imagem placeholder para fotos
- Links sociais apontando para "#"

### 1.4 Criar `src/data/personal.loader.ts` (commitado no Git)
Modulo que tenta importar `personal.ts`. Se nao existir, usa `personal.defaults.ts` automaticamente.

### 1.5 Atualizar componentes para usar o loader
- **Hero.tsx** -- foto de perfil vem do loader
- **Testimonials.tsx** -- array de depoimentos vem do loader
- **Projects.tsx** -- imagem do Hortec vem do loader
- **Footer.tsx** -- links sociais vem do loader

---

## Parte 2 -- Remover todas as referencias ao Lovable

### 2.1 `index.html`
- `<meta name="description">` de "Lovable Generated Project" para "Portfolio Jvn Codes - Desenvolvedor Full Stack"
- `<meta name="author">` de "Lovable" para "Jvn Codes"
- `<meta property="og:description">` para "Portfolio Jvn Codes - Desenvolvedor Full Stack"
- `<meta name="twitter:site">` de "@Lovable" para "@jvncodes"
- Remover comentarios TODO

### 2.2 `vite.config.ts`
- Remover `import { componentTagger } from "lovable-tagger"`
- Simplificar plugins para apenas `plugins: [react()]`

### 2.3 `package.json`
- Remover `"lovable-tagger"` das devDependencies

### 2.4 `src/components/portfolio/About.tsx`
- Remover "Lovable" da lista `techStack`

---

## Resumo dos arquivos afetados

| Arquivo | Acao |
|---------|------|
| `.gitignore` | Adicionar exclusoes |
| `src/data/personal.ts` | Criar (ignorado pelo Git) |
| `src/data/personal.defaults.ts` | Criar (commitado) |
| `src/data/personal.loader.ts` | Criar (commitado) |
| `src/components/portfolio/Hero.tsx` | Usar loader para foto |
| `src/components/portfolio/Testimonials.tsx` | Usar loader para depoimentos |
| `src/components/portfolio/Projects.tsx` | Usar loader para imagem Hortec |
| `src/components/portfolio/Footer.tsx` | Usar loader para links sociais |
| `index.html` | Remover metadados Lovable |
| `vite.config.ts` | Remover lovable-tagger |
| `package.json` | Remover lovable-tagger |
| `src/components/portfolio/About.tsx` | Remover "Lovable" do techStack |

## Resultado final

| Item | No seu PC | No GitHub |
|------|-----------|-----------|
| Imagens pessoais | Aparecem normalmente | Nao existem |
| Nomes e depoimentos | Dados reais | Placeholders genericos |
| Links sociais | Links reais | Links "#" |
| Foto de perfil | Sua foto | Placeholder SVG |
| Referencias ao Lovable | Nenhuma | Nenhuma |
| Codigo do site | Completo e funcional | Completo e funcional (com placeholders) |

