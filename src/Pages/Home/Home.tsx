import { Slider } from '../../Components/Slider/Slider'

export const Home = () => {
  return (
    <>
      <Slider />
    </>
  )
}

// SwiperCore.use([Autoplay, Navigation])
// params = {{
//   slidesPerView: 4,
//     spaceBetween: 0,
//       loop: true,
//         centeredSlides: true,
//           grabCursor: true,
//         autoplay: {
// delay: 2500,
//   disableOnInteraction: false,
//         },
//   navigation: {
//     nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//             },
// }}
