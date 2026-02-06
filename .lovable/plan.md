

## Plano: Corrigir o Notebook 3D para Parecer um MacBook Realista

Baseado nas fotos de referencia, o notebook precisa parecer um MacBook real com:
- Base visivel com teclado e trackpad
- Tampa (tela) abrindo a partir da dobradia traseira
- Perspectiva realista de quem olha o laptop de frente/levemente acima

---

### Problema Atual

O notebook atual e muito simplificado - a base e apenas uma barra fina de 18px e a perspectiva 3D nao da a impressao de um laptop real. Nas fotos de referencia, vemos claramente:
- Uma base grossa com teclado visivel
- A tela abrindo com angulo realista
- Perspectiva de cima para baixo mostrando profundidade

---

### Mudancas no `LaptopScrollSection.tsx`

1. **Base do laptop realista**: Trocar a barra fina por uma base com proporcao real (~40% da altura da tela), mostrando area de teclado com teclas estilizadas e trackpad
2. **Perspectiva correta**: Adicionar `perspective` no container pai e usar `rotateX` leve no conjunto todo para dar a visao de cima para baixo (como nas fotos)
3. **Hinge (dobradia)**: A tela deve ter `transform-origin: bottom center` e rotacionar a partir da borda inferior (onde conecta com a base)
4. **Angulos de abertura**: 
   - Fechado: rotateX ~85deg (tela quase deitada sobre a base)
   - Aberto: rotateX ~0-5deg (tela quase vertical)
5. **Estilo MacBook**: Bordas arredondadas, acabamento prata/cinza escuro na base, moldura preta fina na tela

---

### Detalhes Tecnicos

**Estrutura do laptop (de cima para baixo):**

```text
+---------------------------+
|                           |  <- Tela (lid) - rotateX animado
|      [Conteudo]           |     origin-bottom
|                           |
+===========================+  <- Hinge
|  [|||||||||||||||||||]    |  <- Teclado
|       [_________]         |  <- Trackpad
+---------------------------+  <- Base
```

**Transformacoes 3D:**
- Container geral: `perspective: 1200px`, `rotateX: 10deg` (visao de cima)
- Lid (tela): `rotateX` de 85deg a 0deg conforme scroll, `transform-origin: bottom`
- Base: fixa, sem animacao

**Arquivo afetado:** `src/components/portfolio/LaptopScrollSection.tsx`
- Redesenhar a estrutura HTML do laptop com base realista
- Adicionar area de teclado estilizada (grid de "teclas" com divs)
- Adicionar trackpad
- Ajustar perspectiva e angulos de rotacao
- Manter toda logica de scroll e animacao existente

