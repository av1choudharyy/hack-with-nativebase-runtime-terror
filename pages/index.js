import Link from "next/link";
import React from "react";
import {
  Box,
  Text,
  Button
} from "native-base";
export default function App() {
  return (
    <>
      <Box width='100%' height='100vh' >
        <Box flexDirection='row' width='100%'   margin={'50px 0px 0px 1000px'}>
          <Box width='30%' marginLeft='20px' backgroundColor='#5B21B6' color={"white"} textAlign={"center"} padding="2">
            <Link href="/Setting">
              Screen one
            </Link>
          </Box>
          <Box width='30%' marginLeft='20px' backgroundColor='#5B21B6' color={"white"} textAlign={"center"} padding="2">
            
              <Link href="/Product">Screen Two</Link>
            
          </Box>
          <Box width='30%' marginLeft='20px' backgroundColor='#5B21B6' color={"white"} textAlign={"center"} padding="2">
           
              <Link href="/track-order">Screen Three</Link>
           
          </Box>
        </Box>

        <Box flexDirection='row' width='100%' justifyContent="space-evenly" >
          <Box width='30%' marginLeft='20px' backgroundColor='#5B21B6' color={"white"} textAlign={"center"} padding="2">
           
              <Link href="/MutualFund">Screen Four</Link>
           
          </Box>
          <Box width='30%' marginLeft='20px' backgroundColor='#5B21B6' color={"white"} textAlign={"center"} padding="2">
          
              <Link href="/Place-Order">Screen Five</Link>
           
          </Box>
        </Box>
      </Box>
    </>
  );
}