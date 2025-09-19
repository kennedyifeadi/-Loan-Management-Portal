import { TopNav } from "../components/lendersComp/TopNav"
import { SideBar } from "../components/lendersComp/SideBar";

const LendersLayout = ({children} : {children: React.ReactNode }) => {
  return (
    <div>
        <TopNav />
        <div className="flex">
            <SideBar />
            <main>{children}</main>
        </div>
    </div>
  );
};

export default LendersLayout;
