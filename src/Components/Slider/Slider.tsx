import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Scrollbar, Autoplay } from 'swiper'

import 'swiper/swiper-bundle.css'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/scrollbar/scrollbar.scss'
import './Slider.scss'

SwiperCore.use([Navigation, Scrollbar, Autoplay])

export const Slider = () => {
  const slides = []

  for (let i = 0; i < 5; i += 1) {
    slides.push(
      <SwiperSlide tag="li" key={`slide-${i}`}>
        <img
          src={`https://picsum.photos/id/${i + 1}/500/300`}
          alt="imagepicfromservice"
        />
      </SwiperSlide>
    )
  }
  return (
    <Swiper
      tag="section"
      wrapperTag="ul"
      id="main"
      autoplay={{ delay: 3000 }}
      spaceBetween={0}
      slidesPerView={3}
      navigation
      grabCursor={true}
    >
      {slides}
    </Swiper>
  )
}
