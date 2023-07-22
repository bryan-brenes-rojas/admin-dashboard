import { MainLayout } from "../../../../layouts/main-layout";
import { SideContent } from "./side-content/side-content";

export const Main = () => {
  return (
    <MainLayout
      title="Dashboard"
      description="Welcome to Geex Modern Admin Dashboard"
      side={<SideContent />}
    >
      <div>Main content</div>
    </MainLayout>
  );
};
