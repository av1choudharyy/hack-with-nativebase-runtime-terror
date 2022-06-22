import React from "react";
import { Box, Heading, Progress, Button, Text } from "native-base";
import PasswordIcon from '@mui/icons-material/Password';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import TranslateIcon from '@mui/icons-material/Translate';
import LinkIcon from '@mui/icons-material/Link';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import { ArrowBackIcon } from 'native-base';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";

const Setting = () => {
    return (
        <>
            <Navbar/>
            <Box flexDirection="row">
                <Box>
                    <SideBar/>
                </Box>
                <Box bg="#F5F3FF">
                <Box margin='30px 0px 0px 30px'>
                <Box flexDirection='row'>
                    <ArrowBackIcon marginTop='10px' />
                    <Heading size='md' marginBottom="10px" marginLeft='12px'>settings</Heading>
                </Box>
                <Box bg='white' width='1150px' paddingLeft='10px' paddingTop='10px'>
                    <Box flexDirection='row'>
                        <PasswordIcon />
                        <Heading size='sm' fontWeight="light" paddingLeft='10px' paddingBottom='20px'>Change Password</Heading>
                    </Box>
                    <Box flexDirection='row'>
                        <AdminPanelSettingsIcon />
                        <Heading size='sm' fontWeight="light" paddingLeft='10px' paddingBottom='20px'>General</Heading>
                    </Box>
                    <Box flexDirection='row'>
                        <ManageAccountsIcon />
                        <Heading size='sm' fontWeight="light" paddingLeft='10px' paddingBottom='20px'>Manage Account</Heading>
                    </Box>
                    <Box flexDirection='row'>
                        <TranslateIcon />
                        <Heading size='sm' fontWeight="light" paddingLeft='10px' paddingBottom='20px'>Langauge</Heading>
                        <Heading size='sm' fontWeight='hairline' paddingBottom='20px' paddingLeft='970px' >English</Heading>
                    </Box>
                    <Box flexDirection='row'>
                        <LinkIcon />
                        <Heading size='sm' fontWeight="light" paddingLeft='10px' paddingBottom='20px'>Linked Accounts</Heading>
                    </Box>
                    <Box flexDirection='row'>
                        <PersonOffIcon />
                        <Heading size='sm' fontWeight="light" paddingLeft='10px' paddingBottom='20px'>Disable Accounts</Heading>
                    </Box>
                </Box>
                <Box bg='white' width='1150px' marginTop='5%' paddingBottom='15px' flexDirection='row'>
                    <Box width='85%'>
                        <Box flexDirection='row' marginLeft='13px'>
                            <CloudQueueIcon/>
                            <Heading size='sm' fontWeight="light" paddingLeft='15px' paddingBottom='15px' paddingTop='5px'>Storage</Heading>
                        </Box>
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
                </Box>
            </Box>
            
        </>
    )
}

export default Setting
