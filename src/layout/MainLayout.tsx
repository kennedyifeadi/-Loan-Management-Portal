import { SideBar } from "../components/SideBar"
import { TopNav } from "../components/TopNav"

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <SideBar />
      <div className="flex">
        <TopNav />
        <main>{children}</main>
      </div>
    </div>
  )
}

const withMainLayout = (Component: React.ComponentType) => {
  return (props: any) => (
    <MainLayout>
      <Component {...props} />
    </MainLayout>
  )
}

export default withMainLayout
