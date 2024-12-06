import React, { useState,useEffect } from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import Footer_inner from './Footer_inner';
import { TiSocialTwitter } from "react-icons/ti";
import g_play from '../assets/images/23e930757c3df49840c482a8638bf5c31556001144.webp'
import a_play from '../assets/images/9f0c85a5e33adb783fa0aef667075f9e1556003622.webp'
import Dropdown from 'react-bootstrap/Dropdown';

const footer_inners=[ 
    {
        title:'About Zomato',
        subsections:[
        'Who We Are','Blog','Work With Us','Investor Relations','Report Fraud','Press Kit','Contact Us'
        ]

    },
    {
        title:'About Zomato',
        subsections:[
        'Who We Are','Blog','Work With Us','Investor Relations','Report Fraud','Press Kit','Contact Us'
        ]

    },
    {
        title:'About Zomato',
        subsections:[
        'Who We Are','Blog','Work With Us','Investor Relations','Report Fraud','Press Kit','Contact Us'
        ]

    },
    {
        title:'About Zomato',
        subsections:[
        'Who We Are','Blog','Work With Us','Investor Relations','Report Fraud','Press Kit','Contact Us'
        ]

    },
    
]
const social_links=
    {
        title:'Social Links',
        profiles:[<TiSocialTwitter />,<TiSocialTwitter />,<TiSocialTwitter />,<TiSocialTwitter />],
        btn:{
            btn1:g_play,
            btn2:a_play
        }

    }

export default function Footer() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        document.body.appendChild(script);
    
        window.googleTranslateElementInit = () => {
          new window.google.translate.TranslateElement(
            { pageLanguage: 'en' }, 
            'translator'
          );
        };
    
        return () => {
          document.body.removeChild(script);
        };
      }, []);
    const [flag,setFlag]=useState(true)
    const changeFlag=()=>{
        setFlag(!flag)
    }
  return (
    <>
    <Container fluid className='p-0'>
        <Container className='p-5'>
            <Row className='justify-content-between align-items-center mx-auto ps-4'>
                <Col lg={3} xs={10} sm={5} md={4} className='text-center my-3'>
                    <img src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*' className='w-100'></img>
                </Col>
                <Col lg={5} md={4}>
                    <Row className='gap-4'>
                        <Col lg={5} xl={3} className='border border-secondary  px-1 py-1 position-relative  text-center'>
                            <Row className='align-items-center'>
                                <Col lg={5} xs={3} md={4}>
                                     <img src={(flag)?'https://icon-library.com/images/india-flag-icon/india-flag-icon-29.jpg':'https://cdn1.iconfinder.com/data/icons/flags-36/512/Arab_emirates_Country_flag-512.png'} className='position absolute start-0  w-100'></img>
                                </Col>
                                <Col lg={2} xs={2}>
                                    <select onChange={changeFlag}>
                                        <option>India</option>
                                        <option>UAE</option>
                                    </select>
                                </Col>
                            </Row>
                         
                        </Col>
                        <Col lg={8} xl={5} className='border border-secondary p-1' id='translator'>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className='py-5 my-3 justify-content-center'>
                {
                    footer_inners.map((footer_inner_col,index)=>{
                        return(
                            <Footer_inner footer_inner_col={footer_inner_col} key={index}/>
                        )
                    })
                
                }
                <Col lg={2} xs={9} sm={4}>
                    <h5>{social_links.title}</h5>
                    <Row className='gap-0'>
                    {
                        social_links.profiles.map((subsection,index)=>{
                            return(
                                <Col xl={2} xs={2} className='text-secondary fs-4 ' role='button' key={index}>{subsection}</Col>
                            )
                        })
                        
                    }
                    </Row>
                    <img src={social_links.btn.btn1} className='w-100 p-2'></img>
                    <img src={social_links.btn.btn2} className='w-100 p-2'></img>

                </Col>
            </Row>
            <Dropdown.Divider className='border border-secondary' />
            <Row>
                <Col>
                    <p>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2024 © Zomato™ Ltd. All rights reserved.</p>
                </Col>
            </Row>
        </Container>
    </Container>
    </>
  )
}
