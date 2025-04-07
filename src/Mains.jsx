import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'


const Mains = () => {
  return (
    <>
 
 <main className="main-background">
      <div className="container mx-auto mx-w-[1300px]">
        <div className="flex flex-col md:flex-col md:gap-8 lg:flex-row lg:gap-[220px] main-image-display  ">
          <div className="main-left-part px-4 py-5 md:mx-[100px] md:pt-[53px] md:w-1/5 md:flex-wrap lg:flex-nowrap main-left  main-left-font">
            <h2 className="primary-font  leading-tight font-bold text-[32px] md:text-[48px]  md:font-bold  lg:text-[64px] md:leading-[65px] md:w-[600px] ">FIND CLOTHES THAT MATCHES YOUR STYLE</h2>
            <p className="secondary-font md:w-[572px] text-[16px] font-light  my-[28px] leading-[22px] main-left-font ">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
            <Link to="/shop"> <button className="main-btn whitespace-nowrap w-full sm:w-auto ">Shop Now</button> </Link>
               {/* <!-- Stats Section --> */}
            <div className="flex flex-wrap  md:flex-nowrap   justify-between  md:gap-10 secondary-font border-gray-200 pt-6  ">
              <div className="text-start">
                <h2 className=" text-[25px] md:text-[40px] font-bold main-left-font ">200+</h2>
                <p className="text-sm text-gray-500 mt-2 whitespace-nowrap main-left-font">International Brands</p>
              </div>
              <div className="flex items-center justify-center ">
                <div className="h-20 border-l border-2 (2px) border-gray-300"></div>
              </div>
              <div className="text-start">
                <h2 className="text-[25px] md:text-[40px] font-bold main-left-font ">2,000+</h2>
                <p className="text-sm text-gray-500 mt-2 whitespace-nowrap main-left-font">High-Quality Products</p>
              </div>
              <div className="flex items-center justify-center">
                <div className="h-20 border-l border-2 (2px) border-gray-300"></div>
              </div>
              <div className="text-start">
                <h2 className="text-[25px] md:text-[40px] font-bold main-left-font">30,000+</h2>
                <p className="text-sm text-gray-500 mt-2 whitespace-nowrap main-left-font">Happy Customers</p>
              </div>
            </div>

          </div>
          {/* <div className="main-right-part md:flex-wrap  lg:flex-nowrap  w-4/5  image-container">
          
            <img src="img/main.png" className="md:w-full " alt="Main Image"/>

            <img src="img/star.svg" alt="Star Decor 1 " className="decor decor-1"/>
            <img src="img/star.svg" alt="Star Decor 2" className="decor decor-2"/>
          

          </div> */}
          {/* <div className="main-right-part flex flex-col sm:flex-row md:flex-wrap lg:flex-nowrap w-full sm:w-4/5 relative image-container">
    
    <img 
        src="img/main.png" 
        className="w-full object-cover" 
        alt="Main Image"
    />

    <img 
        src="img/star.svg" 
        alt="Star Decor 1" 
        className="decor decor-1 absolute top-4 right-4 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16"
    />
    
    <img 
        src="img/star.svg" 
        alt="Star Decor 2" 
        className="decor decor-2 absolute bottom-4 left-4 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16"
    />

</div> */}
<div className="main-right-part image-container">
  <img src="img/main.png" className="w-full" alt="Main Image"/>
  
  <img src="img/star.svg" alt="Star Decor 1" className="decor decor-1"/>
  <img src="img/star.svg" alt="Star Decor 2" className="decor decor-2"/>
</div>
        </div>
      </div>
    </main>


    </>
  )
}

export default Mains
