import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { CiMenuBurger } from "react-icons/ci";
import { SiZomato } from "react-icons/si";

export default function Responsive_Header() {
    const [show, setShow] = useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
          <Button variant="primary" className="d-lg-none" onClick={handleShow}>
          <CiMenuBurger />
        </Button>

       

        <Offcanvas show={show} onHide={handleClose} responsive="lg">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
            <SiZomato className='zomato' />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <p className="mb-0">
            <span className='d-flex flex-column d-lg-none gap-5 fs-5'>
              <a href="#" className='text-black text-decoration-none '>Investor Relations</a>
              <a href="#"  className='text-black text-decoration-none'>Add restaurant </a>
              <a href="#"  className='text-black text-decoration-none'>Log in</a>
              <a href="#"  className='text-black text-decoration-none'>Sign Up</a>
            </span>
            </p>
          </Offcanvas.Body>
        </Offcanvas>
        </div>
  )
}
