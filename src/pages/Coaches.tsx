


import CoachLayout from "../layout/CoachesLayout";
import MainLayout from "../layout/MainLayout";

const Coach = () => {
  return <div>Loaner</div>;
};

Coach.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <MainLayout>
      <CoachLayout>
        {page}
      </CoachLayout>
    </MainLayout>
  );
};

export default Coach;

