import React from "react";
import "../styles/globals.css";
import { Box, Flex, NativeBaseProvider} from "native-base";
import Appbar from "./components/appbar";
import Drawer from "./components/drawer";

function MyApp({ Component, pageProps }) {
  return (
    <NativeBaseProvider >
      <Appbar/>
      <Component {...pageProps} />
    </NativeBaseProvider>
  );
}

export default MyApp;
