
type SubmitButtonProps = {
  label?: string
}

const SubmitButton = ({ label = 'Save' }: SubmitButtonProps) => {

  return (
    <button
      type="submit"
      className="btn btn-success"
    >
      {label}
    </button>
  )
}

export default SubmitButton
