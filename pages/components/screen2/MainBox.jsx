import React from 'react'
import { Box, Text, Center, Container, Heading, VStack } from "native-base";
import BodyContent from './BodyContent';
import ArrowBackIcon from "react-native-svg";
import { AiOutlineArrowLeft } from "react-icons/ai";

const MainBox = () => {
    return (
        <VStack>
            <Text fontFamily='SF pro' fontSize="20" mt="6vh" ml="30"><AiOutlineArrowLeft />  Body Suit</Text>
            <BodyContent />
        </VStack>
    )
}

export default MainBox


