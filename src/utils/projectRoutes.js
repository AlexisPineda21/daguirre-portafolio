export const PROJECT_ROUTE_PREFIX = '/proyectos'

export function getProjectPath(projectId) {
  return `${PROJECT_ROUTE_PREFIX}/${projectId}`
}

export function getProjectIdFromPath(pathname) {
  const match = pathname.match(/^\/proyectos\/([^/]+)\/?$/)
  return match?.[1] || null
}
