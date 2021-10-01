import firebase from 'firebase/app'
import { useCallback, useEffect, useState } from 'react'
import db from '../../../firebase'
import './styles.scss'

export const LikeCounter = () => {
  const [likes, setLikes] = useState('-')

  const like = useCallback(() => {
    const userRef = db.collection('likeCounter').doc('likes')

    const increment = firebase.firestore.FieldValue.increment(1)

    userRef.update({ counter: increment })
  }, [])

  useEffect(() => {
    const getLikes = async () => {
      const likesQuantity = await db
        .collection('likeCounter')
        .doc('likes')
        .get()

      setLikes(likesQuantity.data().counter)
    }

    getLikes()
  }, [like])

  return (
    <>
      <div
        className="card"
        onClick={like}
        onKeyDown={like}
        role="button"
        tabIndex="0"
      >
        <svg viewBox="-11 -11 122 111" width="100" height="100">
          <path
            d="
						 M 50 0,
						 A 1 1 0 1 0 0 50,
						 L50,100,
						 L100,50,
						 A 1 1 0 1 0 50 0"
          />
        </svg>
        {likes}
      </div>
    </>
  )
}
