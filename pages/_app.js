import React from "react";
import "../styles/globals.css";
import { NativeBaseProvider } from "native-base";
import Appbar from "./components/appbar";

function MyApp({ Component, pageProps }) {
  return (
    <NativeBaseProvider>
      <Appbar />
      <Component {...pageProps} />
    </NativeBaseProvider>
  );
}

export default MyApp;
