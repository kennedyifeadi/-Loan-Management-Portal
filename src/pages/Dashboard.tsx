import MainLayout from "../layout/MainLayout";
import ProcessorCard from "../components/processorComp/ProcessorCard";
import SearchFilter from "../components/SearchFilter";

const Dashboard = () => {
  return (
    <div className="w-full">
      <SearchFilter />
      <ProcessorCard />
      
    </div>
  );
};

Dashboard.getLayout = function getLayout(page: React.ReactNode) {
  return <MainLayout>{page}</MainLayout>;
};

export default Dashboard;
