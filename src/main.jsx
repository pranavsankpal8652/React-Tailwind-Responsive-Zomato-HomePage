import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Banner from './components/Banner';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import Genaral_Section from './components/Sections';
import Collections from './components/Collections';
import Localties from './components/Localties';
import Get_the_app from './components/Get_the_app';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
createRoot(document.getElementById('root')).render(
  <>
  <StrictMode>
   <Banner/>
  <Genaral_Section/>
  <Collections/>
  <Localties/>
  <Get_the_app/>
  <FAQ/>
  </StrictMode>,
  <Footer/>
  </>

)
