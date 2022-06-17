import React from "react";
import { Box, Heading } from "native-base";

const Setting = () => {
    return (
        <>
            <Box margin='30px 0px 0px 30px'>
                <Heading size='md' marginBottom="10px">settings</Heading>
                <Box bg='white' width='1150px'>
                    <Heading size='sm' fontWeight="light" paddingLeft='10px' paddingTop="20px" paddingBottom='17px'>Change Password</Heading>
                    <Heading size='sm' fontWeight="light" paddingLeft='10px' paddingBottom='20px'>General</Heading>
                    <Heading size='sm' fontWeight="light" paddingLeft='10px' paddingBottom='20px'>Management Accounts</Heading>
                    <Box flexDirection='row'>
                        <Heading size='sm' fontWeight="light" paddingLeft='10px' paddingBottom='20px'>Langauge</Heading>
                        <Heading size='sm' fontWeight='hairline' paddingBottom='20px' paddingLeft='990px' >English</Heading>
                    </Box>
                    <Heading size='sm' fontWeight="light" paddingLeft='10px' paddingBottom='20px'>Linked Accounts</Heading>
                    <Heading size='sm' fontWeight="light" paddingLeft='10px' paddingBottom='20px'>Disable Accounts</Heading>
                </Box>
            </Box>
        </>
    )
}

export default Setting
