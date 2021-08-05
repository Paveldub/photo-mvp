export const required = (value) =>
  value || value?.trim() || typeof value === 'number'
    ? undefined
    : 'errorRequiredText'

export const requiredSelect = (value) =>
  value || typeof value === 'number' ? undefined : 'errorRequiredSelectText'

export const onlyNumbers = (value) =>
  value && /^[0-9]*[.,|0-9]{1}[0-9]*$/.test(value)
    ? undefined
    : 'errorCorrectValueText'

export const email = (value) => {
  if (value) {
    if (
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        value
      )
    ) {
      return undefined
    } else {
      return 'errorCorrectValueText'
    }
  } else {
    return undefined
  }
}
