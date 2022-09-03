import { Box, Button, Container, Heading, Input, Stack,Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import banner from "../Public/banner.png"
export const SignUp = () => {
  return (
    <Box top={0} bottom={0} left={0} right={0} position="fixed" backgroundPosition="center"  height="100%" backgroundSize={["contain","contain","cover"]}  backgroundRepeat="no-repeat" margin="auto" width="100%" backgroundImage={banner}>
          
             <Container  height="80%" borderRadius="2rem"    p="10rem"  background="whiteAlpha.200"  mt="5rem" maxW="container.xl">
             <Heading pl="2rem" pb="1rem" color="white" fontWeight={600}>Signup</Heading>
                <Box   width="100%" justifyContent="space-around" display="flex" color="white">
                    
                    <Stack spacing={6} width={["100%","100%","50%"]} p="2rem"  >
                      
                        <Input  _hover={{background:"whiteAlpha.200"}} width={["100%","80%"]} background="whiteAlpha.200" variant="filled"  borderRadius="none" _placeholder={{color:"white"}} placeholder="Enter Full name"/>
                        <Input  _hover={{background:"whiteAlpha.200"}} width={["100%","80%"]} background="whiteAlpha.200"  variant="filled"  borderRadius="none" _placeholder={{color:"white"}}placeholder="Mobile number"/>
                    </Stack>
                    <Stack spacing={6} width={["100%","100%","50%"]} p="2rem" >
                        <Input  _hover={{background:"whiteAlpha.200"}} width={["100%","80%"]}background="whiteAlpha.200"  variant="filled"  borderRadius="none" _placeholder={{color:"white"}} placeholder='Email id'/>
                        <Input  _hover={{background:"whiteAlpha.200"}} width={["100%","80%"]} background="whiteAlpha.200" variant="filled"  borderRadius="none"  _placeholder={{color:"white"}} placeholder="Referal Code(Optional)"/> 
                        <Button  _hover={{background:"maroon"}}borderRadius="none" width={["100%","80%"]} backgroundColor="maroon">Send OTP</Button>
                    </Stack>
                </Box>
                <Text  mt="10%"  textAlign="center" fontWeight={600} color="white">Already have an account? <Link style={{color:"red"}}  to="/login">Login</Link></Text>
            </Container>
          
    </Box>
  )
}
