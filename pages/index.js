import { useRouter } from "next/router";
import Layout from "../Layout/layout";

function IndexPage() {
  const router = useRouter();

  const handleGoTo = () => router.push("/page-one");

  return (
    <>
      <h2>Home page</h2>
      <h4>Page w/o serverSideTranslations</h4>
      <button onClick={handleGoTo}>Goto page w/o serverSideTranslations</button>
    </>
  );
}
export default IndexPage;

IndexPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
