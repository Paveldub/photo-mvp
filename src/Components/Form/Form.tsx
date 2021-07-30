import { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslate } from '../../Hooks/useTranslate'
import { formatPhoneNumber } from '../../services/parcers'
import { FormWrap } from './Form.styles'
import { FormField } from './FormField/index'
import { PhoneField } from './PhoneFiled'
import { SelectField } from './SelectField'

const WORDS = [
  'formFirstNameText',
  'errorRequiredText',
  'formEmailText',
  'formPhoneText',
  'contactUsTitleText',
  'sendMessageText',
]

export const TYPE_OF_PHOTOGRAPHY = [
  {
    value: 'nude',
    title: 'nudeText',
  },
  { value: 'portrait', title: 'portraitText' },
]

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm({ mode: 'onBlur' })

  const onSubmit = (data) => console.log(JSON.stringify(data))

  const t = useTranslate(WORDS)

  const typeOfPhotography = useMemo(
    () =>
      TYPE_OF_PHOTOGRAPHY.map((item) => ({
        value: item.value,
        title: item.title,
      })),
    []
  )

  return (
    <>
      <h1>{t.contactUsTitleText}</h1>
      <FormWrap onSubmit={handleSubmit(onSubmit)}>
        <FormField
          label={t.formFirstNameText}
          {...register('firstName', { required: true })}
          error={errors.first_name}
        />
        {errors.firstName && <p>{t.errorRequiredText}</p>}
        <FormField
          label={t.formEmailText}
          {...register('email', { required: true })}
          error={errors.email}
        />
        {errors.email && <p>{t.errorRequiredText}</p>}
        <PhoneField
          label={t.formPhoneText}
          control={control}
          {...register('phone', { required: true })}
          onChange={(e) => {
            setValue('phone', formatPhoneNumber(e.target.value))
          }}
        />
        {errors.phone && <p>{t.errorRequiredText}</p>}

        <SelectField
          label={t.regionText}
          error={errors.region_registered}
          {...register('chooseTypeOfPhotography', { required: true })}
          options={typeOfPhotography}
        />
        {errors.chooseTypeOfPhotography && <p>{t.errorRequiredText}</p>}

        <button type="submit">{t.sendMessageText}</button>

        {/* <label>
          Вы подтверждаете, что Вам 18+ лет?
          <input
            type="checkbox"
            id="checkbox"
            {...register('age', { required: true })}
          />
        </label> * */}
      </FormWrap>
    </>
  )
}
