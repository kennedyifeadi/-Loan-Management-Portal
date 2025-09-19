


import LoanerLayout from "../layout/CoachesLayout";
import MainLayout from "../layout/MainLayout";

const Loaner = () => {
  return <div>Loaner</div>;
};

Loaner.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <MainLayout>
      <LoanerLayout>{page}</LoanerLayout>
    </MainLayout>
  );
};

export default Loaner;

