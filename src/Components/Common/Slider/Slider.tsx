import SwiperCore, { Autoplay, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import './Slider.styles.scss'

SwiperCore.use([Autoplay, Navigation])

export const Slider = (props) => {
  const { photo } = props

  return (
    <Swiper
      slidesPerView={8}
      spaceBetween={0}
      navigation
      loop={true}
      centeredSlides={false}
      grabCursor={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      speed={1000}
      breakpoints={{
        992: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 2,
        },
        600: {
          slidesPerView: 1,
        },
        480: {
          slidesPerView: 1,
        },
        320: {
          slidesPerView: 1,
        },
      }}
    >
      {photo?.map((item) => {
        return (
          <SwiperSlide key={`${item?.data.id}`}>
            <img src={item?.data.photo_url} alt="text" />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
