import { useDispatch } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
import { ENGLISH_LANGUAGE } from '../Constants/index'

// import { setLanguage } from '@/redux/actions/languageActions';

// import { getPathname, setCurrentLanguage } from '@/utils';

export function useChangeLanguage() {
  const dispatch = useDispatch()

  const location = useLocation()

  const path = getPathname(location)

  const history = useHistory()

  const onSetLanguage = (lang) => {
    dispatch(setLanguage(lang))
    setCurrentLanguage(lang.value)
    if (lang.value === ENGLISH_LANGUAGE.value) {
      history.push(`${ENGLISH_LANGUAGE.path}/${path}`)
    } else {
      history.push(`/${path}`)
    }
  }

  return { onSetLanguage }
}
