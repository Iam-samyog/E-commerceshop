import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="bg-[#F0F0F0] mt-[150px] py-12 secondary-font relative">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Newsletter Section */}
    <div className="relative mx-auto mb-12 max-w-[1240px] w-full ">
      <div className="text-center bg-black text-white py-6 sm:py-8 md:py-8 lg:py-[43px] px-4 sm:px-6 md:px-8 lg:px-[64px] rounded-[20px] w-full absolute top-[-190px] shadow-lg">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Heading Section */}
          <div className="w-full md:w-1/2 lg:w-[560px] text-left md:text-left">
            <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-tight primary-font font-bold mb-4">
              STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </h2>
          </div>
          {/* Subscription Form Section */}
          <div className="secondary-font w-full md:w-1/2">
            <form className="flex flex-col items-center md:items-end gap-2">
              <div className="bg-white px-3 py-2 rounded-[20px] w-full max-w-[400px] flex items-center">
                <i className="bi bi-envelope text-[#999999] font-bold px-2" />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-2 py-1 rounded-lg focus:outline-none text-black"
                  required=""
                />
              </div>
              <button
                type="submit"
                className="bg-white text-black font-bold px-6 sm:px-8 md:px-10 lg:px-[80px] py-2 rounded-[20px] w-full max-w-[400px] transition-colors newletter-btn"
              >
                Subscribe to Newsletter
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className="pt-20 ">
      {/* Footer Links */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12 ">
        {/* Shop.co Section */}
        <div className=" col-span-2 md:col-span-2 ">
          <h3 className="text-[33.5px] font-bold mb-4 primary-font ">
            SHOP.CO
          </h3>
          <p className="text-gray-600 secondary-font">
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </p>
          <div className=" mt-3 flex gap-4 items-center font-bold ">
            <a href="#">
              <i className="bi bi-twitter-x text-2xl" />
            </a>
            <a href="#">
              <i className="bi bi-facebook text-2xl" />
            </a>
            <a href="https://www.instagram.com/iam.samyog/">
              <i className="bi bi-instagram text-2xl" />
            </a>
            <a href="https://github.com/Iam-samyog">
              <i className="bi bi-github text-2xl" />
            </a>
          </div>
        </div>
        {/* Company Section */}
        <div className="mt-2">
          <h3 className="text-[16px] font-medium mb-4 tracking-[3px] ">
            COMPANY
          </h3>
          <ul className="text-gray-600  ">
            <li className="mb-2">
              <a href="#" className="hover:text-black">
                About
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-black">
                Features
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-black">
                Works
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-black">
                Career
              </a>
            </li>
          </ul>
        </div>
        {/* Help Section */}
        <div className="mt-2">
          <h3 className="text-[16px] font-medium mb-4 tracking-[3px]">HELP</h3>
          <ul className="text-gray-600 ">
            <li className="mb-2">
              <a href="#" className="hover:text-black">
                Customer Support
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-black">
                Delivery Details
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-black">
                Terms &amp; Conditions
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-black">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        {/* FAQ Section */}
        <div className="mt-2">
          <h3 className="text-[16px] font-medium mb-4 tracking-[3px]">FAQ</h3>
          <ul className="text-gray-600 ">
            <li className="mb-2">
              <a href="#" className="hover:text-black">
                Account
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-black">
                Manage Deliveries
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-black">
                Orders
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-black">
                Payments
              </a>
            </li>
          </ul>
        </div>
        {/* Resources Section */}
        <div className="mt-2">
          <h3 className="text-[16px] font-medium mb-4 tracking-[3px]">
            RESOURCES
          </h3>
          <ul className="text-gray-600 ">
            <li className="mb-2">
              <a href="#" className="hover:text-black">
                Free eBooks
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-black">
                Development Tutorials
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-black">
                How to - Blog
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-black">
                Youtube Playlist
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    {/* Copyright and Payment Methods */}
    <div className="border-t border-gray-400  flex flex-col md:flex-row justify-between items-center">
      <p className="text-gray-600 mb-4 md:mb-0">
        Shopco © 2000-2023. All Rights Reserved
      </p>
      <div className="flex  items-center pt-4">
        <a href="">
          <img src="img/Payments/Visa.png" alt="Visa" className=" w-[80px]" />
        </a>
        <a href="">
          {" "}
          <img
            src="img/Payments/Mastercardnice.png"
            alt="PayPal"
            className=" w-[80px]"
          />
        </a>
        <a href="">
          <img
            src="img/Payments/Applepay.png"
            alt="Buy"
            className=" w-[80px]"
          />
        </a>
        <a href="">
          {" "}
          <img src="img/Payments/Gpay.png" alt="G Pay" className=" w-[80px]" />
        </a>
      </div>
    </div>
  </div>
</footer>

    </>
  )
}

export default Footer
