import React from 'react'
import { Box, Text, Center, Container, Heading, VStack, ArrowBackIcon } from "native-base";
import BodyContent from './BodyContent';
import { AiOutlineArrowLeft } from "react-icons/ai";

const MainBox = () => {
    return (
        <VStack>
            <Text fontFamily='SF pro' fontSize="20" mt="4vh" ml="30"><ArrowBackIcon style={{ color: "black" }} />  Body Suit</Text>
            <BodyContent />
        </VStack>
    )
}

export default MainBox


