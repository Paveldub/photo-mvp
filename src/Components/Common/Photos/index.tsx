import { useEffect, useState } from 'react'
import { allData, listAll } from '../../../firebase'
import { Container } from '../../../Pages/About/About.styles'
import { Loading } from '../../Layout/Loader'
import './styles.scss'

export const PhotoDetails = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    listAll('sincerity/')
    setLoading(false)
  }, [loading])

  return (
    <Container>
      <h1>Photo details</h1>
      {loading ? (
        <Loading />
      ) : (
        <ul>
          {allData.map((item, index) => {
            return (
              <li key={`${item}_${index}`} className="size">
                <img src={item} alt="" />
              </li>
            )
          })}
        </ul>
      )}
    </Container>
  )
}
