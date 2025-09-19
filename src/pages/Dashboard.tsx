


import MainLayout from "../layout/MainLayout";

const Dashboard = () => {
  return <div>Dashboard</div>;
};

Dashboard.getLayout = function getLayout(page: React.ReactNode) {
  return <MainLayout>{page}</MainLayout>;
};

export default Dashboard;

