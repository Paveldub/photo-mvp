import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'

export const Slider = () => {
  const slides = []

  for (let i = 0; i < 5; i += 1) {
    slides.push(
      <SwiperSlide key={`slide-${i}`}>
        <img
          src={`https://picsum.photos/id/${i + 1}/500/300`}
          alt="imagepicfromservice"
        />
      </SwiperSlide>
    )
  }
  return (
    <Swiper id="main" spaceBetween={0} slidesPerView={4} navigation>
      {slides}
    </Swiper>
  )
}
