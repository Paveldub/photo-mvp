import { Form, GoogleMap } from '../../Components'
import { Container, FormWrapper } from './Contactus.styles'

export const ContactUs = () => {
  return (
    <>
      <Container>
        <FormWrapper>
          <Form />
        </FormWrapper>
      </Container>

      <GoogleMap />
    </>
  )
}
