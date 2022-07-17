import { Box, Container, Heading, Stack,VStack } from "@chakra-ui/react"
import { Card } from "./Card"

export const AllBoxes=()=>{
    const jobs=[
        {   img:"https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F1f61d027-d061-4780-9198-fb8c716d6e0a&w=1920&q=75",
            company:"Talewind",
            title:"Web Developer",
            salary:"$50k - $65k"
        },
        {   img:"https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F1f61d027-d061-4780-9198-fb8c716d6e0a&w=1920&q=75",
            company:"Talewind",
            title:"Lead Game Developer",
            salary:"$50k - $65k"
        },
        {   img:"https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2Fd74e52d1-6529-4ab1-98b2-a27b1b9947ed&w=1920&q=75",
            company:"Talewind",
            title:"Full Stack JavaScript Developer",
            salary:"$50k - $65k"
        },
        {   img:"https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2Fd4f13259-d651-4b8a-8115-48bdfabd24aa&w=1920&q=75",
            company:"The Wanderlust Group",
            title:"Director of marketing",
            salary:"$50k - $65k"
        },
        {   img:"https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F0ecc5576-0a1c-4787-880b-6e23c379550e&w=1920&q=75",
            company:"JumpSearch",
            title:"Account Executive",
            salary:"$50k - $65k"
        },
        {   img:"https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F0ecc5576-0a1c-4787-880b-6e23c379550e&w=1920&q=75",
            company:"Jumpsearch",
            title:"software engineer",
            salary:"$50k - $65k"
        },
        {   img:"https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F1f61d027-d061-4780-9198-fb8c716d6e0a&w=1920&q=75",
        company:"Talewind",
        title:"Web Developer",
        salary:"$50k - $65k"
    },
    {   img:"https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F1f61d027-d061-4780-9198-fb8c716d6e0a&w=1920&q=75",
        company:"Talewind",
        title:"Lead Game Developer",
        salary:"$50k - $65k"
    },
    {   img:"https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2Fd74e52d1-6529-4ab1-98b2-a27b1b9947ed&w=1920&q=75",
        company:"Talewind",
        title:"Full Stack JavaScript Developer",
        salary:"$50k - $65k"
    },
    {   img:"https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2Fd4f13259-d651-4b8a-8115-48bdfabd24aa&w=1920&q=75",
        company:"The Wanderlust Group",
        title:"Director of marketing",
        salary:"$50k - $65k"
    },
    {   img:"https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F0ecc5576-0a1c-4787-880b-6e23c379550e&w=1920&q=75",
        company:"JumpSearch",
        title:"Account Executive",
        salary:"$50k - $65k"
    },
    {   img:"https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F0ecc5576-0a1c-4787-880b-6e23c379550e&w=1920&q=75",
        company:"Jumpsearch",
        title:"software engineer",
        salary:"$50k - $65k"
    }
    ]
    return <Container  marginTop={10} maxW="container.2xl"  backgroundColor="#EDF2F7" >
             <Box >
      
      <VStack spacing={5} marginTop={5}>
         <Heading marginLeft={-300} marginTop={5}>Recent Jobs</Heading>
          {jobs.map((el,index)=>{
              return <Card key={index} {...el}/>
          })}
     </VStack>
    </Box>
    </Container>
}