import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router'

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

  // If input is focused, search is open (for mobile overlay only)
  function handleFocus() {
    setSearchOpen(true);
  }
  function handleBlur() {
    setSearchOpen(false);
  }
  function openSearchMobile() {
    setSearchOpen(true);
    setTimeout(() => {
      if (inputRef.current) inputRef.current.focus();
    }, 50);
  }
  function closeSearchMobile(e) {
    // Optional: Only close if clicking outside input in overlay
    setSearchOpen(false);
  }

  return (
    <header
      className="relative bg-white shadow"
      style={{ height: NAVBAR_HEIGHT, zIndex: 50 }}
    >
      <div
        className="max-w-7xl mx-auto flex items-center justify-between p-4"
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

      {/* Mobile search overlay */}
      {searchOpen && (
        <div className=" fixed top-0 left-0 right-0 w-full h-full bg-[rgba(255,255,255,0.95)] z-50 flex flex-col items-center"
          onClick={closeSearchMobile}
        >
          <div className="w-full flex items-center px-4 pt-6 pb-2">
            <span className="text-gray-400 mr-2">
              <MagnifierIcon className=' ' />
            </span>
            <input
              ref={inputRef}
              type="text"
              placeholder={placeholder || " "}
              className="flex-1 px-3 py-2 border rounded-xl focus:outline-none focus:ring-0.5 focus:ring-green-400 shadow"
              onFocus={handleFocus}
              onBlur={handleBlur}
              autoFocus
              style={{ minWidth: 0 }}
              onClick={e => e.stopPropagation()}
            />
            <button
              className="ml-2 text-gray-500 px-2 font-bold text-xl hover:text-green-600"
              aria-label="Close search"
              onClick={e => {
                e.stopPropagation();
                setSearchOpen(false);
              }}
              type="button"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
export default Navbar