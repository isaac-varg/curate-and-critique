import { useStore } from "@tanstack/react-form"
import { useFormContext } from "."

type SubmitButtonProps = {
  children?: React.ReactNode
}

const SubmitButton = ({ children }: SubmitButtonProps) => {

  const form = useFormContext()


  const [isSubmitting, canSubmit, isDirty] = useStore(form.store, (state) => [
    state.isSubmitting,
    state.canSubmit,
    state.isDirty
  ])

  return (
    <button
      type="submit"
      disabled={isSubmitting || !canSubmit || !isDirty}
      className={`btn ${(isSubmitting || !canSubmit || !isDirty) ? 'btn-disabled' : 'btn-success'}`}
    >
      {children ? children : "Save"}
    </button>
  )
}

export default SubmitButton
