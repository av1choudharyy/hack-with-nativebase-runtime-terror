import React from "react";
import { Box, Heading } from "native-base";

const Setting = () => {
    return(
        <>
            <Box bg='primary.50' paddingBottom='20px' paddingTop="10px" paddingLeft="30px" paddingRight="30px">
                <Heading size='md' marginBottom="10px">setting</Heading>
                <Box bg='white' paddingBottom='5px' paddingTop="5px" paddingLeft="10px" paddingRight="10px">
                    <Heading size='sm' fontWeight="light" paddingTop="20px" paddingBottom='17px'>Change Password</Heading>
                    <Heading size='sm' fontWeight="light" paddingBottom='17px'>General</Heading>
                    <Heading size='sm' fontWeight="light" paddingBottom='17px'>Management Accounts</Heading>
                    <Heading size='sm' fontWeight="light" paddingBottom='17px'>Langauge</Heading>
                    <Heading size='sm' fontWeight="light" paddingBottom='17px'>Linked Accounts</Heading>
                    <Heading size='sm' fontWeight="light" paddingBottom='17px'>Disable Accounts</Heading>
                </Box>
            </Box>
        </>
    )
}

export default Setting
