import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import Localities_info from './Localities_info'
const localities=[
    {
        Name:'Tarabai Park',
        places:163,
    },
    {
        Name:'Mangalwar Peth',
        places:159,
    },
    {
        Name:'Rajarampuri ',
        places:140,
    },
    {
        Name:'Shahupuri ',
        places:125,
    },
    {
        Name:'Ruikar Colony',
        places:63,
    },
    {
        Name:'Vidya Nagar',
        places:18,
    },
    {
        Name:'Mangalwar Peth',
        places:159,
    },
    {
        Name:'Rajarampuri ',
        places:140,
    },
    {
        Name:'See more ',
    }
]
export default function Localties() {
  return (
    <>
    <Container fluid className='p-0'>
         <Container className='p-5'>
                <Row>
                    <Col>
                        <h2>Popular localities in and around <span className='fw-bold'>Kolhapur</span></h2>
                    </Col>
                </Row>
                <Row className='gap-4 p-5'>
                    {
                        localities.map((locality,index)=>{
                            return(
                                <Localities_info locality={locality} key={index}/>
                            )
                        })
                    }
                </Row>
            </Container>
        </Container>
    </>
  )
}
