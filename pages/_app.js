import React from "react";
import "../styles/globals.css";
import { NativeBaseProvider } from "native-base";
import Appbar from "./components/appbar";
import MainBox from "./components/screen2/MainBox";

function MyApp({ Component, pageProps }) {
    return (
        <NativeBaseProvider >
            <Appbar />
            <Component {...pageProps} />
        </NativeBaseProvider>
    );
}

export default MyApp;
