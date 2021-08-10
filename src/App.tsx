import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'
import { useState } from 'react'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
import { Route } from 'react-router-dom'
import image8 from './assets/images/image-8.jpg'
import { Footer, Header } from './Components'
import { AgeConfirmationPopup } from './Components/Layout/AgeConfirmationPopup/index'
import { Loader } from './Components/Layout/Loader'
import {
  ABOUT_PATH,
  CONTACTS_PATH,
  GALLERY_PATH,
  HOME_PATH,
} from './Constants/paths'
import { STEPS } from './Constants/steps'
import {
  ContentWrapper,
  GlobalStyles,
  PagesWrapper,
} from './globalStyles/GlobalStyles.styles'
import { About, ContactUs, Gallery, Home } from './Pages'
import './styles/variables/_variables.scss'
import { getPathname } from './utils/getPathName'

export {
  ABOUT_PATH,
  CONTACTS_PATH,
  GALLERY_PATH,
  HOME_PATH,
} from './Constants/paths'

const titles = {
  1: 'homePageTitle',
  2: 'galleryPageTitle',
  3: 'aboutPageTitle',
  4: 'contactPageTitle',
}

export const App = () => {
  const { t } = useTranslation()
  const pageStep = getPathname(location)

  const step = STEPS[pageStep]

  const [isAgeConfirmation, setIsAgeConfirmation] = useState(true)
  const isLocalStorage = localStorage.getItem('ageConfirmation') === null
  const [loading, setLoading] = useState(true)

  const closeAgePopup = () => {
    setIsAgeConfirmation(!isAgeConfirmation)
    localStorage.setItem('ageConfirmation', 'CONFIRMED')
  }

  return (
    <AnimateSharedLayout type="crossfade">
      <AnimatePresence>
        <Helmet>
          <title>{t[titles[step]]}</title>
        </Helmet>
        <GlobalStyles />

        {isAgeConfirmation && isLocalStorage ? (
          <AgeConfirmationPopup
            isOpen={isAgeConfirmation}
            onClose={closeAgePopup}
          />
        ) : null}

        {loading ? (
          <motion.div key="loader">
            <Loader setLoading={setLoading} />
          </motion.div>
        ) : (
          <ContentWrapper>
            <Header />
            <ContentWrapper>
              <PagesWrapper>
                <Route path={HOME_PATH} component={Home} exact />
                <Route path={GALLERY_PATH} component={Gallery} exact />
                <Route path={ABOUT_PATH} component={About} exact />
                <Route path={CONTACTS_PATH} component={ContactUs} exact />
              </PagesWrapper>
            </ContentWrapper>
            <Footer />
            {!loading && (
              <div className="transition-image final">
                <motion.img
                  transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
                  src={image8}
                  layoutId="main-image-1"
                />
              </div>
            )}
          </ContentWrapper>
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  )
}
