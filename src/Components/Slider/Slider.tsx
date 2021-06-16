import SwiperCore, { Autoplay, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import './Slider.styles.scss'

SwiperCore.use([Autoplay, Navigation])

const pics = [
  'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
  'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
  'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
  'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
]

export const Slider = () => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={0}
      navigation
      loop={true}
      centeredSlides={true}
      grabCursor={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      speed={1000}
      breakpoints={{
        992: {
          slidesPerView: 3,
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
      {pics &&
        pics.map((pic, index) => {
          return (
            <SwiperSlide key={`${pic}_${index}`} onClick={() => alert(index)}>
              <img src={pic} alt="text" />
            </SwiperSlide>
          )
        })}
    </Swiper>
  )
}
