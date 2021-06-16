import SwiperCore, { Autoplay, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import './Slider.styles.scss'

SwiperCore.use([Autoplay, Navigation])

const pics = [
  'https://i.ibb.co/JCPpVCF/119950000004.jpg',
  'https://i.ibb.co/TqZLRLf/119950000027.jpg',
  'https://i.ibb.co/WnpGr1N/119566000035.jpg',
  'https://i.ibb.co/GMsGvzc/119950000015.jpg',
]

export const Slider = () => {
  return (
    <Swiper
      slidesPerView={4}
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
