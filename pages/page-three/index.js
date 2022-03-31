import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import Layout from "../../Layout/layout";

function PageThree() {
  const router = useRouter();

  const handleGoToHome = () => router.push("/");
  const handleGoBack = () => router.back();

  return (
    <>
      <h2>Page three</h2>
      <h4>Page with serverSideTranslations</h4>
      <button onClick={handleGoBack}>Go Back</button>
      <button onClick={handleGoToHome}>Goto Home</button>
    </>
  );
}

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default PageThree;

PageThree.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
