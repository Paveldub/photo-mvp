import firebase from 'firebase/app'
import { useEffect, useState } from 'react'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { Link } from 'react-router-dom'
import db from '../../../firebase'
import { Loading } from '../../Layout/Loader'
import { WebPImage } from '../../Layout/WebPImage/indext'

export const HomeGallery = () => {
  const [fileUrl, setFileUrl] = useState(null)
  const [homePage, setHomePage] = useState([])
  const [loading, setLoading] = useState(true)

  const onFileChange = async (e) => {
    const file = e.target.files[0]
    const storageRef = firebase.storage().ref()
    const fileRef = storageRef.child(file.name)
    await fileRef.put(file)
    setFileUrl(await fileRef.getDownloadURL())
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const userName = e.target.username.value
    if (!userName) {
      return
    }
    db.collection('homeGallery')
      .doc(userName)
      .set({
        id: Math.floor(Math.random() * 100),
        photo_title: userName,
        photo_url: fileUrl,
      })
  }

  useEffect(() => {
    const fetchUsers = async () => {
      const usersCollection = await db.collection('homeGallery').get()
      setHomePage(
        usersCollection.docs.map((doc) => {
          return doc.data()
        })
      )
      setLoading(false)
    }
    fetchUsers()
  }, [loading])

  return (
    <div className="new-projects">
      <form onSubmit={onSubmit}>
        <input type="file" onChange={onFileChange} />
        <input type="text" name="username" placeholder="name" />
        <button>submit</button>
      </form>
      <ul className="new-projects__list">
        {loading ? (
          <Loading />
        ) : (
          <>
            {homePage
              .slice()
              .sort(() => 0.5 - Math.random())
              .map((item) => {
                console.log(item)

                return (
                  <Link
                    to={`/photos/${item?.id}/${item?.photo_title}`}
                    key={item?.id}
                  >
                    <li>
                      <WebPImage
                        webPImage={item?.photo_url}
                        jpgImage={item?.photo_url}
                        imgElem={item?.photo_url}
                        altText={item?.photo_title}
                      />
                      <h3>{item?.photo_title}</h3>
                      <p>{item?.model_name}</p>
                    </li>
                  </Link>
                )
              })}
          </>
        )}
      </ul>
    </div>
  )
}
