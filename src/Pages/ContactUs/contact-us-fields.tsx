import { required, requiredSelect } from '../../services/validators/index'
import { phoneValidate } from '../../services/validators/phoneValidator'

export const TYPE_OF_PHOTOGRAPHY = [
  {
    value: 'nude',
    title: 'nudeText',
  },
  { value: 'portrait', title: 'portraitText' },
]

export const FIELDS = {
  first_name: {
    name: 'first_name',
    type: 'text',
    register: {
      validate: { required },
    },
  },
  email: {
    name: 'email',
    type: 'text',
    register: {
      validate: {
        required,
      },
    },
  },
  phone_number: {
    name: 'phone_number',
    type: 'text',
    register: {
      validate: { required, phoneValidate },
    },
  },
  type_of_photography: {
    name: 'type_of_photography',
    type: 'text',
    register: {
      validate: { requiredSelect },
    },
    options: TYPE_OF_PHOTOGRAPHY,
  },
}
