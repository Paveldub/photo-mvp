import {
  checkbox,
  email,
  required,
  requiredSelect,
} from '../../services/validators/index'

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
        email,
      },
    },
  },
  phone_number: {
    name: 'phone_number',
    type: 'text',
    register: {
      validate: { required },
    },
  },
  telegram_account: {
    name: 'telegram_account',
    type: 'text',
    register: {
      validate: { required },
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
  type_of_photo: {
    name: 'type_of_photo',
    type: 'checkbox',
    register: {
      validate: { checkbox },
    },
  },
}
