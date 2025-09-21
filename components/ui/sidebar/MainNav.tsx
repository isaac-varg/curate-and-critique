import { useRouter } from "next/navigation"
import { Fragment } from "react"

const MainNav = () => {

  const router = useRouter()
  return (
    <Fragment>
      <button
        className="btn"
        onClick={() => router.push("/collections")}
      >Collections</button>
    </Fragment>
  )
}

export default MainNav
