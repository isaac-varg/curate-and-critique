import { useFieldContext } from "."

type TextFieldProps = {
  label: string,
}

const TextField = ({ label }: TextFieldProps) => {

  const field = useFieldContext<string>()

  return (
    <div>
      <label className="">{label}</label>
      <input
        value={field.state.value}
        onChange={(e) => field.handleChange(e.target.value)}
      />
    </div>
  )
}

export default TextField 
