import React from 'react'
import { Box, Text, Center, Container, Heading, VStack, ArrowBackIcon } from "native-base";
import BodyContent from './BodyContent';
import { AiOutlineArrowLeft } from "react-icons/ai";
import Navbar from '../Navbar';

const MainBox = () => {
    return (
        <>
        <Navbar/>
        <VStack _light={{ bg: "#F5F3FF" }}
                _dark={{ bg: "#374151" }}>
            <Text fontFamily='SF pro' fontSize="20" mt="4vh" ml="30"><ArrowBackIcon _light={{ color: "#1F2937" }} _dark={{ color: "#F9FAFB" }} />  Body Suit</Text>
            <BodyContent />
        </VStack>
        </>
    )
}

export default MainBox


