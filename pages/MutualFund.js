import React, { useEffect, useState } from "react";
import { Box, Heading, Progress, Button, Text } from "native-base";
import { ArrowBackIcon } from "native-base";
import Portfolio from "./api/portfolio";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import axios from "axios";

const MutualFund = () => {
  const [details, setDetails] = useState([]);
  useEffect(() => {
    var config = {
      method: "get",
      url: "http://localhost:3000/api/portfolio",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        const data = response.data;
        setDetails(data["Details"]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Box flexDirection={"row"}>
        <Box _light={{ bg: "#F5F3FF" }} _dark={{ bg: "#374151" }} width="100%">
          <Box margin="30px 0px 0px 30px">
            <Box flexDirection="row" marginLeft="117px">
              <ArrowBackIcon marginTop="10px" />
              <Heading size="md" marginBottom="10px" marginLeft="12px">
                Mutual Fund Portfolio
              </Heading>
            </Box>
            <Box
              _light={{ bg: "white" }}
              _dark={{ bg: "#1F2937" }}
              width="1150px"
              paddingTop="50px"
              alignContent="center"
              alignItems="center"
              margin="auto"
            >
              <Box flexDirection="row">
                <Box
                  borderWidth={2}
                  _light={{ borderColor: "#5B21B6" }}
                  _dark={{ borderColor: "#8B5CF6" }}
                  width="395px"
                  borderRadius="10px"
                  paddingTop="10px"
                >
                  <Heading
                    size="md"
                    _light={{ color: "#5B21B6" }}
                    _dark={{ color: "#8B5CF6" }}
                    fontWeight="bold"
                    textAlign="center"
                    paddingBottom="10px"
                  >
                    $15467.56
                  </Heading>
                  <Heading
                    size="sm"
                    _light={{ color: "#5B21B6" }}
                    _dark={{ color: "#8B5CF6" }}
                    fontWeight="bold"
                    textAlign="center"
                    paddingBottom="20px"
                  >
                    Total Invested
                  </Heading>
                </Box>
                <Box
                  borderWidth={2}
                  _light={{ borderColor: "#065F46" }}
                  _dark={{ borderColor: "#10B981" }}
                  width="395px"
                  marginLeft="30px"
                  borderRadius="10px"
                  paddingTop="10px"
                >
                  <Heading
                    size="md"
                    _light={{ color: "#065F46" }}
                    _dark={{ color: "#10B981" }}
                    fontWeight="bold"
                    textAlign="center"
                    paddingBottom="10px"
                  >
                    $15467.56
                  </Heading>
                  <Heading
                    size="sm"
                    _light={{ color: "#065F46" }}
                    _dark={{ color: "#10B981" }}
                    fontWeight="bold"
                    textAlign="center"
                    paddingBottom="20px"
                  >
                    14% Return
                  </Heading>
                </Box>
              </Box>
              <Box
                borderWidth={1}
                _light={{ borderColor: "#E5E7EB" }}
                _dark={{ borderColor: "#374151" }}
                width="70%"
                marginTop="35px"
                marginBottom="30px"
                borderRadius="6px"
              >
                <Box flexDirection="row" paddingLeft="4%" marginTop="20px">
                  <Box width="40%" alignItems="left" alignContent="left">
                    <Heading size="sm" fontWeight="light" paddingBottom="20px">
                      Company Name
                    </Heading>
                  </Box>
                  <Box width="21%">
                    <Heading
                      size="sm"
                      fontWeight="light"
                      textAlign="left"
                      paddingBottom="20px"
                    >
                      Investment
                    </Heading>
                  </Box>
                  <Box width="21%">
                    <Heading
                      size="sm"
                      fontWeight="light"
                      textAlign="left"
                      paddingBottom="20px"
                    >
                      Current Value
                    </Heading>
                  </Box>
                  <Box width="21%">
                    <Heading
                      size="sm"
                      fontWeight="light"
                      textAlign="left"
                      paddingBottom="20px"
                    >
                      Return
                    </Heading>
                  </Box>
                </Box>
                {details.map((r) => {
                  return (
                    <Box
                      flexDirection="row"
                      paddingLeft="4%"
                    //   marginTop="20px"
                      borderTopWidth={1}
                      _light={{ borderColor: "#E5E7EB" }}
                      _dark={{ borderColor: "#374151" }}
                    >
                      <Box width="40%" alignItems="left" alignContent="left" pb='20px'>
                        <Heading
                          size="sm"
                          fontWeight="light"
                          marginTop='12px'
                        //   paddingBottom="20px"
                        >
                          {r.companyName}
                        </Heading>
                      </Box>
                      <Box width="21%">
                        <Heading
                          size="sm"
                          fontWeight="light"
                          textAlign="left"
                          marginTop='12px'
                        //   paddingBottom="20px"
                        >
                          {r.investment}
                        </Heading>
                      </Box>
                      <Box width="21%">
                        <Heading
                          size="sm"
                          fontWeight="light"
                          textAlign="left"
                          marginTop='12px'
                        //   paddingBottom="20px"
                        >
                          {r.currentValue}
                        </Heading>
                      </Box>
                      <Box width="21%">
                        <Heading
                          size="sm"
                          fontWeight="light"
                          textAlign="left"
                          marginTop='12px'
                          _light={{ color: "#059669" }}
                      _dark={{ color: "#10B981" }}
                        //   paddingBottom="20px"
                        >
                          {r.returns}
                        </Heading>
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default MutualFund;
