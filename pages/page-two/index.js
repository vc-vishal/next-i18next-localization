import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import Layout from "../../Layout/layout";

function PageTwo(props) {
  const router = useRouter();
  const handleGoToHome = () => router.push("/");
  const handleGoTo = () => router.push("/page-three");
  const handleGoBack = () => router.back();

  return (
    <>
      <h2>Page two</h2>
      <h4>Page with serverSideTranslations</h4>
      <button onClick={handleGoTo}>
        Goto page with serverSideTranslations
      </button>
      <button onClick={handleGoBack}>
        Goto page w/o serverSideTranslations
      </button>
      <button onClick={handleGoToHome}>Goto Home</button>
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default PageTwo;
PageTwo.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
