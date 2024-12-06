import React from 'react'
import { Col, Container,Row } from 'react-bootstrap'
import Top_gallary_section from './Top_gallary_section'
import imge from '../assets/images/e5b8785c257af2a7f354f1addaf37e4e1647364814.webp'
export default function Genaral_Section() {
  const general_section=[
    {
      img:imge,
      title:'Order Online',
      desc:'Stay Home and order to doorstep'
    },
    {
      img:imge,
      title:'Dining',
      desc:"View the City's favourite dining  venues"
    },
    {
      img:imge,
      title:'Live Events',
      desc:"Discover India's best events"
    }
  ]
  return (
      <Container fluid className='p-0 my-4'>
        <Container className='p-4'>
            <Row className='gap-5 justify-content-center ' >
              {
               
                general_section.map((content,index)=>{
                  return(
                    <Top_gallary_section content={content} key={index}/>
                  )
                })
  
              }
  
            </Row>
        </Container>
      </Container>
  )
}
