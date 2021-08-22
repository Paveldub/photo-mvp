import { Form, GoogleMap } from '../../Components'
import { Container, FormWrapper } from './Contactus.styles'
import './styles.scss'

export const ContactUs = () => {
  return (
    <>
      <div className="contact-image-wrap" />

      <Container>
        <FormWrapper>
          <Form />
        </FormWrapper>
      </Container>

      <GoogleMap />
    </>
  )
}
