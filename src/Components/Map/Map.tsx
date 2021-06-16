import React from 'react'
import { useGoogleMaps } from 'react-hook-google-maps'

const uluru = { lat: 50.450001, lng: 30.523333 }

export const GoogleMap = React.memo(function Map() {
  const { ref, map, google } = useGoogleMaps(
    'AIzaSyCNebg96x85zZyZAT4LGdFhQBHKNxqDruE',
    {
      zoom: 12,
      center: uluru,
    }
  )

  if (map) {
    new google.maps.Marker({ position: uluru, map })
  }

  return (
    <>
      <div ref={ref} style={{ width: '100%', height: 500 }} />
    </>
  )
})
