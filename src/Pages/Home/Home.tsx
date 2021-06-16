import Slider from '../../Components/Slider/Slider'
import { Global } from '@emotion/react'
import { globalStyles } from '../../Components/Slider/stylesConfig'

import { Box } from '@react-yuki/ui'

export const Home = () => {
  return (
    <>
      <Global styles={globalStyles} />

      <Box>
        <Slider
          params={{
            slidesPerView: 4,
            spaceBetween: 0,
            pagination: {
              clickable: true,
            },
          }}
        />
      </Box>
    </>
  )
}
