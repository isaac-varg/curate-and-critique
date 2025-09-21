import { useFieldContext } from "."

type TextFieldProps = {
  label: string,
}

const TextField = ({ label }: TextFieldProps) => {

  const field = useFieldContext<string>()

  return (
    <div className="flex flex-col gap-1">
      <label className="text-base-content font-semibold text-xl">{label}</label>
      <input
        value={field.state.value}
        onChange={(e) => field.handleChange(e.target.value)}
        className="input w-full"
      />
    </div>
  )
}

export default TextField 
