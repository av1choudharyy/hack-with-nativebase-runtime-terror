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
import Order from "./components/Order/Order";
// Start editing here, save and see your changes.
export default function App() {
  return (
    <Box>
      <Order />
    </Box>
  );
}
