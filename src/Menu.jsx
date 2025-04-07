import React, { useState } from 'react';

const Menu = () => {
  // State to control visibility of the mobile menu and search container
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
    <div>
      {/* Button to toggle mobile menu */}
      <button id="menuBtn" onClick={toggleMenu}>
        Menu
      </button>

      {/* Mobile Menu (visible when isMenuVisible is true) */}
      {isMenuVisible && (
        <div id="mobileMenu" style={menuStyle}>
          <p>Mobile Menu Content</p>
        </div>
      )}

      {/* Button to toggle search input */}
      <button id="mobileSearchBtn" onClick={toggleSearch}>
        Search
      </button>

      {/* Mobile Search Input (visible when isSearchVisible is true) */}
      {isSearchVisible && (
        <div
          id="mobileSearchContainer"
          style={searchContainerStyle}
        >
          <div style={searchInputStyle}>
            <i className="bi bi-search" style={iconStyle}></i>
            <input
              type="text"
              style={inputStyle}
              placeholder="Search for products..."
            />
          </div>
        </div>
      )}
    </div>
  );
};

// Inline styles (you can also use CSS classes if you prefer)
const menuStyle = {
  padding: '10px',
  backgroundColor: '#fff',
  borderTop: '1px solid #eee',
};

const searchContainerStyle = {
  padding: '10px',
  backgroundColor: '#fff',
  borderTop: '1px solid #eee',
};

const searchInputStyle = {
  display: 'flex',
  backgroundColor: '#F0F0F0',
  borderRadius: '25px',
  padding: '8px 16px',
};

const iconStyle = {
  color: '#909090',
  marginRight: '8px',
};

const inputStyle = {
  backgroundColor: '#F0F0F0',
  border: 'none',
  width: '100%',
  outline: 'none',
  color: 'black',
};

export default Menu;
