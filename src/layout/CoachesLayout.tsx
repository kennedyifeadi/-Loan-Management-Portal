import { TopNav } from "../components/coachesComp/TopNav"
import { SideBar } from "../components/coachesComp/SideBar";

const LoanerLayout = ({ children }: { children: React.ReactNode }) => {
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

export default LoanerLayout;
