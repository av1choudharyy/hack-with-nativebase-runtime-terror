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
import React, { useEffect, useState } from "react";
import TrackOrder from "./components/track-order";
import {PersonIcon} from '@mui/icons-material/Person';

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
  const data = [
    {
      name: "Contact",
      icon: "PersonIcon",
    },
    {
      name: "Group",
      icon: "GroupIcon",
    },
    {
      name: "Notifications",
      icon: "NotificationsIcon",
    },
    {
      name: "Order",
      icon: "ShoppingBagIcon",
    },
    {
      name: "Settings",
      icon: "SettingsIcon",
    },
    {
      name: "Privacy Policies",
      icon: "Policy",
    },
    {
      name: "Help and Support",
      icon: "SupportAgentIcon",
    },
    {
      name: "Refer and Earn",
      icon: "ShareIcon",
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
              return <Box alignContent='center' justifyContent='center' m='2'>{icon.name}</Box>
            })
            }
            <Avatar
              ml='2'
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
          <Divider/>
          <Box
            shadow={2}
            h="25vh"
            alignItems='center'
          >
            {/* <Center flex={1}> */}
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
            {/* </Center> */}
          </Box>
          <Divider/>
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
          <Divider/>
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
          {screen}
          {/* Hello */}
        </Box>
      </Box>
    </Box>
  );
}