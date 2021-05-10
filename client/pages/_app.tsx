import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Head from "next/head";
import "../styles/globals.css";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ion-icon";
    }
  }
}

const Wrapper = ({ children }) => {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === "light" ? "dark" : "light");
    }
  };

  return (
    <div id="App" className="flex flex-col">
      <Head>
        <title>Notive</title>
      </Head>

      <div id="Content" className="flex-grow ">
        {children}
      </div>
    </div>
  );
};

function MyApp({ Component, pageProps }) {
  return (
    <Wrapper>
      <Component {...pageProps} />
    </Wrapper>
  );
}

export default MyApp;
