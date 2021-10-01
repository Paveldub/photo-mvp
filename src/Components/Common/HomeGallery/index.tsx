import firebase from 'firebase/app'
import { useEffect, useState } from 'react'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import db from '../../../firebase'
import { setHomeGallery } from '../../../redux/actions/homeGalleryAction'
import { Loading } from '../../Layout/Loader'
import { WebPImage } from '../../Layout/WebPImage/indext'

export const HomeGallery = () => {
  const [fileUrl, setFileUrl] = useState(null)
  const { items, isFetching } = useSelector((state) => state.homeGallery)

  const dispatch = useDispatch()

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
    db.collection('GalleryPage')
      .doc(userName)
      .set({
        id: Math.floor(Math.random() * 100),
        photo_title: userName,
        photo_url: fileUrl,
      })
  }

  useEffect(() => {
    dispatch(setHomeGallery())
  }, [])

  return (
    <div className="new-projects">
      <form onSubmit={onSubmit}>
        <input type="file" onChange={onFileChange} />
        <input type="text" name="username" placeholder="name" />
        <button>submit</button>
      </form>
      {isFetching ? (
        <Loading />
      ) : (
        <>
          <ul className="new-projects__list">
            {items.map((item) => {
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
                  </li>
                </Link>
              )
            })}
          </ul>
        </>
      )}
    </div>
  )
}
