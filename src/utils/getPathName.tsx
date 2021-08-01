export function getPathname(location) {
  return location.pathname.includes('/eng')
    ? location.pathname.substring(3)
    : location.pathname
}
