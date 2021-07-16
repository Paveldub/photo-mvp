import { useDispatch } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
import { RUSSIAN_LANGUAGE } from '../Constants/languages'
import { setLanguage } from '../redux/actions/languageActions'
import { getPathname } from '../utils/getPathName'
import { setCurrentLanguage } from '../utils/i18n'

export function useChangeLanguage() {
  const dispatch = useDispatch()

  const location = useLocation()

  const path = getPathname(location)

  const history = useHistory()

  const onSetLanguage = (lang: any) => {
    dispatch(setLanguage(lang))
    setCurrentLanguage(lang.value)
    if (lang.value === RUSSIAN_LANGUAGE.value) {
      history.push(`${RUSSIAN_LANGUAGE.path}/${path}`)
    } else {
      history.push(`/${path}`)
    }
  }

  return { onSetLanguage }
}
