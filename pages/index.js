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
import React from "react";
import Setting from "./components/Setting";
import MutualFund from "./components/MutualFund";
import { useEffect, useState } from "react";
import TrackOrder from "./components/track-order";
import { Person, Group, Notifications, ShoppingBag, Settings, Policy, SupportAgent, Share, Logout } from "@mui/icons-material";
import Order from "./components/Order";
import MainBox from "./components/screen2/MainBox"
export let setIconFunction = (iconList) => {};
export let setScreenName = (screenName) => {};
export default function App() {
  const { toggleColorMode } = useColorMode();
  const [icons,setIcons] = useState([])
  const [ screen, setScreen] = useState(<TrackOrder/>);

  setIconFunction = (iconList)=>{
    setIcons(iconList)
  }

  setScreenName = (screenName)=>{
    setScreen(screenName)
  }

  //Used MUI icons because @expo/vector-icons were giving some error in webpack config loaders
  const data = [
    {
      name: "Contact",
      icon: <Person fontSize='small'/>,
    },
    {
      name: "Group",
      icon: <Group fontSize='small'/>,
    },
    {
      name: "Notifications",
      icon: <Notifications fontSize='small'/>,
    },
    {
      name: "Order",
      icon: <ShoppingBag fontSize='small'/>,
    },
    {
      name: "Settings",
      icon: <Settings fontSize='small'/>,
    },
    {
      name: "Privacy Policies",
      icon: <Policy fontSize='small'/>,
    },
    {
      name: "Help and Support",
      icon: <SupportAgent fontSize='small'/>,
    },
    {
      name: "Refer and Earn",
      icon: <Share fontSize='small' />,
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
      {/* Body Box */}
      <Box flexDirection="row">
        {/*Navigation Drawer Box*/}
        <Box w="15vw" _dark={{ bg: "#111827" }} _light={{ bg: "white" }}>
          <Divider/>
          <Box
            shadow={2}
            h="25vh"
            alignItems='center'
          >
            {/* <Center flex={1}> */}
              <Avatar
                size="xl"
                mt='8'
                source={{
                  uri: "https://unsplash.com/photos/ZHvM3XIOHoE/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU1NjIxMDIw&force=true&w=640",
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
            {/* </Center> */}
          </Box>
          <Divider />
          <Box shadow={2} h="60vh">
            <FlatList
              alignContent="center"
              mt="4"
              data={data}
              renderItem={({ item }) => (
                <Box borderRadius={4} pl="4" pr="5" py="3">
                  <HStack space={4} ml={2} alignItems="center" flex={1}>
                    <Box _dark={{
                        color: "gray.50",
                      }}
                      _light={{
                        color:"gray.800",
                      }}
                      >
                        {item.icon}
                      </Box>
                    <Text
                      _dark={{
                        color: "gray.50",
                      }}
                      _light={{
                        color:"gray.800",
                      }}
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
          <Divider/>
          <Box
            shadow={2}
            h="7.5vh"
          >
            <HStack alignItems="center" space={3} ml={6} flex={1} _dark={{  color:"#F9FAFB" }} _light={{  color:"#1F2937" }}>
              <Logout fontSize='small' />
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