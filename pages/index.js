import React from "react";
import {
  Center,
  useColorMode,
  Tooltip,
  IconButton,
  SunIcon,
  MoonIcon,
  Image,
  HStack,
  Text,
  Heading,
  Box,
  Link,
  VStack,
  Button,
  AspectRatio,
} from "native-base";
// Start editing here, save and see your changes.
import Setting from "./components/setting/Setting"
export default function App() {
  return (
    <Box h="100vh">
      <Setting/>
    </Box>
  );
}