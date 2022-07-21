import React from 'react'
import { HStack ,Image,Text,VStack} from '@chakra-ui/react/'
export const SearchResultCard = ({title,mainImg,raisedBy}) => {
  return (
    <>
        <HStack margin={5}>
            <Image width={50} src={mainImg}/>
            <Text color="#30C9C8">{title}</Text>
        </HStack>
        <Text marginLeft={20}> by {raisedBy}</Text>
    </>
    
  )
}
 