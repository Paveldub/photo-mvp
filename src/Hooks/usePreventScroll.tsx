import { useLayoutEffect } from 'react'

export const usePreventScroll = () => {
  const bodyFixPosition = () => {
    document.body.style.overflow = 'hidden'
  }

  const bodyUnfixPosition = () => {
    document.body.style.overflow = 'initial'
  }

  useLayoutEffect(() => {
    bodyFixPosition()
    return () => {
      bodyUnfixPosition()
    }
  }, [])
}
