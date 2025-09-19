import { SideBar } from "../components/lendersComp/SideBar"
import { TopNav } from "../components/lendersComp/TopNav"

const LendersLayout = ({children} : {children: React.ReactNode }) => {
  return (
    <div>
        <TopNav />

        <div className="flex">
            <SideBar />
            <main>{children}</main>
        </div>
    </div>
  )
}

const withLendersLayout = (Component: React.ComponentType) => {
  return (props: any) => (
    <LendersLayout>
      <Component {...props} />
    </LendersLayout>
  )
}

export default withLendersLayout