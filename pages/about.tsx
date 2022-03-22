import { DarkLayout } from "../components/layouts/DarkLayout";
import { MainLayout } from "../components/layouts/MainLayout";

export default function AboutPage() {
  return (
    <>
      <h2>N E X T about</h2>
    </>
  );
}

AboutPage.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout titulo="About Page">
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
