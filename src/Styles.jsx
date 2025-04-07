import React from 'react'

const Styles = () => {
  return (
    <div>
      <section className="secondary-font max-w-7xl mx-auto rounded-3xl bg-gray-100 p-4 md:p-8">
    <div className="p-6 md:p-10">
      <h2 className="primary-font text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16">
        BROWSE BY DRESS STYLE
      </h2>
      {/* Grid container with fixed height of 290px */}
      <div className="grid grid-cols-1 h-[600px]  md:grid-cols-10 gap-6 ">
        {/* Casual Card */}
        <div className="card-container relative bg-white rounded-3xl overflow-hidden shadow-md  md:col-span-4">
          <img
            src="img/Models/image 11.png"
            alt="Casual style clothing"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-8 left-8">
            <h3 className="text-3xl font-bold text-black">Casual</h3>
          </div>
          <div className="card-overlay" />
        </div>
        {/* Formal Card */}
        <div className="card-container relative bg-white rounded-3xl overflow-hidden shadow-md md:col-span-6">
          <img
            src="img/Models/image 13.png"
            alt="Formal style clothing"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-8 left-8">
            <h3 className="text-3xl font-bold text-black">Formal</h3>
          </div>
          <div className="card-overlay" />
        </div>
        {/* Party Card */}
        <div className="card-container relative bg-white rounded-3xl overflow-hidden shadow-md md:col-span-6">
          <img
            src="img/Models/image 12.png"
            alt="Party style clothing"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-8 left-8">
            <h3 className="text-3xl font-bold text-black">Party</h3>
          </div>
          <div className="card-overlay" />
        </div>
        {/* Gym Card */}
        <div className="card-container relative bg-white rounded-3xl overflow-hidden shadow-md md:col-span-4">
          <img
            src="img/Models/image 14.png"
            alt="Gym style clothing"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-8 left-8">
            <h3 className="text-3xl font-bold text-black">Gym</h3>
          </div>
          <div className="card-overlay" />
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default Styles
