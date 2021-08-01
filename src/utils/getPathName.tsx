export function getPathname(location: any) {
  return location.pathname?.replace('/eng', '')?.substring(1)
}
