import { Box } from "native-base";
import React from "react";
import Drawer from "./components/drawer";
// Start editing here, save and see your changes.
import Setting from "./components/Setting"
import Appbar from "./components/appbar";
export default function App() {
  return (
    <Box h="100vh" w='100vw'>
      <Appbar/>
    </Box>
  );
}