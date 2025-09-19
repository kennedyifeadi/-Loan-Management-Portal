import withLendersLayout from "../layout/LendersLayout"
import withMainLayout from "../layout/MainLayout"

const Lenders = () => {
  return (
    <div>Lenders</div>
  )
}

export default withMainLayout(withLendersLayout(Lenders))
