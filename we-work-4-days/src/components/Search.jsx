
import {Box,Input,Stack,HStack,Heading,Text,Container,Button} from "@chakra-ui/react"
import {FaFilter} from "react-icons/fa"
import { Card } from "./Card"
import {FcGlobe} from "react-icons/fc"
import {FiTrendingUp} from "react-icons/fi"
import {HiOutlineCode} from "react-icons/hi"
export const Search=()=>{
   


    return <Container marginTop="10rem">
           
           <Stack spacing="2rem">
                <Heading  as='h1' size='2xl'noOfLines={2} >Find The Right Four-Day Week Job</Heading> 
               
                <HStack spacing="1rem">
                    <Input  placeholder="Type job title or keyword"/>
                    <Button variant="solid"><FaFilter/></Button>
                </HStack>
           </Stack>
           <HStack spacing="auto" marginTop={5}>
            <Button leftIcon={<FcGlobe/>}  width="8rem" colorScheme="purple"  variant="solid">Remote</Button>
            <Button leftIcon={<HiOutlineCode/>} border="1px solid purple"width="8rem"  colorScheme="purple"  variant="solid">Tech</Button>
            <Button leftIcon={<FiTrendingUp color="blue"/>} border="1px solid purple"  width="8rem" colorScheme="purple"  variant="solid">Marketing</Button>
           </HStack>
           
    </Container>
}