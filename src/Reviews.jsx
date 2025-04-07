// import React from 'react'

// const Reviews = () => {
//   return (
//     <>
//       <section className="max-w-7xl mx-auto px-4 py-16 mt-[32px] secondary-font">
//   {/* Section Title */}
//   <h2 className="text-4xl font-bold text-start mb-12 primary-font">
//     OUR HAPPY CUSTOMERS
//   </h2>
//   {/* Reviews Container */}
//   <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//     {/* Review Card 1 */}
//     <div className="bg-white p-6 rounded-lg shadow-md">
//       <div className="mb-4">
//         <div className="text-yellow-400 text-2xl mb-2">★★★★★</div>
//         <h3 className="font-bold  text-[20px]">
//           Sarah M. <span className="">✅</span>
//         </h3>
//       </div>
//       <p className="text-gray-600 leading-relaxed">
//         "I'm blown away by the quality and style of the clothes I received from
//         Shop.co. From casual wear to elegant dresses, every piece I've bought
//         has exceeded my expectations."
//       </p>
//     </div>
//     {/* Review Card 2 */}
//     <div className="bg-white p-6 rounded-lg shadow-md">
//       <div className="mb-4">
//         <div className="text-yellow-400 text-2xl mb-2">★★★★★</div>
//         <h3 className="font-bold text-[20px]">
//           Alex K. <span className="">✅</span>
//         </h3>
//       </div>
//       <p className="text-gray-600 leading-relaxed">
//         "Finding clothes that align with my personal style used to be a
//         challenge until I discovered Shop.co. The range of options they offer is
//         truly remarkable, catering to a variety of tastes and occasions."
//       </p>
//     </div>
//     {/* Review Card 3 */}
//     <div className="bg-white p-6 rounded-lg shadow-md">
//       <div className="mb-4">
//         <div className="text-yellow-400 text-2xl mb-2">★★★★★</div>
//         <h3 className="font-bold text-[20px]">
//           James L. <span className="">✅</span>
//         </h3>
//       </div>
//       <p className="text-gray-600 leading-relaxed">
//         "As someone who's always on the lookout for unique fashion pieces, I'm
//         thrilled to have stumbled upon Shop.co. The selection of clothes is not
//         only diverse but also on-point with the latest trends."
//       </p>
//     </div>
//   </div>
// </section>

//     </>
//   )
// }
"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
// Import Swiper and required modules
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"

const Reviews = () => {
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)

  // Review data - expanded to 6 reviews
  const reviewsData = [
    {
      name: "Sarah M.",
      rating: 5,
      verified: true,
      text: "\"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.\"",
    },
    {
      name: "Alex K.",
      rating: 5,
      verified: true,
      text: '"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."',
    },
    {
      name: "James L.",
      rating: 5,
      verified: true,
      text: "\"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.\"",
    },
    {
      name: "Emily R.",
      rating: 5,
      verified: true,
      text: '"The customer service at Shop.co is exceptional! When I had an issue with sizing, they were quick to respond and helped me find the perfect fit. I\'m now a loyal customer."',
    },
    {
      name: "Michael T.",
      rating: 5,
      verified: true,
      text: '"I appreciate the quality-to-price ratio at Shop.co. The clothes are durable, stylish, and reasonably priced. It\'s rare to find all three in one place!"',
    },
    {
      name: "Jessica W.",
      rating: 5,
      verified: true,
      text: '"Shop.co has transformed my wardrobe! Their curated collections make it easy to find pieces that work together, and the quality is consistently impressive."',
    },
  ]

  // Function to render stars based on rating
  const renderStars = (rating) => {
    return (
      <div className="text-yellow-400 text-2xl mb-2 flex">
        {[...Array(5)].map((_, i) => (
          <span key={i}>{i < rating ? "★" : "☆"}</span>
        ))}
      </div>
    )
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 mt-[32px] secondary-font">
      {/* Section Title with Navigation Arrows */}
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-4xl font-bold text-start primary-font">OUR HAPPY CUSTOMERS</h2>
        <div className="flex gap-4">
          <button
            ref={navigationPrevRef}
            className="p-2 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Previous reviews"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            ref={navigationNextRef}
            className="p-2 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Next reviews"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Swiper Component */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={32}
        slidesPerView={1}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onBeforeInit={(swiper) => {
          // @ts-ignore
          swiper.params.navigation.prevEl = navigationPrevRef.current
          // @ts-ignore
          swiper.params.navigation.nextEl = navigationNextRef.current
        }}
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 3,
            spaceBetween: 32,
          },
        }}
        className="reviews-swiper"
      >
        {reviewsData.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white p-6 rounded-lg  shadow border h-auto lg:h-[250px]">
              <div className="mb-4">
                {renderStars(review.rating)}
                <h3 className="font-bold text-[20px]">
                  {review.name} {review.verified && <span className="">✅</span>}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{review.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Reviews;




