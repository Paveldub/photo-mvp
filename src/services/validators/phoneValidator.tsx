import { DEFAULT_PHONE_CODES } from '../../Constants/phoneNumbers'
import { onlyNumbers } from './index'

export const phoneValidate = (value) => {
  value = onlyNumbers(value)

  if (value?.length === 10) {
    const codeVal = value.substr(0, 3)
    const codes = DEFAULT_PHONE_CODES

    if (codes.includes(codeVal)) {
      return undefined
    }
  }
  return 'errorIncorrectPhoneNumberText'
}
