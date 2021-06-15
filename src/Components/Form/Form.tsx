import { useForm } from 'react-hook-form'
import { FormWrap, FormInput, FormError, FormSelect } from './Form.styles'

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, submitCount },
    watch,
  } = useForm({ mode: 'onBlur' })

  const onSubmit = (data?: any) => alert(JSON.stringify(data))

  const watchFields = watch(['name', 'phone', 'email', 'age', 'select'])

  console.log(watchFields)

  return (
    <>
      <h1>Just send me a message.</h1>
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
        <FormSelect {...register('select', { required: true })}>
          <option value="" hidden>
            Выберите тип съемки
          </option>
          <option value="nude">Nude</option>
          <option value="portrait">Portrain</option>
        </FormSelect>
        {errors.select && <FormError>Обязательное поле</FormError>}
        <label>
          Вы подтверждаете, что Вам 18+ лет?
          <input
            type="checkbox"
            id="checkbox"
            {...register('age', { required: true })}
          />
        </label>
        {errors.age && <FormError>Обязательное поле</FormError>}
        <button type="submit">Send data</button>
        форму отправили {submitCount} раз
      </FormWrap>
    </>
  )
}
