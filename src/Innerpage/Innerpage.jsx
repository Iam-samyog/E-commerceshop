import React from 'react'
import Navbar from '../Navbar'
import Header from '../Header'
import Footer from '../Footer'

import FilterSidebar from './FilterSidebar'
import ProductCard from './ProductCard'

const Innerpage = () => {
  return (
    <>
    <Header></Header>
    <Navbar></Navbar>
  <div className="container  mx-auto max-w-[1300px]">
    

  <div className="grid grid-cols-1 md:grid-cols-4 ">
  {/* 1/4 Width (Sidebar or similar) */}
  <div className="hidden  md:block  md:col-span-1 ">
    <FilterSidebar/>
  </div>

  {/* 3/4 Width (Main Content) */}
  <div className="md:col-span-3 ">
    <ProductCard/>
  </div>
</div>

      
      </div>
      <Footer></Footer>
      
    </>
  )
}

export default Innerpage
