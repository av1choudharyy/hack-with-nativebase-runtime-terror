import React from 'react'
import { Box, Text, Center, Container, Heading } from "native-base";
import BodyContent from './components/screen2/BodyContent';
import ArrowBackIcon from "react-native-svg";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Navbar from './components/Navbar';

const MainBox = () => {
    return (
        <>
        <Navbar/>
        <Box style={{ height: "100vh", alignSelf: "center", marginTop: "10vh" }} _light={{ bg: "#F5F3FF" }}
                _dark={{ bg: "#374151" }}>
            <Text fontFamily='SF pro' fontSize="20" mt="50px" ml="30"><AiOutlineArrowLeft />  Body Suit</Text>
            <BodyContent />
        </Box>
        </>
        
    )
}

export default MainBox
