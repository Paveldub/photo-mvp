import { useTranslate } from '../../Hooks/useTranslate'

const WORDS = ['mainTitleText']

export const Home = () => {
  const t = useTranslate(WORDS)

  // const [photos, setPhotos] = useState([])
  // const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   db.collection('photos').onSnapshot((snapshot) => {
  //     setPhotos(
  //       snapshot.docs.map((doc) => ({
  //         data: doc.data(),
  //       }))
  //     )
  //     setLoading(false)
  //   })
  // }, [loading])

  // if (loading) {
  //   return <Loader setLoading={setLoading} />
  // }

  return (
    <>
      {/* <Slider photo={photos} /> */}
      <h1>{t.mainTitleText}</h1>
    </>
  )
}
