import { useForm } from 'react-hook-form'
import { FormWrap, FormInput, FormError } from './Form.styles'

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, submitCount },
    watch,
  } = useForm({ mode: 'onBlur' })

  const onSubmit = (data?: any) => console.log('Отправлено:', data)
  const watchFields = watch(['name', 'phone', 'email', 'age'])

  console.log(watchFields)

  return (
    <>
      <h1>Заполните форму</h1>
      <FormWrap onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          placeholder="Имя"
          {...register('name', { required: true })}
        />
        {errors.name && <FormError>Обязательное поле</FormError>}
        <FormInput
          placeholder="Телефон"
          {...register('phone', {
            required: true,
            pattern: /\d?\d/,
            min: 10,
          })}
        />
        {errors.phone && (
          <FormError>Обязательное поле. Max 10 символов</FormError>
        )}
        <FormInput
          placeholder="Email"
          {...register('email', { required: true })}
        />
        {errors.email && <FormError>Обязательное поле</FormError>}
        <label>
          Вы подтверждаете, что Вам 18 лет?
          <input
            type="checkbox"
            id="checkbox"
            {...register('age', { required: true })}
          />
        </label>
        {errors.age && <FormError>Обязательное поле</FormError>}
        <input type="submit" />
        форму отправили {submitCount} раз
      </FormWrap>
    </>
  )
}
