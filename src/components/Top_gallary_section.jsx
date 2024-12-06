import React from 'react'
import { Col, Container,Row } from 'react-bootstrap'

export default function Top_gallary_section({content}) {
  return (
    <>
     <Col lg={3} className='border border-secondary p-0 rounded-3'>
                    <img src={content.img} className='w-100 rounded-3' height={160}></img>   
                    <h3 className='p-2'>{content.title}</h3> 
                    <p className='px-2'>{content.desc}</p>
                </Col>
    </>

  )
}
