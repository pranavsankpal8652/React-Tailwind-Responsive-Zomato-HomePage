import React from 'react'
import { Col, Container, Row ,Navbar} from 'react-bootstrap'
import '../assets/css/Banner.css'
import Header from './Header';
import Banner_middle from './Banner_middle';
export default function Banner() {
  return (
   <>
   <Container fluid className='p-0 bg_image'>
    <Container className='px-3 pb-5'>
        <Row>
           <Header/>
        </Row>
        <Row>
            <Banner_middle/>
        </Row>
    </Container>

   </Container>
   </>
  )
}
