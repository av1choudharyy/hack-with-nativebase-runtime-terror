import React from "react";
import { Box, Heading, Progress , Button,Text} from "native-base";

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
                <Box bg='white' width='1150px' marginTop='5%' paddingBottom='15px' flexDirection='row'>
                    <Box width='85%'>
                        <Heading size='sm' fontWeight="light" paddingLeft='15px' paddingBottom='15px' paddingTop='5px'>Storage</Heading>
                        <Progress value={45} mx="4" />
                        <Heading size='xs' fontWeight='thin' paddingLeft='15px' paddingBottom='5px' paddingTop='10px'>4 GB of 15 Gb used</Heading>
                    </Box>
                    <Box width='15%' paddingTop='2.3%'>
                        <Button variant="outline" colorScheme="success" width='80%'>
                            <Text>Buy Storage</Text>
                        </Button>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Setting
