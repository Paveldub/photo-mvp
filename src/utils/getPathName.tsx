export function getPathname(location: any) {
  return location.pathname?.replace('', '')?.substring(1)
}
