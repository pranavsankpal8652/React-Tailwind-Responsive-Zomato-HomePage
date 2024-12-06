import React, { useEffect, useRef, useState } from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { Col, Container, Row ,Navbar} from 'react-bootstrap'
import logo from '../assets/images/8313a97515fcb0447d2d77c276532a511583262271.webp'
import { CiSearch } from "react-icons/ci";
import axios from 'axios';
const cities=[
  { "name": "Kolhapur", selected:true },
  { "name": "Pune", selected:false },
  { "name": "Nagpur", selected:false },
  { "name": "Nashik", selected:false },
  { "name": "Aurangabad", selected:false },
  { "name": "Mumbai", selected:false }

]

export default function Banner_middle() {
  const [Foods,SetFoods]=useState([])
  const [Submenu,setSubmenu]=useState(false)
  const defaultCity=cities.find(city=>(city.selected)?city.name:'').name
  const [selectedCity,setCity]=useState(defaultCity)
  useEffect(()=>{
    function showFoods(value){
      axios.get(`https://dummyjson.com/recipes/search?q=${value}`)
      .then((success)=>{
        // console.log(success.data.recipes)
        if(value!==''){
          SetFoods(success.data.recipes)
          setSubmenu(true)
        }
        else{
          SetFoods([])
          setSubmenu(false)

        }
      })
      .catch((err)=>{
        console.log(err)
      })
    }
    document.querySelector('#search_food').addEventListener('keyup',(e)=>{
      showFoods(e.target.value)
    })  
    document.querySelector('#search_food_mobile').addEventListener('keyup',(e)=>{
      showFoods(e.target.value)
    })  
  },[])
  
  const changeCity=(event)=>{
    setCity(event.target.value)
  }


  return (
    <>
        <Col className='text-center banner_middle'>
        <img src={logo} className=' logo_img pt-4 pb-3'></img>
        <div className="title text-white fs-4 pb-5">Discover the best food & drinks in Kolhapur</div>
        <Row className='bg-white w-50 mx-auto rounded-2 p-lg-4 py-lg-3 py-1 pe-3 d-flex align-items-center  gap-4'>
            <Col xl={3} xs={12} md={4} className='position-relative'>
              <FaLocationDot className='text-danger fs-4 me-lg-4 me-0 position-absolute start-0 d-lg-block' />
                <select name="city"  className='ms-4 position-relative w-100' value={selectedCity} onChange={changeCity} >
                    {
                      cities.map((city,index)=>{
                        return(
                          <option key={city.name} value={city.name}>{city.name}</option>
                        )
                      })
                    }

                </select>
            </Col>
            <Col lg={2} className='d-xl-flex d-none'>
              <span className='px-3 d-none d-lg-block'>|</span>
              <CiSearch className='fs-4 ' />
            </Col>
            <Col lg={6} xs={10} className='d-none d-lg-block position-relative'>
              <input type='text' placeholder='Search for Popular food' id='search_food'></input>
              <Row className={`bg-white p-2 position-absolute food_submenu ${Submenu?'scaleup':'scaleDown'}`}>
                <Col lg={12}>
                    {
                      Foods.map((food,index)=>{
                        return(
                            <React.Fragment key={index}>
                               <h6 role='button'>{food.name}</h6>
                            </React.Fragment>
                            
                        )
                        
                      })
                    }
                    </Col>
                  </Row>
               
            </Col>
        </Row>
        <Row className='d-lg-none my-2 p-2'>
        <Col lg={12} className='position-relative'>
              <input type='text' placeholder='Search for Popular food' id='search_food_mobile' className='p-2'></input>
              <Row className={`bg-white p-2 position-absolute food_submenu ${Submenu?'scaleup':'scaleDown'}`}>
                <Col lg={12}>
                    {
                      Foods.map((food,index)=>{
                        // console.log(food.name)
                        return(
                            <React.Fragment key={index}>
                               <h6 role='button'>{food.name}</h6>
                            </React.Fragment>
                            
                        )
                        
                      })
                    }
                    </Col>
                  </Row>
            </Col>
        </Row>
    </Col>
    </>
  )
}

        