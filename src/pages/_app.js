import { ThemeProvider } from "styled-components";
import GlobalStyle from "../modules/shared/styles/global";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../util/rootReducer";

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

const store = createStore(rootReducer)

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  );
}
