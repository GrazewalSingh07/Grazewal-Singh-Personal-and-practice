import {Box,Image,Text,HStack,Container,VStack, Stack} from "@chakra-ui/react"
import { useState } from "react"

export const Card=({company,title,img,salary})=>{
  const [hovering,sethovering]=useState(false)
  function hovereffectenter(){
    sethovering(true)
  }
  function hovereffectleave(){
    sethovering(false)
  }
    return<Container border="2px solid purple" borderRadius={10} cursor="pointer" padding={3} onMouseEnter={hovereffectenter} onMouseLeave={hovereffectleave} boxShadow={hovering?"rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px":null  } >
         <HStack spacing="auto">
            <HStack spacing={5}>
              <Box>
                <Image width="50px" src={img}/>
              </Box>
            <Box>
                <Text fontSize={14}>{company}</Text>
                
                <Text><b>{title}</b></Text>
                <Text fontSize={14}>{salary}</Text>
            </Box>
        </HStack>
        <Stack>
           <Text fontSize={14}>FULL-TIME</Text>
        </Stack>
         </HStack>
    </Container>
}