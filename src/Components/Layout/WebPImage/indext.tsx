export const WebPImage = (props) => {
  const { webPImage, jpgImage, imgElem, altText } = props

  return (
    <>
      <picture>
        <source srcSet={webPImage} type="image/webp" />
        <source srcSet={jpgImage} type="image/jpeg" />
        <img src={imgElem} alt={altText} />
      </picture>
    </>
  )
}
