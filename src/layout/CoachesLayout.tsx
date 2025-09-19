import { SideBar } from "../components/coachesComp/SideBar"
import { TopNav } from "../components/coachesComp/TopNav"

const LoanerLayout = ({ children }: { children: React.ReactNode }) => {
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

const withLoanerLayout = (Component: React.ComponentType) => {
    return (props: any) => (
        <LoanerLayout>
            <Component {...props} />
        </LoanerLayout>
    )
}

export default withLoanerLayout
