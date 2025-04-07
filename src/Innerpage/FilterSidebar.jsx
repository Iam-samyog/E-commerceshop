import React, { useState } from 'react';

const FilterSidebar = () => {
  // State for price range
  const [priceRange, setPriceRange] = useState(200);
  
  // State for expanded sections
  const [expandedSections, setExpandedSections] = useState({
    price: true,
    colors: true,
    size: true,
    dressStyle: true
  });
  
  // State for selected colors
  const [selectedColors, setSelectedColors] = useState(['blue']);
  
  // State for selected size
  const [selectedSize, setSelectedSize] = useState('Large');
  
  // Toggle section expansion
  const toggleSection = (section) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section]
    });
  };
  
  // Handle color selection
  const toggleColor = (color) => {
    if (selectedColors.includes(color)) {
      setSelectedColors(selectedColors.filter(c => c !== color));
    } else {
      setSelectedColors([...selectedColors, color]);
    }
  };
  
  // Handle size selection
  const selectSize = (size) => {
    setSelectedSize(size);
  };
  
  // Categories with right chevron
  const categories = [
    "T-shirts",
    "Shorts",
    "Shirts",
    "Hoodie",
    "Jeans"
  ];
  
  // Sizes available
  const sizes = [
    "XX-Small",
    "X-Small",
    "Small",
    "Medium",
    "Large",
    "X-Large",
    "XX-Large",
    "3X-Large",
    "4X-Large"
  ];
  
  // Dress styles
  const dressStyles = [
    "Casual",
    "Formal",
    "Party",
    "Gym"
  ];
  
  // Colors available
  const colors = [
    { name: 'green', hex: '#00c853' },
    { name: 'red', hex: '#f44336' },
    { name: 'yellow', hex: '#ffeb3b' },
    { name: 'orange', hex: '#ff9800' },
    { name: 'cyan', hex: '#00bcd4' },
    { name: 'blue', hex: '#2196f3' },
    { name: 'purple', hex: '#9c27b0' },
    { name: 'pink', hex: '#e91e63' },
    { name: 'white', hex: '#ffffff' },
    { name: 'black', hex: '#000000' }
  ];

  // Handle apply filter
  const applyFilter = () => {
    // Create filter object with all selected values
    const filters = {
      priceRange,
      selectedColors,
      selectedSize,
      // Add any other filters here
    };
    
    console.log("Applied filters:", filters);
    // Here you would typically send these filters to a parent component
    // or dispatch an action if using Redux
  };

  return (
    <div className="w-full max-w-[300px] border secondary-font border-gray-200 rounded-lg bg-white">
      {/* Header */}
      <div className="flex justify-between items-center p-5 border-b border-gray-200">
        <h2 className="text-xl font-bold">Filters</h2>
        <button className="text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 3L8 21"></path>
            <path d="M16 3L14 21"></path>
            <path d="M3 10h18"></path>
            <path d="M3 14h18"></path>
          </svg>
        </button>
      </div>
      
      {/* Categories */}
      <div className="border-b border-gray-200">
        {categories.map((category, index) => (
          <div key={index} className="flex justify-between items-center p-4 hover:bg-gray-50 cursor-pointer">
            <span className="text-gray-600">{category}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
              <path d="M9 18l6-6-6-6"></path>
            </svg>
          </div>
        ))}
      </div>
      
      {/* Price Section */}
     
       <div className="border-b border-gray-200">
  <div 
    className="flex justify-between items-center p-4 cursor-pointer"
    onClick={() => toggleSection('price')}
  >
    <h3 className="text-xl font-bold">Price</h3>
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="20" 
      height="20" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={`transform transition-transform ${expandedSections.price ? 'rotate-180' : ''}`}
    >
      <path d="M18 15l-6-6-6 6"></path>
    </svg>
  </div>
  
  {expandedSections.price && (
    <div className="p-5 pt-0">
      <div className="relative mt-4 mb-6">
        <input
          type="range"
          min="50"
          max="200"
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer transition-all ease-in-out duration-200"
          style={{
            background: `linear-gradient(to right, black 0%, black ${((priceRange - 50) / 150) * 100}%, #e5e7eb ${((priceRange - 50) / 150) * 100}%, #e5e7eb 100%)`
          }}
        />
        <div 
          className="w-6 h-6 bg-black absolute rounded-full top-1/2 transform -translate-y-1/2 cursor-grab transition-all ease-in-out duration-200"
          style={{ left: `calc(${((priceRange - 50) / 150) * 100}% - 12px)` }}
        ></div>
      </div>
      <div className="flex justify-between">
        <span className="font-medium">$10</span>
        <span className="font-medium">${priceRange}</span>
      </div>
    </div>
  )}
</div>

      {/* Colors Section */}
      <div className="border-b border-gray-200">
        <div 
          className="flex justify-between items-center p-4 cursor-pointer"
          onClick={() => toggleSection('colors')}
        >
          <h3 className="text-xl font-bold">Colors</h3>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className={`transform transition-transform ${expandedSections.colors ? 'rotate-180' : ''}`}
          >
            <path d="M18 15l-6-6-6 6"></path>
          </svg>
        </div>
        
        {expandedSections.colors && (
          <div className="p-5 pt-2">
            <div className="grid grid-cols-5 gap-3">
              {colors.map((color) => (
                <div 
                  key={color.name}
                  className={`
                    w-12 h-12 rounded-full cursor-pointer relative 
                    ${color.name === 'white' ? 'border border-gray-300' : ''}
                  `}
                  style={{ backgroundColor: color.hex }}
                  onClick={() => toggleColor(color.name)}
                >
                  {selectedColors.includes(color.name) && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke={color.name === 'white' ? 'black' : 'white'} 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* Size Section */}
      <div className="border-b border-gray-200">
        <div 
          className="flex justify-between items-center p-4 cursor-pointer"
          onClick={() => toggleSection('size')}
        >
          <h3 className="text-xl font-bold">Size</h3>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className={`transform transition-transform ${expandedSections.size ? 'rotate-180' : ''}`}
          >
            <path d="M18 15l-6-6-6 6"></path>
          </svg>
        </div>
        
        {expandedSections.size && (
          <div className="p-4 pt-2">
            <div className="flex flex-wrap gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  className={`
                    px-4 py-2 rounded-full text-sm font-medium
                    ${selectedSize === size 
                      ? 'bg-black text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }
                  `}
                  onClick={() => selectSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* Dress Style Section */}
      <div className="border-b border-gray-200">
        <div 
          className="flex justify-between items-center p-4 cursor-pointer"
          onClick={() => toggleSection('dressStyle')}
        >
          <h3 className="text-xl font-bold">Dress Style</h3>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className={`transform transition-transform ${expandedSections.dressStyle ? 'rotate-180' : ''}`}
          >
            <path d="M18 15l-6-6-6 6"></path>
          </svg>
        </div>
        
        {expandedSections.dressStyle && (
          <div>
            {dressStyles.map((style) => (
              <div key={style} className="flex justify-between items-center p-4 hover:bg-gray-50 cursor-pointer">
                <span className="text-gray-600">{style}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                  <path d="M9 18l6-6-6-6"></path>
                </svg>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Apply Filter Button */}
      <div className="p-4">
        <button 
          className="w-full  bg-black text-white py-3 px-4 rounded-full font-medium hover:bg-gray-600 transition"
          onClick={applyFilter}
        >
          Apply Filter
        </button>
      </div>
    </div>
  );
};

export default FilterSidebar;