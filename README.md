# Daniela Aguirre | Portafolio profesional

Sitio web single-page desarrollado con React, Vite, Tailwind CSS, `lucide-react` y `framer-motion`. La propuesta visual está pensada como un portafolio editorial de moda: limpio, sobrio, elegante y listo para desplegarse como sitio estático en Vercel.

## Stack

- React
- Vite
- Tailwind CSS
- `lucide-react`
- `framer-motion`
- Sitio estático, sin backend y sin base de datos

## Ejecutar localmente

1. Instala dependencias:

```bash
npm install
```

2. Inicia el entorno de desarrollo:

```bash
npm run dev
```

3. Genera la versión de producción:

```bash
npm run build
```

4. Previsualiza el build localmente:

```bash
npm run preview
```

## Estructura principal

```text
src/
  App.jsx
  components/
  data/
  sections/
  assets/
```

## Personalización rápida

Todo el contenido editable se encuentra centralizado en:

```text
src/data/portfolioData.js
```

Desde ese archivo puedes actualizar:

- textos del hero y sobre mí
- proyectos destacados
- educación, habilidades e idiomas
- información de contacto
- placeholders y futuras imágenes

## Imágenes

La primera versión usa placeholders editoriales elegantes para mantener el sitio visualmente sólido sin depender de fotografías reales. Cuando quieras reemplazarlos:

1. Agrega tus imágenes dentro de `src/assets/`
2. Importa o referencia esos archivos desde `src/data/portfolioData.js`
3. Asigna el `src` correspondiente en cada bloque de imagen

## Despliegue en Vercel

El proyecto queda listo para despliegue estático en Vercel.

### Opción 1: desde Git

1. Sube el proyecto a GitHub, GitLab o Bitbucket.
2. Importa el repositorio en Vercel.
3. Vercel detectará automáticamente que es un proyecto Vite.
4. Ejecutará `npm run build` y publicará la carpeta `dist`.

### Opción 2: con Vercel CLI

```bash
npm i -g vercel
vercel --prod
```

## Notas

- No se requiere backend.
- No se requiere base de datos.
- Al ser una single-page con navegación por anclas, no necesita configuración extra de rutas para esta versión.
