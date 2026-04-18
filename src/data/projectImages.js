const imageModules = import.meta.glob(
  '../../images/**/*.{jpg,jpeg,png,JPG,JPEG,PNG,webp,WEBP,avif,AVIF}',
  {
    eager: true,
    query: '?url',
    import: 'default',
  },
)

const getImageMeta = (path, src) => {
  const normalizedPath = path.replaceAll('\\', '/')
  const [, folder, filename] =
    normalizedPath.match(/^\.\.\/\.\.\/images\/([^/]+)\/(.+)$/) || []

  if (!folder || !filename) {
    return null
  }

  return {
    folder,
    image: {
      src,
      filename,
    },
  }
}

const collections = Object.entries(imageModules).reduce((acc, [path, src]) => {
  const meta = getImageMeta(path, src)

  if (!meta) {
    return acc
  }

  if (!acc[meta.folder]) {
    acc[meta.folder] = []
  }

  acc[meta.folder].push(meta.image)
  return acc
}, {})

Object.values(collections).forEach((images) => {
  images.sort((a, b) =>
    a.filename.localeCompare(b.filename, undefined, {
      numeric: true,
      sensitivity: 'base',
    }),
  )
})

export function getProjectImages(folder, projectTitle) {
  return (collections[folder] || []).map((image, index) => ({
    ...image,
    alt: `${projectTitle} - imagen ${index + 1}`,
  }))
}
