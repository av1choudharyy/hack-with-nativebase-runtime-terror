import React from "react";
import { Avatar, Box, Center, FlatList, Text, Flex, HStack, ShareIcon } from "native-base";
export default function Drawer(){
    const data=[
        {
            name:"Contact",
        },
        {
            name:"Group"
        },
        {
            name:"Notifications"
        },
        {
            name:"Order"
        },
        {
            name:"Settings"
        },
        {
            name:"Privacy Policies"
        },
        {
            name:"Help and Support"
        },
        {
            name:"Refer and Earn"
        }
    ]
    return(
        <Box w="15vw" h='95%'>
            <Box shadow={2} h='30%'>
                <Center flex={1} >
                    <Avatar size ="xl" m={1} source={{
                        uri:"https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        }}>
                        AJ
                    </Avatar>
                    <Text bold fontSize="md" fontFamily="heading">
                        Jane Doe
                    </Text>
                    <Text fontFamily='body' color='gray.500' fontSize='xs'>
                        janedoe2@mydomain.com
                    </Text>
                </Center>
             </Box>
            <Box shadow={2} h='60%'>
                <FlatList alignContent='center' mt='4' data={data} renderItem={({item}) => <Box borderRadius={4} pl="4" pr="5" py="3">
                    <HStack space={4} ml={2} alignItems='center' flex={1}>
                        <ShareIcon/>
                        <Text _dark={{
                            color: "warmGray.50"
                        }} color="coolGray.800" bold>
                            {item.name}
                        </Text>
                    </HStack>
                </Box>} keyExtractor={item => item.id} />
            </Box>
            <Box shadow={2} h='10%' >
                <HStack alignItems='center' space={4} ml={6} flex={1}>
                    <ShareIcon/>
                    <Text fontWeight='500' >Logout</Text>
                </HStack>
            </Box>
        </Box>
    )
}