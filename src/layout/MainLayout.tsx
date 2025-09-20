import TopNav from "../components/TopNav";
import { SideBar } from "../components/SideBar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex relative">
        <TopNav />
        <main className="mt-10">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
