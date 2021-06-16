import SwiperCore, { Autoplay, Navigation } from 'swiper'
import { Slider } from '../../Components/Slider/Slider'
import { Global } from '@emotion/react'
import { globalStyles } from '../../Components/Slider/stylesConfig'
import { Box } from '@react-yuki/ui'

export const Home = () => {
  SwiperCore.use([Autoplay, Navigation])

  return (
    <>
      <Global styles={globalStyles} />

      <Box>
        <Slider
          params={{
            slidesPerView: 4,
            spaceBetween: 0,
            loop: true,
            centeredSlides: true,
            grabCursor: true,
            autoplay: {
              delay: 2500,
              disableOnInteraction: false,
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          }}
        />
      </Box>
    </>
  )
}
