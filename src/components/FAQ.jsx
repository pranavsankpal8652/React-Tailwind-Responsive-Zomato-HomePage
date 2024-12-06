import React from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import FAQ_inner from './FAQ_inner';

const questions_Answers=
[
    {
        id:1,
        question:'Popular Cuisines Near Me',
        answer:'Beverages near me. Biryani near meBurger near me. Chinese near me. Coffee near me. Desserts near me. Ice Cream near me. Kebab near me. Maharashtrian near me. Momos near me. Mughlai near me. North Indian near me. Pizza near me. Rolls near me. Sandwich near me. Seafood near me. Shake near me. Sichuan near me. South Indian near me. Street near me. '
    },
    {
        id:2,
        question:'Popular Cuisines Near Me',
        answer:'Beverages near me. Biryani near meBurger near me. Chinese near me. Coffee near me. Desserts near me. Ice Cream near me. Kebab near me. Maharashtrian near me. Momos near me. Mughlai near me. North Indian near me. Pizza near me. Rolls near me. Sandwich near me. Seafood near me. Shake near me. Sichuan near me. South Indian near me. Street near me. '
    },
    {
        id:3,
        question:'Popular Cuisines Near Me',
        answer:'Beverages near me. Biryani near meBurger near me. Chinese near me. Coffee near me. Desserts near me. Ice Cream near me. Kebab near me. Maharashtrian near me. Momos near me. Mughlai near me. North Indian near me. Pizza near me. Rolls near me. Sandwich near me. Seafood near me. Shake near me. Sichuan near me. South Indian near me. Street near me. '
    },
    {
        id:4,
        question:'Popular Cuisines Near Me',
        answer:'Beverages near me. Biryani near meBurger near me. Chinese near me. Coffee near me. Desserts near me. Ice Cream near me. Kebab near me. Maharashtrian near me. Momos near me. Mughlai near me. North Indian near me. Pizza near me. Rolls near me. Sandwich near me. Seafood near me. Shake near me. Sichuan near me. South Indian near me. Street near me. '
    },
    {
        id:5,
        question:'Popular Cuisines Near Me',
        answer:'Beverages near me. Biryani near meBurger near me. Chinese near me. Coffee near me. Desserts near me. Ice Cream near me. Kebab near me. Maharashtrian near me. Momos near me. Mughlai near me. North Indian near me. Pizza near me. Rolls near me. Sandwich near me. Seafood near me. Shake near me. Sichuan near me. South Indian near me. Street near me. '
    }
]
export default function FAQ() {
  return ( 
      <>
        <Container fluid className='p-0'>
            <Container className='p-3 my-4'>
                <Row className='p-3'>
                    <Col lg={12} xs={10}>
                        <h2 className='px-lg-5'>Explore options near me</h2>
                    </Col>
                </Row>
                <Row>
                    {
                        questions_Answers.map((faq,index)=>{
                            return(
                                <FAQ_inner faq={faq} key={index} />
                            )
                        })
                    }
                </Row>
            </Container>
        </Container>
      </>
      );
    }
    
 
