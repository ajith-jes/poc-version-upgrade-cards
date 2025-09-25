import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { TestStore } from "../../stores/test";

export default function App({ Component, pageProps }: AppProps) {

  return <TestStore.Provider>
    <Component {...pageProps} />
  </TestStore.Provider>;
}
