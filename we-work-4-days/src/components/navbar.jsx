import { Image ,Container,Box,Button} from "@chakra-ui/react"
import {MdCall} from "react-icons/md"
import { HStack } from "@chakra-ui/react"
import {IoRocketSharp} from "react-icons/io5"
export const Navbar=()=>{
    return  <Container maxW="container.2xl" borderBottom=".5px solid Purple" >
        <HStack spacing="auto" >
               <Box>
                 <Image margin="10px" width="50px" src ="https://www.wework4days.com/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fassets%2Fimages%2Flogo.4cc40a9ad62028ac0ab9af556de0b081.svg&w=32&q=75"/>
               </Box>
                <HStack>
                    <Button variant="ghost" >Sign in</Button>
                    <Button colorScheme="purple" variant="outline">Sign Up</Button>
                    <Button rightIcon={<IoRocketSharp color="white"/>} colorScheme="purple"  variant="solid">Post a job</Button>
                </HStack>
        </HStack>
    </Container>
    
}