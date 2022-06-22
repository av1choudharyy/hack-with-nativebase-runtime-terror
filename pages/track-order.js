import React, { useEffect, useState } from "react";
import {
  ArrowBackIcon,
  Box,
  Center,
  HStack,
  Text,
  VStack,
  Image,
  CheckCircleIcon,
  Divider,
  ShareIcon,
  FavouriteIcon,
  InfoIcon
} from "native-base";

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { setIconFunction } from ".";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";

export default function TrackOrder() {
  const [icons, setIcons] = useState([])
  setIconFunction = (iconList) => {
    setIcons(iconList)
  }
  const iconList = [{
    name: <Box alignContent='center' justifyContent='center' m='2' ><ShareIcon size='sm' _dark={{ color: "gray.500" }} _light={{ color: "gray.400" }} /></Box>
  },
  {
    name: <Box alignContent='center' justifyContent='center' m='2' ><FavouriteIcon size='sm' _dark={{ color: "gray.500" }} _light={{ color: "gray.400" }} /></Box>
  },
  {
    name: <Box alignContent='center' justifyContent='center' m='2' _dark={{ color: "gray.500" }} _light={{ color: "gray.400" }} ><ShoppingCartIcon fontSize="small" /></Box>
  }
  ]
  useEffect(() => {
    setIconFunction(iconList)
  }, []);
  return (
    <>
      <Navbar />
      <Box flexDirection="row">
        <Box>
          <SideBar />
        </Box>
        <Box _light={{ bg: "#F5F3FF" }}
                _dark={{ bg: "#374151" }}>
          <Box w="100vwh">
            <VStack>
              <HStack alignItems="center" m="8" space={2} >
                <ArrowBackIcon _light={{ color: "#1F2937" }} _dark={{ color: "#F9FAFB" }} />
                <Text fontWeight={500} _light={{ color: "#1F2937" }} _dark={{ color: "#F9FAFB" }}>Track Order</Text>
              </HStack>
              <Box
                _light={{ bg: "white" }}
                _dark={{ bg: "#1F2937" }}
                h="80vh"
                w="80vw"
                mx="2.5vw"
                alignItems="center"
              >
                <VStack space={8} w="60vw" mx='4vw' mt='4vh'>
                  <Box
                    borderRadius={8}
                    _light={{ bg: "#F3F4F6" }}
                    _dark={{ bg: "#374151" }}
                  //   mt="4vh"
                  //   mx="4vw"
                  //   w="60vw"
                  >
                    <HStack space={4}>
                      <Image
                        margin={4}
                        h="90"
                        w="74"
                        source={{
                          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Woman_with_a_blue_scarf_%28Unsplash%29.jpg/320px-Woman_with_a_blue_scarf_%28Unsplash%29.jpg",
                        }}
                        alt="order image"
                      />
                      <VStack justifyContent="space-evenly">
                        <Box>
                          <Text fontWeight={500}>Sweater Dress</Text>
                          <Text>Girl Self Design</Text>
                        </Box>
                        <Box>
                          <Text fontWeight={500}>Rs 1999</Text>
                        </Box>
                      </VStack>
                    </HStack>
                  </Box>
                  <VStack>
                    <VStack space={2}>
                      <HStack space={4}>
                        <Box zIndex='-1'>
                          <CheckCircleIcon m="1" _light={{ color: "#4C1D95" }} _dark={{ color: '#8B5CF6' }} size="sm" z-index='-1' />
                        </Box>
                        <Divider zIndex='-2' ml='-7' mt='4' _light={{ bg: "#4C1D95" }} _dark={{ bg: '#8B5CF6' }} orientation="vertical" />
                        <Box>
                          <Text fontWeight={600}>Order Placed</Text>
                          <Text fontWeight={500}>
                            We have received your order on 28-May-2021.
                          </Text>
                          <Text fontWeight={400}>5:38PM</Text>
                        </Box>
                      </HStack>
                      <HStack space={4}>
                        <Box zIndex='-1'>
                          <CheckCircleIcon m="1" _light={{ color: "#4C1D95" }} _dark={{ color: '#8B5CF6' }} size="sm" z-index='-1' />
                        </Box>
                        <Divider zIndex='-2' ml='-7' mt='4' _light={{ bg: "#4C1D95" }} _dark={{ bg: '#8B5CF6' }} orientation="vertical" />
                        <Box>
                          <Text fontWeight={600}>Order Packed</Text>
                          <Text fontWeight={500}>
                            Seller has processed your order on 29th. Your item has
                            been picked up by courier partner on 30 May-2021.
                          </Text>
                          <Text fontWeight={400}>5:38PM</Text>
                        </Box>
                      </HStack>
                      <HStack space={4}>
                        <Box zIndex='-1'>
                          <CheckCircleIcon m="1" _light={{ color: "#C4B5FD" }} _dark={{ color: '#9CA3AF' }} size="sm" z-index='-1' />
                        </Box>
                        <Divider borderStyle='dashed' borderColor="#8B5CF6" _light={{ borderColor: "#C4B5FD", bg: "white" }} _dark={{ borderColor: '#D1D5DB', bg: "#1F2937" }} borderWidth='1' borderRadius='1' zIndex='-2' ml='-7' mt='4' orientation="vertical" />
                        <Box>
                          <Text color="#6B7280" fontWeight={600}>
                            Shipped
                          </Text>
                          <Text color="#6B7280" fontWeight={500}>
                            Your item has been picked up by courier partner on 30
                            May-2021.
                          </Text>
                          <Text color="#6B7280" fontWeight={400}>
                            5:38PM
                          </Text>
                        </Box>
                      </HStack>
                      <HStack space={4}>
                        <Box zIndex='-1'>
                          <CheckCircleIcon m="1" _light={{ color: "#C4B5FD" }} _dark={{ color: '#9CA3AF' }} size="sm" z-index='-1' />
                        </Box>
                        <Box>
                          <Text color="#6B7280" fontWeight={600}>
                            Out For Delivery
                          </Text>
                          <Text color="#6B7280" fontWeight={500}>
                            Your order is out for delivery.
                          </Text>
                        </Box>
                      </HStack>
                    </VStack>
                  </VStack>
                </VStack>
              </Box>
            </VStack>
          </Box>
        </Box>

      </Box>

    </>
  );
}
