import { ReactNode } from "react"

const classes = {
  base: 'flex flex-col gap-y-6 p-6',
  bg: {
    default: 'bg-base-100 shadow-base-300 shadow-lg rounded-xl',
  }
}

type PanelRootProps = {
  children: ReactNode
  bg?: keyof typeof classes.bg
}
const Root = ({ children, bg = 'default' }: PanelRootProps) => {
  return (
    <div
      className={`${classes.base} ${classes.bg[bg]}`}
    >
      {children}
    </div>
  )
}

export default Root
