import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'

export default function Footer_inner({footer_inner_col}) {
  return (
   
   <Col lg={2} sm={6}>
        <h5>{footer_inner_col.title}</h5>
        {
            footer_inner_col.subsections.map((subsection,index)=>{
                return(
                    <React.Fragment key={index}>
                        <p className='text-secondary'>{subsection}</p>
                    </React.Fragment>
                )
            })
        }
   </Col>
    

  )
}
