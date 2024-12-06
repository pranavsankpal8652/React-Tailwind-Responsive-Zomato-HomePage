import React from 'react'
import { Col } from 'react-bootstrap'

export default function Collection_gallary({collection}) {
  return (
      <Col lg={3} xs={12} className='position-relative'>
            <img src={collection.img} className='w-100'></img>
            <div className='position-absolute start-0 bottom-0 px-4 text-white'>
                <h5>{collection.title}</h5>
                <p>{collection.places}Places</p>
            </div>
      </Col>
  )
}
