import { HamburgerIcon, HStack, Text, Avatar, useColorMode,Box } from "native-base";
import React from "react";
export default function Appbar(){
    const { colorMode, toggleColorMode } = useColorMode();
    return(
        <Box
            flex={1}
            _dark={{ bg: "blueGray.900" }}
            _light={{ bg: "blueGray.50" }}
            height={50}
        >  
            <HStack px="4" py="3" justifyContent='space-between' alignItems="center" w="100%">
                <HStack alignItems="center">
                <HamburgerIcon />
                <Text _dark={{ bg: "blueGray.900" }} _light={{ bg: "blueGray.50" }} fontSize="20" fontWeight="bold" px={4} onPress={toggleColorMode}>
                    <span style={{color : "#7F00FF"}}>HackWith</span>NativeBase
                </Text>
                </HStack>
                <HStack>
                <Avatar size ="sm" source={{
                    uri:"https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    }}>
                    AJ
                </Avatar>
                </HStack>
            </HStack> 
        </Box>
    )
}