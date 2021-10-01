import { email, required } from '../../services/validators/index'

export const FIELDS = {
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
}
