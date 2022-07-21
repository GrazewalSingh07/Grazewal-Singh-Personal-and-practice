import React from 'react'
import {useNavigate} from "react-router-dom"
import {Box,HStack,Image,Text,Slider,SliderTrack,SliderFilledTrack,SliderThumb} from "@chakra-ui/react"
export const BrowserFundingCard = ({mainImg,title,goal,daysLeft,supporters,raisedBy,raised}) => {
   let temp=raised.split(",").join("")
   temp=temp.split(" ")
   let tempraised=+temp[1]
  let  tempgoal=goal.split(",").join("")
    tempgoal=tempgoal.split(" ")
    tempgoal=+goal[1]
    let paramtitle=title.split(" ").join("")
   const navigate=useNavigate()
  return (
    <Box boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" _hover={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}} borderRadius={10} cursor="pointer"  onClick={()=>navigate(`/crowdfunding/fundraisers/${paramtitle}`)}>
        <Image  borderTopRadius={10}src={mainImg}/>
        <Box height="auto">
        <Text padding={5} noOfLines={1} overflow="hidden" fontWeight={700}>{title}</Text>
        <HStack spacing={10} padding={5}>
            <Image marginLeft={2} width={35} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScXyoZXpAWph9Vnu9_ZpWgNmn20W4hlBOn-5dLmFQuww8zSfnhRRNQW7B0RRuApO_PFwg&usqp=CAU"/> <Text>{raisedBy}</Text>
        </HStack>
        <Text fontSize={18} paddingLeft={5}><b > {goal}</b> raised</Text>
        <Box margin="auto" textAlign="center">
             <Slider  width="80%" defaultValue={tempraised} min={tempraised} max={tempgoal} >
                <SliderTrack bg='#30C9C8.100'>
                <Box position='relative' right={10} />
                <SliderFilledTrack bg='#30C9C8' />
            </SliderTrack>
            
      </Slider>
        </Box>
       

        <Text padding={5}>Last Donation an hour ago</Text>
                <HStack spacing={10} padding={5}>
                    <Text> <b> {daysLeft}</b>days left</Text>
                    <Text> <b>{supporters} </b> suppports</Text>
                </HStack>
        
        </Box>
    </Box>
  )
}
