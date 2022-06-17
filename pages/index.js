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
} from "native-base";
import React from "react";
import MainBox from "./components/screen2/MainBox";
export default function App() {
    const { toggleColorMode } = useColorMode();
    const data = [
        {
            name: "Contact",
        },
        {
            name: "Group",
        },
        {
            name: "Notifications",
        },
        {
            name: "Order",
        },
        {
            name: "Settings",
        },
        {
            name: "Privacy Policies",
        },
        {
            name: "Help and Support",
        },
        {
            name: "Refer and Earn",
        },
    ];
    return (
        //parent box for the entire page
        <Box flex={1} _dark={{ bg: "#374151" }} _light={{ bg: "#F5F3FF" }}>
            {/*App Bar Box*/}
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
                            <span style={{ color: "#8B5CF6" }}>HackWith</span>NativeBase
                        </Text>
                    </HStack>
                    <HStack>
                        <Avatar
                            size="sm"
                            source={{
                                uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                            }}
                        >
                            AJ
                        </Avatar>
                    </HStack>
                </HStack>
            </Box>
            {/* Body Box */}
            <Box flexDirection="row">
                {/*Navigation Drawer Box*/}
                <Box w="15vw" _dark={{ bg: "#111827" }} _light={{ bg: "white" }}>
                    <Divider />
                    <Box
                        shadow={2}
                        h="25vh"
                    >
                        <Center flex={1}>
                            <Avatar
                                size="xl"
                                m={1}
                                source={{
                                    uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                                }}
                            >
                                AJ
                            </Avatar>
                            <Text bold fontSize="md" fontFamily="heading">
                                Jane Doe
                            </Text>
                            <Text fontFamily="body" color="gray.500" fontSize="xs">
                                janedoe2@mydomain.com
                            </Text>
                        </Center>
                    </Box>
                    <Divider />
                    <Box
                        shadow={2}
                        h="60vh"
                    >
                        <FlatList
                            alignContent="center"
                            mt="4"
                            data={data}
                            renderItem={({ item }) => (
                                <Box borderRadius={4} pl="4" pr="5" py="3">
                                    <HStack space={4} ml={2} alignItems="center" flex={1}>
                                        <ShareIcon />
                                        <Text
                                            _dark={{
                                                color: "warmGray.50",
                                            }}
                                            color="coolGray.800"
                                            bold
                                        >
                                            {item.name}
                                        </Text>
                                    </HStack>
                                </Box>
                            )}
                            keyExtractor={(item) => item.id}
                        />
                    </Box>
                    <Divider />
                    <Box
                        shadow={2}
                        h="7.5vh"
                    >
                        <HStack alignItems="center" space={4} ml={6} flex={1}>
                            <ShareIcon />
                            <Text fontWeight="500">Logout</Text>
                        </HStack>
                    </Box>
                </Box>
                {/*Content Box*/}
                <Box>
                    <MainBox />
                </Box>
            </Box>
        </Box>
    );
}
