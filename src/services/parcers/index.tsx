import { flow } from 'lodash'

export const onlyNumbersPhone = (value) =>
  value && value[0] === '0' ? value?.replace(/[^0-9]/g, '') : value

export const formatPhoneNumber = flow([onlyNumbersPhone])
