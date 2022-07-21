import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Carousel } from 'antd';
import {Container,Box} from "@chakra-ui/react"
const contentStyle = {
  height: '320px',
  color: 'black',
 
  lineHeight: '160px',
  textAlign: 'center',
}

const cards = [
    {
      title: 'Design Projects 1',
      text:
        "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        'https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    },
    {
      title: 'Design Projects 2',
      text:
        "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        'https://images.unsplash.com/photo-1438183972690-6d4658e3290e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2274&q=80',
    },
    {
      title: 'Design Projects 3',
      text:
        "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        'https://images.unsplash.com/photo-1507237998874-b4d52d1dd655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    }, {
        title: 'Design Projects 2',
        text:
          "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
        image:
          'https://images.unsplash.com/photo-1438183972690-6d4658e3290e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2274&q=80',
      },
      {
        title: 'Design Projects 3',
        text:
          "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
        image:
          'https://images.unsplash.com/photo-1507237998874-b4d52d1dd655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
      }
  ];
 export const Corousel=()=>{
   
       
    return <Container maxW="container.xsm" ><Carousel autoplay width="50%">
        {cards.map((el)=>{
             return   <Box  backgroundImage={el.image} backgroundSize="cover" backgroundRepeat="no-repeat" >
                 <h3 style={contentStyle}>{el.text}</h3>
              </Box>
        })}
    
    
  </Carousel>
  </Container>
   
}