import React from "react";
import {
    HamburgerIcon,
    Hidden,
    HStack,
    Text,
    Avatar,
    useColorMode,
    Box,
    Center,
    FlatList,
    ShareIcon,
    Divider,
    FavouriteIcon,
    InfoIcon,
    Icon
  } from "native-base";
import { useState } from "react";

export let setIconFunction = (iconList) => {};
export default function Navbar() {
    const { toggleColorMode } = useColorMode();
    const [icons,setIcons] = useState([]);
    setIconFunction = (iconList)=>{
            setIcons(iconList)
          }
    return(
        <>
            <Box flex={1} _dark={{ bg: "#111827" }} _light={{ bg: "white" }}>
            <HStack
              px="4"
              py="3"
              justifyContent="space-between"
              alignItems="center"
              w="100%"
            >
              <HStack alignItems="center">
                <HamburgerIcon />
                <Text
                  fontSize="20"
                  fontWeight="bold"
                  px={4}
                  onPress={toggleColorMode}
                >
                  <Text color="#8B5CF6">HackWith</Text>NativeBase
                </Text>
              </HStack>
              <HStack>
                {icons.map((icon,index)=>{
                  return icon.name
                })
                }
                <Avatar
                  ml='2'
                  size="sm"
                  source={{
                    uri: "https://unsplash.com/photos/ZHvM3XIOHoE/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU1NjIxMDIw&force=true&w=640",
                  }}
                >
                  AJ
                </Avatar>
              </HStack>
            </HStack>
          </Box>
        </>
    )
}