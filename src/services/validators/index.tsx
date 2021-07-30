export const required = (value) =>
  value || value?.trim() || typeof value === 'number'
    ? undefined
    : 'errorRequiredText'

export const onlyNumbers = (value) =>
  value && /^[0-9]*[.,|0-9]{1}[0-9]*$/.test(value)
    ? undefined
    : 'errorCorrectValueText'
