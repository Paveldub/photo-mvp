import { useEffect, useState } from 'react'
import { useHistory } from 'react-router'

export const LoadingRedirect = () => {
  const [count, setCount] = useState(5)
  const history = useHistory

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => --currentCount)
    }, 1000)

    count === 0 && history.push('/login')
    return () => clearInterval(interval)
  }, [history, count])

  return <div>{count}</div>
}
