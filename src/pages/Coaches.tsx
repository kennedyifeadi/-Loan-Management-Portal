import withLoanerLayout from "../layout/CoachesLayout"
import withMainLayout from "../layout/MainLayout"

const Loaner = () => {
  return (
    <div>Loaner</div>
  )
}

export default withMainLayout(withLoanerLayout(Loaner))

