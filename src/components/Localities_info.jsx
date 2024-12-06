import React from 'react'
import { Col,Row } from 'react-bootstrap'
import { IoIosArrowForward } from "react-icons/io";

export default function Localities_info({locality}) {
  return (
    <Col lg={3} xs={12} className='border border-dark-subtle rounded-3 py-2 flex-grow-1 position-relative' role='button'>
        <Row>
            <Col lg={12}>
                <h5>{locality.Name}</h5>
            </Col>
            <Col lg={12}>
               <p>{locality.places} Places</p>
            </Col>
            
        </Row>
        <IoIosArrowForward className='position-absolute arrow' />
    </Col>
  )
}
