import withLoanerLayout from "../layout/CoachesLayout"
import withMainLayout from "../layout/MainLayout"

const Coaches = () => {
  return (
    <div>Coaches</div>
  )
}

export default withMainLayout(withLoanerLayout(Coaches))

