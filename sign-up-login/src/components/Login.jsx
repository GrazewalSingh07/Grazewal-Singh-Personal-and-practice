import { Box, Button, Container, Heading, HStack, Image, Input, Stack, StackDivider, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import img1 from "../Public/img1.png"
import appStore from "../Public/appStore.png"
import playStore from  "../Public/playStore.png"
import { useState } from 'react'
import axios from 'axios'
export const Login = () => {
    const [number,setNumber] =useState(91)
   const [data,setData]=useState({})
   const [LoginWithEmail,setLoginInWithEmail]= useState(false)
   const handleChange=(e)=>{
    const {id,value} = e.target
    setData({...data,[id]:value})
   }
   const postData=()=>{
        axios.post("https://devapi.wtfup.me/user/login",data).then((res)=>{
            console.log(res.data)
        }).catch((err)=>{
            console.log(err)
        })
   }
  
  return (
    <Box top={0} bottom={0} left={0} right={0} position="fixed" margin="auto" display="flex" height="100%" width="100%"  
    background= "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(121,29,9,1) 63%, rgba(255,0,0,1) 100%)">
    {LoginWithEmail?<Container m="auto" borderRadius="2rem" background="whiteAlpha.100"  height="90%"  maxW="container.sm">
        <Stack   textAlign="center"spacing="8rem" p="5rem" width="100%">
           
            <Stack spacing={6}>
                 <Heading  p="2rem"  color="white" >Welcome Back</Heading>
                <Input color="white" height="4rem"  _hover={{background:"whiteAlpha.200"}}id="username" onChange={handleChange} p="1rem" background="whiteAlpha.200" variant="filled"  borderRadius="none" _placeholder={{color:"white"}} placeholder="Enter email"/>
                <Input color="white" height="4rem"  _hover={{background:"whiteAlpha.200"}}id="password" onChange={handleChange}p="1rem" background="whiteAlpha.200" variant="filled"  borderRadius="none" _placeholder={{color:"white"}} placeholder="Enter password"/>
            </Stack>
            <Stack spacing={3}>
                <Button height="4rem"  _hover={{background:"maroon"}} borderRadius="none" color="white" onClick={postData} background="maroon">Login</Button>
                <Button   height="4rem"  _hover={{color:"white"}} color="white" borderRadius="none" border="1px solid maroon" variant="outline" onClick={()=>{
                    setLoginInWithEmail(false)
                }}>Login with OTP</Button>
                <Text   color="white">Don't have an account? <Link to="/" style={{color:"red"}}>Signup</Link></Text>
                </Stack>   
        </Stack>
     </Container>:
     <Container m="auto" borderRadius="2rem" background="whiteAlpha.100"  height="90%"  maxW="container.sm">
     <Stack   textAlign="center"spacing="8rem" p="5rem" width="100%">
        
         <Stack spacing={6}>
              <Heading  p="2rem"  color="white"   >Welcome Back</Heading>
              <Input  height="4rem" _hover={{background:"whiteAlpha.200"}} type="number" onChange={(e)=>{
            setNumber(e.target.value)
    }} p="1rem" background="whiteAlpha.200" variant="filled"  borderRadius="none" _placeholder={{color:"white"}} placeholder="Enter mobile number"/>
         </Stack>
         <Stack spacing={3}>
        <Button  height="4rem" _hover={{background:"maroon"}} borderRadius="none" color="white" background="maroon">Send OTP</Button>
         <Button   height="4rem" _hover={{color:"white"}}color="white" borderRadius="none" border="1px solid maroon" variant="outline" onClick={()=>{
            setLoginInWithEmail(true)
        }}>Login with Email</Button>
        <Text   color="white">Don't have an account? <Link to="/" style={{color:"red"}}>Signup</Link></Text>
      </Stack>  
     </Stack>
  </Container>
     
    }
    <Container  height="100%" alignItems="center"  backgroundPosition="center" backgroundSize="contain" margin="auto" backgroundRepeat="no-repeat" backgroundImage={img1} display={["none","none","none","block"]} p="2rem" maxW="container.md">
        <Box margin="auto" width="50%"  display={["block","flex"]}  height="100%" alignItems="center" >
            <Image width="10rem" margin="auto"   src={appStore} />
            <Image  width="10rem" margin="auto"  src={playStore} />
        </Box>
    </Container>
    </Box> )
}


// <Container  m="auto" borderRadius="2rem" background="whiteAlpha.100"  height="90%"  maxW="container.sm">
// <Stack textAlign="center"spacing={10} p="5rem" width="100%">
//     <Heading   color="white"   p="1rem">Welcome Back</Heading>
//    

//       
// </Stack>
// </Container>