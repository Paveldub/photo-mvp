import { useEffect, useState } from 'react'
import { Icon } from '../../Common/Icon/index'
import './styles.scss'

export const ScrollButton = () => {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 300) {
      setVisible(true)
    } else if (scrolled <= 300) {
      setVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible)

    return () => window.removeEventListener('scroll', toggleVisible)
  }, [])

  return (
    <Icon
      icon="down-arrow"
      size="25px"
      className="scrollTop"
      onClick={scrollToTop}
      style={{ height: 40, display: visible ? 'flex' : 'none' }}
    />
  )
}
