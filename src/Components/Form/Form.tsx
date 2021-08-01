import { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslate } from '../../Hooks/useTranslate'
import { formatPhoneNumber } from '../../services/parcers'
import { FormWrap } from './Form.styles'
import { FormField } from './FormField/index'
import { PhoneField } from './PhoneFiled'
import { SelectField } from './SelectField'
import { SubmitButton } from './SubmitButton'

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

export const TYPE_OF_PHOTOGRAPHY = [
  {
    value: 'nude',
    title: 'nudeText',
  },
  { value: 'portrait', title: 'portraitText' },
]

const NUDE = 'nude'
// const PORTRAIT = 'portrait'

export const Form = () => {
  const t = useTranslate(WORDS)

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    watch,
  } = useForm({ mode: 'onBlur' })

  const onSubmit = (data) => console.log(JSON.stringify(data))

  const chooseType = watch('chooseTypeOfPhotography')

  const isNude = chooseType === NUDE
  // const isPortrait = chooseType === PORTRAIT

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
        />
        {errors.firstName && <p>{t.errorRequiredText}</p>}

        <PhoneField
          label={t.formPhoneText}
          control={control}
          {...register('phone', { required: true })}
          onChange={(e) => {
            setValue('phone', formatPhoneNumber(e.target.value))
          }}
        />
        {errors.phone && <p>{t.errorRequiredText}</p>}

        <FormField
          label={t.formEmailText}
          {...register('email', { required: true })}
          error={errors.email}
        />
        {errors.email && <p>{t.errorRequiredText}</p>}

        <SelectField
          label={t.typeOfPhotographyText}
          error={errors.region_registered}
          {...register('chooseTypeOfPhotography', { required: true })}
          options={typeOfPhotography}
        />
        {errors.chooseTypeOfPhotography && <p>{t.errorRequiredText}</p>}

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
