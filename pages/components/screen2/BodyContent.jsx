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
} from "native-base";
import Image from 'next/image'

import img from '../../../public/images/screen2.jpg';

const BodyContent = () => {
    return (
        <Box flex="1" safeAreaTop>
            <ScrollView>
                <VStack space={2.5} w="100%" px="3" mt="5">
                    <Flex direction="row" mb="2.5" mt="1.5" justifyContent="left">
                        <Box>
                            <Image src={img} alt="screen2.jpg" />
                        </Box>
                        <Box ml="10px" mt="20">
                            <Text fontWeight="510" fontSize="18px">Body Suit</Text>
                            <Text fontWeight="400" fontSize="16px" color="#6B7280">Mother care</Text>
                            <Text fontWeight="510" fontSize="20px" color="#1F2937">₹500</Text>
                            <Text mt="10px" fontWeight="510" fontSize="16px" color="#1F2937" height="21px">Select Size <span color='#6B7280'>(Age Group)</span></Text>
                            <Flex direction='row' mt="10" justifyContent="space-between">
                                <Button alignItems="center">new born</Button>
                                <Button alignItems="center">Tiny Baby</Button>
                                <Button alignItems="center">0-3 M</Button>
                            </Flex>
                        </Box>
                    </Flex>
                </VStack>
            </ScrollView>
        </Box>
    )
}

export default BodyContent

