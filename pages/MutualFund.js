import React, { useEffect, useState } from "react";
import { Box, Heading, Progress, Button, Text } from "native-base";
import { ArrowBackIcon } from 'native-base';
import Portfolio from './api/portfolio'
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import axios from "axios";

const MutualFund = () => {

    const [details , setDetails] = useState([]);
    useEffect(() => {
        var config = {
            method: 'get',
            url: 'http://localhost:3000/api/portfolio',
            headers: { }
          };
          
          axios(config)
          .then(function (response) {
            const data = response.data;
            setDetails(data["Details"])
          })
          .catch(function (error) {
            console.log(error);
          });
      }, []);

    return (
        <>
            <Navbar/>
            <Box flexDirection={"row"}>
                
                <Box bg="#F5F3FF"  width='100%'>
                <Box margin='30px 0px 0px 30px' >
                <Box flexDirection='row' marginLeft='117px'>
                    <ArrowBackIcon marginTop='10px' />
                    <Heading size='md' marginBottom="10px" marginLeft='12px'>Mutual Fund Portfolio</Heading>
                </Box>
                <Box bg='white' width='1150px' paddingTop='50px' alignContent='center' alignItems='center' margin='auto'>
                    <Box flexDirection='row'>
                        <Box borderWidth={2} borderColor="#A084CF" width='395px' borderRadius='10px' paddingTop='10px'>
                            <Heading size='md' color='#A084CF' fontWeight="bold" textAlign='center' paddingBottom='10px'>$15467.56</Heading>
                            <Heading size='sm' color='#A084CF' fontWeight="bold" textAlign='center' paddingBottom='20px'>Total Invested</Heading>
                        </Box>
                        <Box borderWidth={2} borderColor="#76BA99" width='395px' marginLeft='30px' borderRadius='10px' paddingTop='10px'>
                            <Heading size='md' color='#76BA99' fontWeight="bold" textAlign='center' paddingBottom='10px'>$15467.56</Heading>
                            <Heading size='sm' color='#76BA99' fontWeight="bold" textAlign='center' paddingBottom='20px'>14% Return</Heading>
                        </Box>
                    </Box>
                    <Box borderWidth={1} borderColor="#EEEEEE"  width='70%' marginTop='35px' marginBottom='30px' borderRadius='6px'>
                        <Box flexDirection='row' paddingLeft='4%' marginTop='20px' borderBottomWidth={1} borderColor="#EEEEEE">
                            <Box width='40%' alignItems='left' alignContent='left'>
                                <Heading size='sm' fontWeight="light" paddingBottom='20px'>Company Name</Heading>
                            </Box>
                            <Box width='21%'>
                                <Heading size='sm' fontWeight="light" textAlign='left' paddingBottom='20px'>Investment</Heading>
                            </Box>
                            <Box width='21%'>
                                <Heading size='sm' fontWeight="light" textAlign='left' paddingBottom='20px'>Current Value</Heading>
                            </Box>
                            <Box width='21%'>
                                <Heading size='sm' fontWeight="light" textAlign='left' paddingBottom='20px'>Return</Heading>
                            </Box>
                        </Box>
                        {details.map(r => {
                            return (
                                <Box flexDirection='row' paddingLeft='4%' marginTop='20px' >
                            <Box width='40%' alignItems='left' alignContent='left'>
                                <Heading size='sm' fontWeight="light" paddingBottom='20px'>{r.companyName}</Heading>
                            </Box>
                            <Box width='21%'>
                                <Heading size='sm' fontWeight="light" textAlign='left' paddingBottom='20px'>{r.investment}</Heading>
                            </Box>
                            <Box width='21%'>
                                <Heading size='sm' fontWeight="light" textAlign='left' paddingBottom='20px'>{r.currentValue}</Heading>
                            </Box>
                            <Box width='21%'>
                                <Heading size='sm' fontWeight="light" textAlign='left' paddingBottom='20px'>{r.returns}</Heading>
                            </Box>
                        </Box>
                            )
                        })}
                    </Box>
                </Box>

            </Box>
                </Box>
            </Box>
            
        </>
    )
}

export default MutualFund