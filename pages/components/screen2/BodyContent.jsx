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
    Image
} from "native-base";
// import Image from 'next/image'
import { FiHeart } from 'react-icons/fi'

import img from '../../../public/images/screen2.png';

const BodyContent = () => {
    let buttonTextAttr = {
        _dark: { color: "#F9FAFB" },
        _light: { color: "#1F2937" },
        fontSize: "md",
        fontWeight: "420",
        fontSize: "20"
    }
    return (
        <Box _light={{ bgColor: "#FFFFFF" }}
            _dark={{ bgColor: "#1F2937" }} mx="5" h='80vh' mb='5'>
            <HStack p="6">
                <Box borderWidth="5" borderRadius="5" w="40vw" h="38vw"
                    _light={{ borderColor: "#F5F3FF" }}
                    _dark={{ borderColor: "#374151" }}
                >
                    <Image source={{
                        uri: "https://images.unsplash.com/photo-1567822781105-a80d1b601697?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                    }} alt="Alternate Text" h="100%" w="100%" />
                </Box>
                <Box ml="6">
                    <Text fontWeight="510" fontSize="18px">Body Suit</Text>
                    <Text fontWeight="400" fontSize="16px" color="#6B7280">Mother care</Text>
                    <Text fontWeight="510" fontSize="20px" _light={{color:"#1F2937"}} _dark={{ color:"#F9FAFB"}}>₹500</Text>
                    <HStack space="12vw" mt="10px">
                        <Text fontWeight="510" fontSize="18px" _light={{ color: "#1F2937" }} _dark={{ color: "#F9FAFB" }} height="21px">Select Size <Text color='#6B7280'>(Age Group)</Text></Text>
                        <Text fontWeight="510" fontSize="18px" _light={{ color: "#4C1D95" }} _dark={{ color: "#8B5CF6" }} height="21px">Size Chart</Text>
                    </HStack>
                    <HStack space={5} mt="5">
                        {["new born", "Tiny Baby", "0-3 M"].map(item => <Button height="4vw" _light={{ bgColor: "#F5F3FF" }} _dark={{ bgColor: "#374151" }} alignItems="center" _text={buttonTextAttr}>{item}</Button>)}
                    </HStack>
                    <HStack space={10} mt="4">
                        <Box
                            _light={{ bg: "#F5F3FF" }}
                            _dark={{ bg: "#374151" }}
                            h="4vw" w="4vw" alignItems="center" justifyContent="center"><FiHeart size="30" _light={{ color: '#4C1D95' }} _dark={{ bgColor: '#6D28D9' }} /></Box>
                        <Button width="25vw" size="lg" borderWidth="3px" borderRadius="5"
                            _light={{ bgColor: "#4C1D95", borderColor: "#4C1D95" }}
                            _dark={{ bgColor: "#6D28D9", borderColor: "#6D28D9" }}
                            _text={{
                                color: "#F9FAFB",
                                fontWeight: "520",
                                fontSize: "22"
                            }}>CONTINUE</Button>
                    </HStack>
                    <HStack space={10} mt="6">
                        <Box justifyContent="center" alignItems="center" h="6vh" w="10vw">
                            <Text fontWeight="510" fontSize="18px" height="21px"
                                _light={{ color: "#4C1D95" }}
                                _dark={{ color: "#8B5CF6" }} >Description</Text>
                            <Divider mt="2" borderTopWidth="6" borderTopRadius="4"
                                _light={{ borderColor: "#4C1D95" }}
                                _dark={{ borderColor: "#8B5CF6" }}
                            />
                        </Box>
                        <Box justifyContent="center" alignItems="center" h="6vh" w="10vw" >
                            <Text fontWeight="510" fontSize="18px" height="21px"
                                _light={{ color: "#6B7280" }}
                                _dark={{ color: "#9CA3AF" }} >Reviews</Text>
                            <Divider mt="2" borderTopWidth="6" borderTopRadius="4"
                                _light={{ borderColor: "#FFFFFF" }}
                                _dark={{ borderColor: "#1F2937" }} />
                        </Box>
                    </HStack>
                    <Box maxWidth="33vw" mt="4" _text={{_light:{color:"#1F2937"}, _dark:{color:"#F9FAFB"}}}>
                    Yellow bodysuit, has a round neck with envelope detail along the shoulder, short sleeves and snap button closures along the crotch. Yellow bodysuit, has a round neck with envelope detail along the shoulder, short sleeves and snap button closures along the crotch.Yellow bodysuit, has a round neck with envelo
                </Box>

        </Box>
            </HStack >

        </Box >

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