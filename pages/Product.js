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
        <div style={{ height: "100vh", alignSelf: "center", width: "80%", backgroundColor: "#F5F3FF", marginTop: "10vh" }}>
            <Text fontFamily='SF pro' fontSize="20" mt="50px" ml="30"><AiOutlineArrowLeft />  Body Suit</Text>
            <BodyContent />
        </div>
        </>
        
    )
}

export default MainBox
