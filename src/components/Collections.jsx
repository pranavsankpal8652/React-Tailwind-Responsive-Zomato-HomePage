import React from 'react'
import { Col, Container,Row } from 'react-bootstrap'
import image from '../assets/images/2b9361aa328a43b08986f77bbec280bd_1709810606.webp'
import Collection_gallary from './Collection_gallary'
const collections=[
    {
        img:image,
        title:'Top Trending Places',
        places:25
    },
    {
        img:image,
        title:'Top Trending Places',
        places:25
    },
    {
        img:image,
        title:'Top Trending Places',
        places:25
    },
    {
        img:image,
        title:'Top Trending Places',
        places:25
    }
]
export default function Collections() {
  return (
    <Container fluid className='p-0'>
        <Container className='p-5'>
            <Row className='pt-2'>
                <Col lg={12}>
                  <h2>Collections</h2>
                </Col>
            </Row>
            <Row className='p-1'>
                <Col xl={9} xs={12}>
                    <p>Exlore curated lists of top restaurants, cafes, pubs, and bars in Pune, based on trends</p>
                </Col>
                <Col xl={3} xs={12}  className='text-center'>
                  <a href='#' className='text-danger'>All collections in Kolhapur&rarr;</a>
                </Col>
            </Row>
             <Row className='collec_row'>
                {
                    collections.map((collection,index)=>{
                        return(
                            <Collection_gallary collection={collection} key={index}/>
                        )
                    })
                }
            </Row>   
        </Container>
    </Container>
  )
}
