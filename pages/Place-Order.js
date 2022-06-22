import React from "react";
import {
  Box,
  Heading,
  ArrowBackIcon,
  VStack,
  Center,
  Avatar,
  Text,
  HStack,
  Button,
  Divider,
  Modal,
  FormControl,
  Input,
  Radio,
} from "native-base";
import Image from "next/image";
import bedlamp from "../public/images/bedlamp.jpg";
import perfume from "../public/images/perfume.jpg";
import skincare from "../public/images/skincare.jpg";
import { useState } from "react";
import SideBar from "./components/SideBar";
import Navbar from "./components/Navbar";

const Order = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    // <Box pl="50px" bg="#F5F3FF" pb="20px" w="1150px">
    <>
      <Navbar />
      <Box
        flexDirection="row"
        _light={{ bg: "white" }}
        _dark={{ bg: "#1F2937" }}
      >
        {/* side bar */}
        <Box _light={{ bg: "white" }} _dark={{ bg: "#1F2937" }}>
          <SideBar />
        </Box>
        {/* page content */}
        <Box _light={{ bg: "#F5F3FF" }} _dark={{ bg: "#374151" }}>
          <HStack alignItems="center" m="8" space={2}>
            <ArrowBackIcon
              _light={{ color: "#1F2937" }}
              _dark={{ color: "#F9FAFB" }}
            />
            <Text
              fontWeight={500}
              _light={{ color: "#1F2937" }}
              _dark={{ color: "#F9FAFB" }}
            >
              My Cart
            </Text>
          </HStack>
          <Box
          mx="20px"
          mt='-10px'
            _light={{ bg: "white" }}
            _dark={{ bg: "#1F2937" }}
          >
            <Box
              mt="20px"
              mb="20px"
              bg="white"
              pb="20px"
              w="1150px"
              _light={{ bg: "white" }}
              _dark={{ bg: "#1F2937" }}
            >
              <VStack space={4} alignItems="center">
                
                <Box
                  w="70%"
                  mb="30px"
                  h="100px"
                  bg="white"
                  _light={{ bg: "white" }}
                      _dark={{ bg: "#374151" }}
                >
                  <HStack h="100%">
                    <Box w="10%" _light={{ bg: "white" }}
                      _dark={{ bg: "#374151" }} my='2' ml='2'>
                      <Image src={perfume} h="100%" border="sm"></Image>
                    </Box>
                    <Box w="25%" _light={{ bg: "white" }}
                      _dark={{ bg: "#374151" }}>
                      <Text fontSize="lg" fontWeight="600" ml="10px" mt="10px">
                        PERFUME
                      </Text>
                      <Text fontSize="sm" fontWeight="400" ml="10px" mt="10px">
                        Size: Large
                      </Text>
                      <Text fontSize="md" fontWeight="600" ml="10px" mt="10px">
                        &#8377; 999 <Text color="green.300">(45% off)</Text>
                      </Text>
                    </Box>
                    <Box
                      ml="50%"
                      w="15%"
                      _light={{ bg: "white" }}
                      _dark={{ bg: "#374151" }}
                    >
                      <HStack>
                        <Button
                          onPress={() => console.log("hello world")}
                          mt="40px"
                          bg="#5B21B6"
                          color="black"
                          h="30px"
                          ml="10px"
                          _hover={{ bg: "#4C1D95" }}
                          _pressed={{ bg: "#4C1D95" }}
                          // mr="10px"
                        >
                          -
                        </Button>
                        <Text
                          fontSize="md"
                          fontWeight="600"
                          ml="10px"
                          mt="42.35px"
                        >
                          1
                        </Text>
                        <Button
                          onPress={() => console.log("hello world")}
                          bg="#5B21B6"
                          color="black"
                          ml="10px"
                          mt="40px"
                          h="30px"
                          _hover={{ bg: "#4C1D95" }}
                          _pressed={{ bg: "#4C1D95" }}
                        >
                          +
                        </Button>
                      </HStack>
                    </Box>
                  </HStack>
                </Box>

                <Box
                  w="70%"
                  mb="10px"
                  h="100px"
                  bg="white"
                  _light={{ bg: "white" }}
                      _dark={{ bg: "#374151" }}
                >
                  <HStack h="100%">
                    <Box w="10%"
                    _light={{ bg: "white" }}
                    _dark={{ bg: "#374151" }}
                    my='2'
                    ml='2'>
                      <Image src={skincare} border="sm"></Image>
                    </Box>
                    <Box w="25%">
                      <Text fontSize="lg" fontWeight="600" ml="10px" mt="10px">
                        SKIN CARE KIT
                      </Text>
                      <Text fontSize="sm" fontWeight="400" ml="10px" mt="10px">
                        Size: Medium
                      </Text>
                      <Text fontSize="md" fontWeight="600" ml="10px" mt="10px">
                        &#8377; 1899 <Text color="green.300">(60% off)</Text>
                      </Text>
                    </Box>
                    <Box ml="50%" w="15%"
                    _light={{ bg: "white" }}
                    _dark={{ bg: "#374151" }}>
                      <HStack>
                        <Button
                          onPress={() => console.log("hello world")}
                          mt="40px"
                          bg="#5B21B6"
                          color="black"
                          h="30px"
                          ml="20px"
                          _hover={{ bg: "#4C1D95" }}
                          _pressed={{ bg: "#4C1D95" }}
                          // mr="10px"
                        >
                          -
                        </Button>
                        <Text
                          fontSize="md"
                          fontWeight="600"
                          ml="10px"
                          mt="42.35px"
                        >
                          1
                        </Text>
                        <Button
                          onPress={() => console.log("hello world")}
                          bg="#5B21B6"
                          color="black"
                          ml="10px"
                          mt="40px"
                          h="30px"
                          _hover={{ bg: "#4C1D95" }}
                          _pressed={{ bg: "#4C1D95" }}
                        >
                          +
                        </Button>
                      </HStack>
                    </Box>
                  </HStack>
                </Box>
                <Box
                  justifyContent="left"
                  w="70%"
                  _light={{ bg: "white" }}
                  _dark={{ bg: "#1F2937" }}
                >
                  <Text fontSize="lg" fontWeight="600">
                    Order
                  </Text>
                </Box>
                <HStack
                  w="70%"
                  mb="10px"
                  // h="300px"
                  bg="white"
                  justifyContent="space-evenly"
                  _light={{ bg: "white" }}
                  _dark={{ bg: "#1F2937" }}
                >
                  <Box
                    w="50%"
                    _light={{ bg: "white" }}
                    _dark={{ bg: "#1F2937" }}
                  >
                    <Text fontSize="lg" fontWeight="400" mb="20px">
                      Total
                    </Text>
                    <Text fontSize="lg" fontWeight="400" mb="20px">
                      Discount
                    </Text>
                    <Text fontSize="lg" fontWeight="400" mb="20px">
                      Coupon Discount
                    </Text>
                    <Text fontSize="lg" fontWeight="400" mb="20px">
                      Shipping
                    </Text>
                  </Box>
                  <Box
                    w="50%"
                    _light={{ bg: "white" }}
                    _dark={{ bg: "#1F2937" }}
                  >
                    <Text
                      fontSize="lg"
                      fontWeight="400"
                      mb="20px"
                      textAlign="right"
                    >
                      &#8377; 3561.00
                    </Text>
                    <Text
                      fontSize="lg"
                      fontWeight="400"
                      mb="20px"
                      textAlign="right"
                    >
                      &#8377; (214.00)
                    </Text>
                    <Text
                      fontSize="lg"
                      fontWeight="400"
                      mb="20px"
                      textAlign="right"
                    >
                      Apply Coupon
                    </Text>
                    <Text
                      fontSize="lg"
                      fontWeight="400"
                      mb="20px"
                      textAlign="right"
                    >
                      Free
                    </Text>
                  </Box>
                </HStack>
                <HStack
                  w="70%"
                  mt="-40px"
                  bg="white"
                  _light={{ bg: "white" }}
                  _dark={{ bg: "#1F2937" }}
                >
                  <Divider my="2" />
                </HStack>
                <HStack
                  w="70%"
                  mb="10px"
                  // h="300px"
                  bg="white"
                  justifyContent="space-evenly"
                  _light={{ bg: "white" }}
                  _dark={{ bg: "#1F2937" }}
                >
                  <Box
                    w="50%"
                    _light={{ bg: "white" }}
                    _dark={{ bg: "#1F2937" }}
                  >
                    <Text fontSize="lg" fontWeight="600" mb="20px">
                      Total Amount
                    </Text>
                  </Box>
                  <Box w="50%">
                    <Text
                      fontSize="lg"
                      fontWeight="400"
                      mb="20px"
                      textAlign="right"
                    >
                      &#8377; 3340.00
                    </Text>
                  </Box>
                </HStack>

                <Button
                  w="70%"
                  bg="#4C1D95"
                  _hover={{ bg: "#4C1D95" }}
                  _pressed={{ bg: "#4C1D95" }}
                  onPress={() => setShowModal(true)}
                >
                  Place Order
                </Button>
              </VStack>
            </Box>
            <Box _light={{ bg: "white" }} _dark={{ bg: "#1F2937" }}>
              <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                <Modal.Content maxWidth="400px">
                  <Modal.Body>
                    <Box>
                      <HStack>
                        <Box w="25%" h="100px">
                          <Image src={bedlamp} br="10px"></Image>
                        </Box>
                        <Box ml="10px">
                          <Heading size="md" fontWeight="700">
                            Body Suit
                          </Heading>
                          <Heading
                            size="md"
                            fontWeight="400"
                            color="coolGray.400"
                          >
                            Mother Care
                          </Heading>
                          <Heading size="md" fontWeight="300">
                            {" "}
                            &#8377; 500
                          </Heading>
                        </Box>
                      </HStack>
                    </Box>
                    <Heading size="md" pt="10px" pb="10px">
                      Choose a delivery option:
                    </Heading>
                    <Radio.Group
                      name="myRadioGroup"
                      accessibilityLabel="favorite number"
                      color="#4C1D95"
                    >
                      <Radio value="one" my={2}>
                        Monday- Free Delivery
                      </Radio>
                      <Radio value="two" my={2}>
                        Tuesday- Delivery Fee &#8377; 50
                      </Radio>
                      <Radio value="three" my={2}>
                        2 Buisness Days- Delivery Fee &#8377; 150
                      </Radio>
                      <Radio value="four" my={2}>
                        Pickup- Find a Location
                      </Radio>
                    </Radio.Group>

                    <Button
                      w="100%"
                      mt="5px"
                      bg="#4C1D95"
                      _hover={{ bg: "#4C1D95" }}
                      _pressed={{ bg: "#4C1D95" }}
                      onPress={() => {
                        setShowModal(false);
                      }}
                    >
                      Continue
                    </Button>
                  </Modal.Body>
                </Modal.Content>
              </Modal>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Order;
