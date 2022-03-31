import { useRouter } from "next/router";
import Layout from "../../Layout/layout";

function PageOne() {
  const router = useRouter();

  const handleGoBack = () => router.push("/");
  const handleGoTo = () => router.push({ pathname: "/page-two", locale: "en" });

  return (
    <>
      <h2>Page one</h2>
      <h4>Page w/o serverSideTranslations</h4>
      <button onClick={handleGoTo}>
        Goto page with serverSideTranslations
      </button>
      <button onClick={handleGoBack}>Goto Home</button>
    </>
  );
}
export default PageOne;

PageOne.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
