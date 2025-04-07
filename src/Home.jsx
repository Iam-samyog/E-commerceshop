import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Mains from './Mains'
import Brands from './Brands'

import Bodypages from './Bodypages'
import Reviews from './Reviews'
import Footer from './Footer'
import Styles from './Styles'
import { Menu } from 'lucide-react'


const Home = () => {
  return (
    <>
   
        <Header/>
      <Navbar/>
      <Mains/>
      <Brands/>
      <Bodypages/>
      <Styles/>
      <Reviews/>
      <Footer/>
      
    </>
  )
}

export default Home
