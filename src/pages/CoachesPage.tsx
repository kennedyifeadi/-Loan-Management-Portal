


import MainLayout from "../layout/MainLayout";

const CoachesPage = () => {
  return <div>CoachesPage</div>;
};

CoachesPage.getLayout = function getLayout(page: React.ReactNode) {
  return <MainLayout>{page}</MainLayout>;
};

export default CoachesPage;
