import { TopNav } from "../components/TopNav";
import { SideBar } from "../components/SideBar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <SideBar />
      <div className="flex">
        <TopNav />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
