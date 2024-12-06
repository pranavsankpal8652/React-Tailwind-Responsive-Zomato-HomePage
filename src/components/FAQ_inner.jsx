import React from 'react'
import { Col } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';

export default function FAQ_inner({faq}) {
  return (
   <Col lg={10} className='my-3 mx-auto'>
        <Accordion>
          <Accordion.Item eventKey={faq.id}>
            <Accordion.Header className='fq-question'>{faq.question}</Accordion.Header>
            <Accordion.Body className='text-secondary'>
             {faq.answer}
            </Accordion.Body>
          </Accordion.Item>

        </Accordion>
   </Col>
        
  )
}
