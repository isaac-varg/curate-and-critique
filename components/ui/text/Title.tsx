const classes = {
  type: {
    header: 'text-3xl font-semibold text-base-content',
    section: 'text-xl font-semibold uppercase text-base-content/60',
  }
}

type TitleProps = {
  children: React.ReactNode,
  type?: keyof typeof classes.type,
}

const Title = ({
  children,
  type = 'header',
}: TitleProps) => {
  return (
    <div>
      <span className={`${classes.type[type]}`}>{children}</span>
    </div>
  )
}

export default Title
