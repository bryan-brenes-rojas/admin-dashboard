import { MainLayout } from "../../../../layouts/main-layout";

export const Main = () => {
  return (
    <MainLayout
      title="Dashboard"
      description="Welcome to Geex Modern Admin Dashboard"
      side={<div>Side content</div>}
    >
      <div>Main content</div>
    </MainLayout>
  );
};
