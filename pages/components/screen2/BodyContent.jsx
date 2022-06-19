import React from 'react'
import {
    Center,
    Box,
    Flex,
    VStack,
    HStack,
    Text,
    ScrollView,
    Heading,
    Divider,
    Button,
    FavouriteIcon,
} from "native-base";
import Image from 'next/image'
import { FiHeart } from 'react-icons/fi'

import img from '../../../public/images/screen2.jpg';

const BodyContent = () => {
    let buttonTextAttr = {
        color: "#1F2937",
        fontSize: "md",
        fontWeight: "420",
        fontSize: "20"
    }
    return (

        <Box bgColor="#FFFFFF" ml="5" mt="4">

            <HStack p="8">
                <Box borderWidth="5" borderColor="#F5F3FF" borderRadius="5">
                    <Box borderRadius="7">
                        <Image src={img} alt="screen2.jpg" />
                    </Box>
                </Box>
                <Box ml="6">
                    <Text fontWeight="510" fontSize="18px">Body Suit</Text>
                    <Text fontWeight="400" fontSize="16px" color="#6B7280">Mother care</Text>
                    <Text fontWeight="510" fontSize="20px" color="#1F2937">₹500</Text>
                    <HStack space="12vw" mt="10px">
                        <Text fontWeight="510" fontSize="18px" color="#1F2937" height="21px">Select Size <Text color='#6B7280'>(Age Group)</Text></Text>
                        <Text fontWeight="510" fontSize="18px" color="#4C1D95" height="21px">Size Chart</Text>
                    </HStack>
                    <HStack space={5} mt="5">
                        <Button height="4vw" bgColor="#F5F3FF" alignItems="center" _text={buttonTextAttr}>new born</Button>
                        <Button bgColor="#F5F3FF" alignItems="center" _text={buttonTextAttr}>Tiny Baby</Button>
                        <Button bgColor="#F5F3FF" alignItems="center" _text={buttonTextAttr}>0-3 M</Button>
                    </HStack>
                    <HStack space={10} mt="4">
                        <Box bg="#F5F3FF" h="4vw" w="4vw" alignItems="center" justifyContent="center"><FiHeart size="30" color='#4C1D95' /></Box>
                        <Button width="25vw" bgColor="#4C1D95" size="lg" borderWidth="3px" borderColor="#4C1D95" borderRadius="5" _text={{
                            color: "#F9FAFB",
                            fontWeight: "520",
                            fontSize: "22"
                        }}>CONTINUE</Button>
                    </HStack>
                    <HStack space={10} mt="6">
                        <Box justifyContent="center" alignItems="center" h="6vh" w="10vw" /* borderBottomWidth="5px" borderBottomColor="#4C1D95" */>
                            <Text fontWeight="510" fontSize="18px" color="#4C1D95" height="21px" >Description</Text>
                            <Divider mt="2" borderTopWidth="6" borderColor="#4C1D95" borderTopRadius="4" />
                        </Box>
                        <Box justifyContent="center" alignItems="center" h="6vh" w="10vw" >
                            <Text fontWeight="510" fontSize="18px" color="#6B7280" height="21px">Reviews</Text>
                            <Divider mt="2" borderTopWidth="6" borderColor="#FFFFFF" borderTopRadius="4" />
                        </Box>
                    </HStack>
                    <Box maxWidth="33vw" mt="4">Yellow bodysuit, has a round neck with envelope detail along the shoulder, short sleeves and snap button closures along the crotch. Yellow bodysuit, has a round neck with envelope detail along the shoulder, short sleeves and snap button closures along the crotch.Yellow bodysuit, has a round neck with envelo</Box>

                </Box>
            </HStack>

        </Box>

    )
}

export default BodyContent

/*

<Box flex="1" safeAreaTop>
            <ScrollView>
                <VStack space={2.5} w="100%" px="3" mt="2">
                    <Flex direction="row" mb="2.5" mt="1.5" justifyContent="left">
                        <Box>
                            <Image src={img} alt="screen2.jpg" />
                        </Box>
                        <Box ml="10px" mt="20">
                            <Text fontWeight="510" fontSize="18px">Body Suit</Text>
                            <Text fontWeight="400" fontSize="16px" color="#6B7280">Mother care</Text>
                            <Text fontWeight="510" fontSize="20px" color="#1F2937">₹500</Text>
                            <HStack space="12vw" mt="10px">
                                <Text fontWeight="510" fontSize="18px" color="#1F2937" height="21px">Select Size <Text color='#6B7280'>(Age Group)</Text></Text>
                                <Text fontWeight="510" fontSize="18px" color="#4C1D95" height="21px">Size Chart</Text>
                            </HStack>
                            <HStack space={5} mt="5">
                                <Button height="4vw" bgColor="#F5F3FF" alignItems="center" _text={buttonTextAttr}>new born</Button>
                                <Button bgColor="#F5F3FF" alignItems="center" _text={buttonTextAttr}>Tiny Baby</Button>
                                <Button bgColor="#F5F3FF" alignItems="center" _text={buttonTextAttr}>0-3 M</Button>
                            </HStack>
                            <HStack space={10} mt="4">
                                <Box bg="#F5F3FF" h="4vw" w="4vw" alignItems="center" justifyContent="center"><FavouriteIcon size="9" /></Box>
                                <Button width="25vw" bgColor="#4C1D95" size="lg" _text={{
                                    color: "#F9FAFB",
                                    fontWeight: "520",
                                    fontSize: "22"
                                }}>CONTINUE</Button>
                            </HStack>
                            <HStack space={10} mt="6">
                                <Box justifyContent="center" alignItems="center" h="6vh" w="10vw" borderBottomWidth="5px" borderBottomColor="#4C1D95">
                                    <Text fontWeight="510" fontSize="18px" color="#4C1D95" height="21px">Description</Text>
                                </Box>
                                <Box justifyContent="center" alignItems="center" h="6vh" w="10vw" >
                                    <Text fontWeight="510" fontSize="18px" color="#6B7280" height="21px">Reviews</Text>
                                </Box>
                            </HStack>
                            <Box maxWidth="33vw" mt="4">Yellow bodysuit, has a round neck with envelope detail along the shoulder, short sleeves and snap button closures along the crotch. Yellow bodysuit, has a round neck with envelope detail along the shoulder, short sleeves and snap button closures along the crotch.Yellow bodysuit, has a round neck with envelo</Box>
                            <p></p>
                        </Box>
                    </Flex>
                </VStack>
            </ScrollView>
        </Box >

*/