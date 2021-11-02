import { Grommet } from "grommet";
import { theme } from "../util/theme";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Grommet full theme={theme} mode="dark">
      <Component {...pageProps} />
    </Grommet>
  );
}

export default MyApp;
