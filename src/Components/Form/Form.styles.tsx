import styled from 'styled-components'

export const FormWrap = styled('form')`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  width: 300px;
`

export const FormInput = styled('input')`
  margin-bottom: 20px;

  &::last-child {
    margin-bottom: 0;
  }
`

export const FormError = styled('span')`
  color: red;
`
