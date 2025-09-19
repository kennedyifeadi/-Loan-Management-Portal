import MainLayout from "../layout/MainLayout";

const LendersPage = () => {
  return <div>LendersPage</div>;
};

LendersPage.getLayout = function getLayout(page: React.ReactNode) {
  return <MainLayout>{page}</MainLayout>;
};

export default LendersPage;
