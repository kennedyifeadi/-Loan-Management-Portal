import TopNav from "../components/TopNav";
import { SideBar } from "../components/SideBar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full">
      <SideBar />
      <div className="flex relative w-full">
        <TopNav />
        <main className="mt-[4%] w-full">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
