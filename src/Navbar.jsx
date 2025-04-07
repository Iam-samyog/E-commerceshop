
// import React from 'react'
// import { Link } from 'react-router-dom'

// const Navbar = () => {
//   return (
//     <>
//         <nav className="container my-[10px] mx-auto max-w-[1300px] text-center text-white secondary-font">
//         <div className="flex items-center justify-between py-3 px-4 sm:px-6 md:px-7 lg:px-8">
          
        
//           <div className="flex gap-4 items-center md:pb-3">
//               {/* <!-- 🔹 Mobile Menu Button --> */}
//             <button id="menuBtn" className="md:hidden  pt-[4px] text-black font-black text-[24px] focus:outline-none">
//               ☰
//             </button>
//               {/* <!-- 🔹 Logo --> */}
//             <Link to='/' className="text-[28px] md:text-[32px] font-black text-black uppercase primary-font">
//               Shop.co
//             </Link>
//           </div>
      
//           {/* <!-- 🔹 Desktop/Tablet Menu & Search (Flex on MD+ screens) --> */}
//           <div className="hidden md:flex  items-center gap-8 w-full ml-[30px]">
//             <a href="#" className="text-black font-[20px] flex gap-2 items-center tablet-text-sm">
//               Shop <img src="img/Vector.svg" alt="" width="10px" className="my-2"/>
//             </a>
//             <a href="#" className="text-black font-[20px] tablet-text-sm">On Sale</a>
//             <a href="#" className="text-black font-[20px] tablet-text-sm  ">New Arrivals</a>
//             <a href="#" className="text-black font-[20px] tablet-text-sm">Brands</a>
      
//             {/* <!-- 🔹 Desktop Search Bar (Centered with Flex) --> */}
//             <div className="hidden md:flex w-[577px] bg-[#F0F0F0] py-2 tablet-search px-4 rounded-[50px] items-center">
//               <i className="bi bi-search text-[#909090] px-2 font-bold"></i>
//               <form action="">
//                 <input
//                   type="text"
//                   className="bg-[#F0F0F0] text-black focus:outline-none  tablet-search py-[5px] px-2 w-[500px]"
//                   placeholder="Search for products. . ."
//                 />
//               </form>
//             </div>
//           </div>
      
//           {/* <!-- 🔹 Mobile Search + Cart + Profile --> */}
//           <div className="flex items-center gap-3">
//             {/* <!-- Mobile: Search Icon Next to Cart/Profile --> */}
//             <button id="mobileSearchBtn" className="md:hidden tablet-search-display">
//               <i className="bi bi-search text-black text-[20px] font-bold"></i>
//             </button>
      
//             <img src="img/Cart.svg" alt="Cart" className="w-6 h-6"/>
//             <img src="img/profile.svg" alt="Profile" className="w-6 h-6"/>
      
          
        
//           </div>
//         </div>
     
      
//         {/* <!-- 🔹 Mobile Menu (Hidden by default) --> */}
//         <div id="mobileMenu" className=" md:hidden bg-white border-t border-gray-200">
//           <a href="#" className="block py-2 px-4 text-black font-[20px]">Shop</a>
//           <a href="#" className="block py-2 px-4 text-black font-[16px]">On Sale</a>
//           <a href="#" className="block py-2 px-4 text-black font-[16px]">New Arrivals</a>
//           <a href="#" className="block py-2 px-4 text-black font-[16px]">Brands</a>
//         </div>
//       </nav>
//     </>
//   )
// }

// export default Navbar

import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  // State to control visibility of the mobile menu and search input
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  // Toggle mobile menu visibility
  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  // Toggle search input visibility
  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <>
      <nav className="container my-[10px] mx-auto max-w-[1300px] text-center text-white secondary-font">
        <div className="flex items-center justify-between py-3 px-4 sm:px-6 md:px-7 lg:px-8">

          <div className="flex gap-4 items-center md:pb-3">
            {/* Mobile Menu Button */}
            <button
              id="menuBtn"
              className="md:hidden pt-[4px] text-black font-black text-[24px] focus:outline-none"
              onClick={toggleMenu} // Toggle menu visibility
            >
              ☰
            </button>
            {/* Logo */}
            <Link to="/" className="text-[28px] md:text-[32px] font-black text-black uppercase primary-font">
              Shop.co
            </Link>
          </div>

          {/* Desktop/Tablet Menu & Search */}
          <div className="hidden md:flex items-center gap-8 w-full ml-[30px]">
            <a href="#" className="text-black font-[20px] flex gap-2 items-center tablet-text-sm">
              Shop <img src="img/Vector.svg" alt="" width="10px" className="my-2"/>
            </a>
            <a href="#" className="text-black font-[20px] tablet-text-sm">On Sale</a>
            <a href="#" className="text-black font-[20px] tablet-text-sm">New Arrivals</a>
            <a href="#" className="text-black font-[20px] tablet-text-sm">Brands</a>

            {/* Desktop Search Bar */}
            <div className="hidden md:flex w-[577px] bg-[#F0F0F0] py-2 tablet-search px-4 rounded-[50px] items-center">
              <i className="bi bi-search text-[#909090] px-2 font-bold"></i>
              <form action="">
                <input
                  type="text"
                  className="bg-[#F0F0F0] text-black focus:outline-none tablet-search py-[5px] px-2 w-[500px]"
                  placeholder="Search for products. . ."
                />
              </form>
            </div>
          </div>

          {/* Mobile Search + Cart + Profile */}
          <div className="flex items-center gap-3">
            {/* Mobile Search Icon */}
            <button
              id="mobileSearchBtn"
              className="md:hidden tablet-search-display"
              onClick={toggleSearch} // Toggle search visibility
            >
              <i className="bi bi-search text-black text-[20px] font-bold"></i>
            </button>

            <img src="img/Cart.svg" alt="Cart" className="w-6 h-6"/>
            <img src="img/profile.svg" alt="Profile" className="w-6 h-6"/>
          </div>
        </div>

        {/* Mobile Menu (Visible when isMenuVisible is true) */}
        {isMenuVisible && (
          <div id="mobileMenu" className="md:hidden bg-white border-t border-gray-200">
            <a href="#" className="block py-2 px-4 text-black font-[20px]">Shop</a>
            <a href="#" className="block py-2 px-4 text-black font-[16px]">On Sale</a>
            <a href="#" className="block py-2 px-4 text-black font-[16px]">New Arrivals</a>
            <a href="#" className="block py-2 px-4 text-black font-[16px]">Brands</a>
          </div>
        )}

        {/* Mobile Search Input (Visible when isSearchVisible is true) */}
        {isSearchVisible && (
          <div
            id="mobileSearchContainer"
            className="md:hidden bg-white border-t border-gray-200"
            style={{ padding: '10px', backgroundColor: '#fff', borderTop: '1px solid #eee' }}
          >
            <div style={{ display: 'flex', backgroundColor: '#F0F0F0', borderRadius: '25px', padding: '8px 16px' }}>
              <i className="bi bi-search" style={{ color: '#909090', marginRight: '8px' }}></i>
              <input
                type="text"
                style={{
                  backgroundColor: '#F0F0F0',
                  border: 'none',
                  width: '100%',
                  outline: 'none',
                  color: 'black',
                }}
                placeholder="Search for products..."
              />
            </div>
          </div>
        )}
      </nav>
    </>
  )
}

export default Navbar;
