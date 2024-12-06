import React, { useState } from 'react'
import app from '../assets/images/ce5bc038a8a2d4f8f24465c8826182af1726501431.webp'
import { Col, Container,Row } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import g_play from '../assets/images/23e930757c3df49840c482a8638bf5c31556001144.webp'
import a_play from '../assets/images/9f0c85a5e33adb783fa0aef667075f9e1556003622.webp'
import Form from 'react-bootstrap/Form';
export default function Get_the_app() {
    const [inputType,setinputType]=useState('Email')
    const switchInput=(e)=>{
        if(e.target.id=='phone'){
            setinputType('text')
        }
        else{
            setinputType('Email')
        }
    }
  return (
    <>
        <Container fluid className='p-0 bg-light'>
            <Container>
                <Row className='justify-content-center p-3 align-items-center'>
                    <Col lg={4} sm={7}>
                        <img src={app} className='w-100'></img>
                    </Col>
                    <Col lg={6}>
                        <h1 className='fs-1 py-1'>Get the Zomato app</h1>
                        <p className='text-secondary mb-5'>We will send you a link, open it on your phone to download the app</p>
                        <Row className='my-4 px-2'>
                            <Col xl={2}  xs={6}>
                                <input type='radio' name='get_the_app' id='email' className='radio' onChange={switchInput} ></input>
                                <label htmlFor='email' className='px-2'>Email</label>
                            </Col>
                            <Col xl={2} xs={6}>
                                <input type='radio' name='get_the_app' id='phone' className='radio' onChange={switchInput}></input>
                                <label htmlFor='phone' className='px-2'>Phone</label>
                            </Col>
                            
                         
                        </Row>
                        <Row className='pb-4 mb-3 align-items-center gap-2'>
                            <Col lg={6} >
                                <FloatingLabel  controlId="floatingInput" label={`Enter${(inputType=='Email')?' Email Address':' Phone Number'}`}>
                                    <Form.Control type={inputType} placeholder='' />
                                </FloatingLabel>
                            </Col>
                            <Col lg={5} className='align-self-center'>
                                 <button type="button" className="btn btn-danger">Share App Link</button>
                            </Col>

                        </Row>
                        <p className='text-secondary'>Download app from</p>
                        <Row>
                            <Col lg={4} xs={6} xl={3} md={3}>
                                <img src={g_play} className='w-100'></img>
                            </Col>
                            <Col lg={4} xs={6} xl={3}  md={3}>
                                <img src={a_play} className='w-100'></img>
                            </Col>
                        </Row>
                       
                       
                    </Col>
                </Row>
            </Container>
        </Container>
    </>
  )
}
