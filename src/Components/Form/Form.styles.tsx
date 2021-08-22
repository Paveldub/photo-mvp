import styled from 'styled-components'

export const FormWrap = styled('form')`
  display: flex;
  flex-direction: column;
  width: 350px;
`

export const FormInput = styled('input')`
  margin-bottom: 20px;

  &::last-child {
    margin-bottom: 0;
  }
`

export const FormSelect = styled('select')`
  width: 100%;
  height: 35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: none;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`

export const FormError = styled('span')`
  color: red;
`
