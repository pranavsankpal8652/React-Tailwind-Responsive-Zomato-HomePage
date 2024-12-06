import React, { useState } from 'react'
import { MdAppShortcut } from "react-icons/md";
import { Col, Container, Row ,Navbar} from 'react-bootstrap'
import Responsive_Header from './Responsive_Header';


export default function Header() {
  
  return (
 <>
    <div className='px-lg-5 mx-lg-5 px-2 navbar' >
        <Col lg={2} xs={12}> <Navbar.Brand href="#home" className='fs-6 text-white d-none d-lg-block'><MdAppShortcut/> Get The App</Navbar.Brand>
          <Responsive_Header/>
        </Col>
    <div className="justify-content-end pe-5">
        <Col lg={12}>
        <Navbar.Text className='text-white d-lg-flex d-none gap-5 font'>
            <a href="#" className='text-white text-decoration-none '>Investor Relations</a>
            <a href="#"  className='text-white text-decoration-none'>Add restaurant </a>
            <a href="#"  className='text-white text-decoration-none'>Log in</a>
            <a href="#"  className='text-white text-decoration-none'>Sign Up</a>
    </Navbar.Text>
        </Col>
    
    </div>
  </div>
 </>
  )
}
