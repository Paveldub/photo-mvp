import { flow } from 'lodash'

export const onlyNumbersPhone = (value) =>
  value && value[0] === '0' ? value?.replace(/[^0-9]/g, '') : value

export const onlyNumbers = (value) => value && value?.replace(/[^0-9]/g, '')

export const formatPhoneNumber = flow([onlyNumbersPhone])
