import LendersLayout from "../layout/LendersLayout";
import MainLayout from "../layout/MainLayout";

const Lenders = () => {
  return <div>Lenders</div>;
};

Lenders.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <MainLayout>
      <LendersLayout>{page}</LendersLayout>
    </MainLayout>
  );
};

export default Lenders;
