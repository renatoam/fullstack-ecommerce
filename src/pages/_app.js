import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/global";
import Head from "next/head"
import { MenuProvider } from "../context/menu"

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <MenuProvider>
          <Component {...pageProps} />
        </MenuProvider>
      </ThemeProvider>
    </>
  );
}
