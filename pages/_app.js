import { appWithTranslation } from "next-i18next";
import { memo, useEffect } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  useEffect(() => {
    localStorage.setItem("background", "default-bg");
  }, []);

  return <>{getLayout(<Component {...pageProps} />)}</>;
}

export default memo(appWithTranslation(MyApp));
