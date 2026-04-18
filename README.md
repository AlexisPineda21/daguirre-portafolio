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

Las galerías de proyectos se alimentan desde la carpeta `images/` ubicada en la raíz del proyecto. Cada subcarpeta representa una colección y se conecta con el campo `imageFolder` en `src/data/portfolioData.js`.

Estructura esperada:

```text
images/
  deconstruccion/
  entrelazados en el tiempo/
  multiplicidad del yo/
  nubes de papel/
  piel viva/
```

Para agregar una nueva colección:

1. Crea una nueva subcarpeta dentro de `images/`.
2. Agrega las fotografías de la colección.
3. Crea o actualiza el proyecto en `src/data/portfolioData.js`.
4. Asigna el nombre exacto de la carpeta en `imageFolder`.

Si una colección no tiene imágenes, el sitio mostrará el placeholder editorial definido en el bloque `image`.

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
