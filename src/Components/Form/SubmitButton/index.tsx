export const SubmitButton = ({ label, submitting, disabled }) => {
  return (
    <div>
      <button type="submit" disabled={submitting || disabled}>
        {label}
      </button>
    </div>
  )
}
