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
} from "native-base";
import Image from "next/image";
import bedlamp from "../../../public/images/bedlamp.jpg";
import perfume from "../../../public/images/perfume.jpg";
import skincare from "../../../public/images/skincare.jpg";
import { useState } from "react";

const Order = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Box h="100%" p="50px" bg="#F5F3FF">
      <h2 style={{ width: "300px" }}>
        {" "}
        <ArrowBackIcon color="black" mr="10px" size="5" />
        My Cart
      </h2>
      <Box h="90%" mt="20px" mb="20px" bg="white">
        <VStack space={4} alignItems="center">
          <Box w="70%" mb="30px" mt="20px" h="100px" bg="white">
            <HStack h="100%">
              <Box w="10%">
                <Image src={bedlamp} border="sm"></Image>
              </Box>
              <Box w="25%">
                <Text fontSize="lg" fontWeight="600" ml="10px" mt="10px">
                  BEDLAMP
                </Text>
                <Text fontSize="sm" fontWeight="400" ml="10px" mt="10px">
                  Size: Small
                </Text>
                <Text fontSize="md" fontWeight="600" ml="10px" mt="10px">
                  &#8377; 769 <Text color="green.300">(25% off)</Text>
                </Text>
              </Box>
              <Box ml="50%" w="15%">
                <HStack>
                  <Button
                    onPress={() => console.log("hello world")}
                    mt="40px"
                    bg="#5B21B6"
                    color="black"
                    h="30px"
                    // mr="10px"
                    _hover={{ bg: "#4C1D95" }}
                    _pressed={{ bg: "#4C1D95" }}
                    ml="30px"
                  >
                    -
                  </Button>
                  <Text fontSize="md" fontWeight="600" ml="10px" mt="40px">
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
          <Box w="70%" mb="30px" h="100px" bg="white">
            <HStack h="100%">
              <Box w="10%">
                <Image src={perfume} h="100%" border="sm"></Image>
              </Box>
              <Box w="25%">
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
              <Box ml="50%" w="15%">
                <HStack>
                  <Button
                    onPress={() => console.log("hello world")}
                    mt="40px"
                    bg="#5B21B6"
                    color="black"
                    h="30px"
                    ml="30px"
                    _hover={{ bg: "#4C1D95" }}
                    _pressed={{ bg: "#4C1D95" }}
                    // mr="10px"
                  >
                    -
                  </Button>
                  <Text fontSize="md" fontWeight="600" ml="10px" mt="40px">
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

          <Box w="70%" mb="30px" h="100px" bg="white">
            <HStack h="100%">
              <Box w="10%">
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
              <Box ml="50%" w="15%">
                <HStack>
                  <Button
                    onPress={() => console.log("hello world")}
                    mt="40px"
                    bg="#5B21B6"
                    color="black"
                    h="30px"
                    ml="30px"
                    _hover={{ bg: "#4C1D95" }}
                    _pressed={{ bg: "#4C1D95" }}
                    // mr="10px"
                  >
                    -
                  </Button>
                  <Text fontSize="md" fontWeight="600" ml="10px" mt="40px">
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
          <Box justifyContent="left" w="70%">
            <Text fontSize="lg" fontWeight="600">
              Order
            </Text>
          </Box>
          <HStack
            w="70%"
            mb="30px"
            // h="300px"
            bg="white"
            justifyContent="space-evenly"
          >
            <Box w="50%">
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
            <Box w="50%">
              <Text fontSize="lg" fontWeight="400" mb="20px" textAlign="right">
                &#8377; 3561.00
              </Text>
              <Text fontSize="lg" fontWeight="400" mb="20px" textAlign="right">
                &#8377; (214.00)
              </Text>
              <Text fontSize="lg" fontWeight="400" mb="20px" textAlign="right">
                Apply Coupon
              </Text>
              <Text fontSize="lg" fontWeight="400" mb="20px" textAlign="right">
                Free
              </Text>
            </Box>
          </HStack>
          <HStack w="70%" mt="-40px" bg="white">
            <Divider my="2" />
          </HStack>
          <HStack
            w="70%"
            mb="30px"
            // h="300px"
            bg="white"
            justifyContent="space-evenly"
          >
            <Box w="50%">
              <Text fontSize="lg" fontWeight="600" mb="20px">
                Total Amount
              </Text>
            </Box>
            <Box w="50%">
              <Text fontSize="lg" fontWeight="400" mb="20px" textAlign="right">
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
      <Center>
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <Modal.Content maxWidth="400px">
            <Modal.CloseButton />
            <Modal.Header>Contact Us</Modal.Header>
            <Modal.Body>
              <FormControl>
                <FormControl.Label>Name</FormControl.Label>
                <Input />
              </FormControl>
              <FormControl mt="3">
                <FormControl.Label>Email</FormControl.Label>
                <Input />
              </FormControl>
            </Modal.Body>
            <Modal.Footer>
              <Button.Group space={2}>
                <Button
                  variant="ghost"
                  colorScheme="blueGray"
                  onPress={() => {
                    setShowModal(false);
                  }}
                >
                  Cancel
                </Button>
                <Button
                  onPress={() => {
                    setShowModal(false);
                  }}
                >
                  Save
                </Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </Center>
    </Box>
  );
};

export default Order;
