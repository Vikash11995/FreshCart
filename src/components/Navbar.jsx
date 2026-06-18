import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router'
import products from '../product' // <-- Update path if your products.js is elsewhere

const NAVBAR_HEIGHT = 64; // px; for consistent spacing if needed elsewhere

const animatedPlaceholders = [
  "Search fruits,vegetables",
  "Try Mushroom, Onion, Broccoli...",
  "Find your picks!",
];

function MagnifierIcon({ className = "", ...props }) {
  // Simple SVG icon
  return (
    <svg
      className={className}
      width="28"
      height="28"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      aria-hidden="true"
      {...props}
    >
      <circle cx="11" cy="11" r="7" />
      <line x1="16.5" y1="16.5" x2="21" y2="21" />
    </svg>
  );
}

function Navbar() {
  const [placeholder, setPlaceholder] = useState('');
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [typedLength, setTypedLength] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false); // Used only on mobile
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    const currentText = animatedPlaceholders[currentPhrase];
    let typingInterval;

    if (!isDeleting && typedLength < currentText.length) {
      typingInterval = setTimeout(() => {
        setPlaceholder(currentText.substring(0, typedLength + 1));
        setTypedLength(typedLength + 1);
      }, 70);
    } else if (isDeleting && typedLength > 0) {
      typingInterval = setTimeout(() => {
        setPlaceholder(currentText.substring(0, typedLength - 1));
        setTypedLength(typedLength - 1);
      }, 40);
    } else if (!isDeleting && typedLength === currentText.length) {
      typingInterval = setTimeout(() => setIsDeleting(true), 1200);
    } else if (isDeleting && typedLength === 0) {
      setIsDeleting(false);
      setCurrentPhrase((prev) => (prev + 1) % animatedPlaceholders.length);
    }

    return () => clearTimeout(typingInterval);
  }, [typedLength, isDeleting, currentPhrase]);

  useEffect(() => {
    if (searchTerm.trim()) {
      // Filter products by name or any relevant field (case-insensitive)
      const lower = searchTerm.toLowerCase();
      setFilteredProducts(
        products.filter(
          (p) =>
            p.name.toLowerCase().includes(lower) ||
            (p.category && p.category.toLowerCase().includes(lower))
        )
      );
    } else {
      setFilteredProducts([]);
    }
  }, [searchTerm]);

  function handleFocus() {
    setSearchOpen(true);
  }
  function handleBlur() {
    setTimeout(() => setSearchOpen(false), 150); // Give time for suggestion clicks
  }
  function openSearchMobile() {
    setSearchOpen(true);
    setTimeout(() => {
      if (inputRef.current) inputRef.current.focus();
    }, 50);
  }
  function closeSearchMobile(e) {
    setSearchOpen(false);
  }
  function handleInputChange(e) {
    setSearchTerm(e.target.value);
  }
  function handleSuggestionClick(product) {
    window.location.href = `/details/${product.slug || product.id || product.name}`;
    setSearchOpen(false);
    setSearchTerm('');
  }

  // Only show suggestions if search is open (on mobile) or on desktop with input focus
  const showSuggestions = (searchOpen || window.innerWidth >= 640) && searchTerm && filteredProducts.length > 0;

  return (
    <header
      className="relative bg-white shadow"
      style={{ height: NAVBAR_HEIGHT, zIndex: 50 }}
    >
      <div
        className="max-w-7xl mx-auto flex items-center justify-between p-4 "
        style={{ minHeight: NAVBAR_HEIGHT }}
      >
        <Link
          to='/'
          className={`
            transition-opacity duration-200
            ${(searchOpen ? 'opacity-0 pointer-events-none' : 'opacity-100')}
            sm:opacity-100 sm:pointer-events-auto
          `}
        >
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold font-mono text-green-700 px-2 sm:px-3 py-0.5 bg-amber-400 rounded-full ">
            FreshCart.
          </h1>
        </Link>

        {/* Single unified search bar, works for all screen sizes */}
        {/* Hide unified search bar for desktop view */}
        <div className={`relative items-center flex-1 mx-4 max-w-md ${searchOpen ? 'flex' : 'hidden'} sm:hidden`}>
   
          <span className="text-gray-400 mr-2">
            <MagnifierIcon />
          </span>
          <input
            type="text"
            value={searchTerm}
            ref={inputRef}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleInputChange}
            placeholder={placeholder || " "}
            className="flex-1 px-3 py-2 border rounded-xl focus:outline-none focus:ring-0.5 focus:ring-green-400 shadow"
            style={{ minWidth: 0 }}
            autoComplete="off"
          />
          {/* Suggestions dropdown */}
          {searchTerm && (
            <div className="absolute top-full left-0 w-full bg-white border border-gray-200 mt-1 rounded shadow-lg z-40">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((prod) => (
                  <div
                    key={prod.id || prod.slug || prod.name}
                    className="px-3 py-2 hover:bg-amber-50 cursor-pointer flex items-center"
                    onMouseDown={() => handleSuggestionClick(prod)}
                  >
                    <img
                      src={prod.image || prod.img || ""}
                      alt={prod.name}
                      className="h-7 w-7 object-contain rounded mr-2"
                      style={{ background: "#f6f6fa" }}
                    />
                    <span className="text-gray-800">{prod.name}</span>
                  </div>
                ))
              ) : (
                <div className="px-3 py-2 text-gray-400">No matches found.</div>
              )}
            </div>
          )}
        </div>

        <button
          className="sm:hidden ml-2 p-2 rounded-full hover:bg-gray-100 transition"
          aria-label="Open search"
          onClick={openSearchMobile}
          style={{
            display: searchOpen ? 'none' : 'inline-block',
            background: 'transparent',
            border: 'none',
            outline: 'none',
            cursor: 'pointer',
          }}
        >
          <MagnifierIcon className="text-gray-500 " />
        </button>
      </div>

      {/* Mobile search overlay for close (no input duplication) */}
      {searchOpen && (
        <div
          className="fixed top-0 left-0 right-0 w-full h-full bg-[rgba(255,255,255,0.95)] z-50 flex flex-col items-center"
          onClick={closeSearchMobile}
        >
          <div className="w-full flex items-center px-4 pt-6 pb-2">
            <span className="text-gray-400 mr-2">
              <MagnifierIcon className=' ' />
            </span>
            <input
              ref={inputRef}        
              type="text"
              value={searchTerm}
              onChange={handleInputChange}
              placeholder={placeholder || " "}
              className="flex-1 px-3 py-2 border rounded-xl focus:outline-none focus:ring-0.5 focus:ring-green-400 shadow"
              onFocus={handleFocus}
              onBlur={handleBlur}
              autoFocus
              style={{ minWidth: 0 }}
              onClick={e => e.stopPropagation()}
              autoComplete="off"
            />
            <button
              className="ml-2 text-gray-500 px-2 font-bold text-xl hover:text-green-600"
              aria-label="Close search"
              onClick={e => {
                e.stopPropagation();
                setSearchOpen(false);
                setSearchTerm('');
              }}
              type="button"
            >
              &times;
            </button>
          </div>
          {/* Suggestions (same as main search bar, for mobile) */}
          {searchTerm && (
            <div className="w-full max-w-md mx-auto bg-white border border-gray-200 rounded shadow mt-1">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((prod) => (
                  <div
                    key={prod.id || prod.slug || prod.name}
                    className="px-3 py-2 hover:bg-amber-50 cursor-pointer flex items-center"
                    onMouseDown={() => handleSuggestionClick(prod)}
                  >
                    <img
                      src={prod.image || prod.img || ""}
                      alt={prod.name}
                      className="h-7 w-7 object-contain rounded mr-2"
                      style={{ background: "#f6f6fa" }}
                    />
                    <span className="text-gray-800">{prod.name}</span>
                  </div>
                ))
              ) : (
                <div className="px-3 py-2 text-gray-400">No matches found.</div>
              )}
            </div>
          )}
        </div>
      )}
    </header>
  );
}
export default Navbar