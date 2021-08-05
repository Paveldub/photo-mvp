import { useForm } from 'react-hook-form'
import { useTranslate } from '../../Hooks/useTranslate'
import { FIELDS } from '../../Pages/ContactUs/contact-us-fields'
import { formatPhoneNumber } from '../../services/parcers'
import { createTriggerValidationFunction } from '../../utils'
import { FormWrap } from './Form.styles'
import { FormField } from './FormField'
import { PhoneField } from './PhoneFiled'
import { SelectField } from './SelectField'
import { SubmitButton } from './SubmitButton'

const NUDE = 'nude'
const WORDS = [
  'formFirstNameText',
  'errorRequiredText',
  'formEmailText',
  'formPhoneText',
  'contactUsTitleText',
  'sendMessageText',
  'checkboxAgeText',
  'ageCheckboxConfirmation',
  'typeOfPhotographyText',
]

export const Form = () => {
  const t = useTranslate(WORDS)

  const { register, handleSubmit, errors, control, trigger, setValue, watch } =
    useForm({
      mode: 'onBlur',
      reValidateMode: 'onBlur',
      shouldFocusError: true,
      shouldUnregister: false,
    })

  const triggerValidation = createTriggerValidationFunction(errors, trigger)

  const onSubmit = (data) => {
    const { first_name, email, type_of_photography } = data

    const ORDER = `Клиент: %0A - Имя: ${first_name} %0A - почта: ${email} %0A - тип-фотографии: ${type_of_photography}`

    const TOKEN = '1731900925:AAGgI0NnWuQnHUvdLTA2jR5kPgZqfKcpgS8'
    const CHAT_ID = -545538000
    const URL = `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${ORDER}`

    const api = new XMLHttpRequest()
    api.open('GET', URL, true)
    api.send()
  }

  const chooseType = watch('type_of_photography')
  const isNude = chooseType === NUDE

  return (
    <>
      <h1>{t.contactUsTitleText}</h1>
      <FormWrap onSubmit={handleSubmit(onSubmit)}>
        <FormField
          {...FIELDS.first_name}
          label={t.formFirstNameText}
          error={errors.first_name}
          register={register(FIELDS.first_name.register)}
          onChange={() => {
            triggerValidation(FIELDS.first_name.name)
          }}
        />

        <PhoneField
          {...FIELDS.phone_number}
          control={control}
          label={t.formPhoneText}
          error={errors.phone_number}
          onChange={(e) => {
            setValue('phone_number', formatPhoneNumber(e.target.value))
            triggerValidation(FIELDS.phone_number.name)
          }}
        />

        <FormField
          {...FIELDS.email}
          label={t.formEmailText}
          error={errors.email}
          register={register(FIELDS.email.register)}
          onChange={() => {
            triggerValidation(FIELDS.email.name)
          }}
        />

        <SelectField
          {...FIELDS.type_of_photography}
          label={t.typeOfPhotographyText}
          error={errors.type_of_photography}
          register={register(FIELDS.type_of_photography.register)}
          onChange={() => {
            triggerValidation(FIELDS.type_of_photography.name)
          }}
        />

        {isNude && (
          <label>
            <input
              type="checkbox"
              id="checkbox"
              {...register('age', { required: true })}
            />
            {t.checkboxAgeText}
          </label>
        )}

        {errors.age && <p>{t.ageCheckboxConfirmation}</p>}

        <SubmitButton label={t.sendMessageText} />
      </FormWrap>
    </>
  )
}
