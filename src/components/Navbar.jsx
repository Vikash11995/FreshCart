import React from 'react'
import {Link} from 'react-router'

const NAVBAR_HEIGHT = 64; // px; for consistent spacing if needed elsewhere

function Navbar() {
  return (
    <header
      className="relative bg-white shadow "
      style={{ height: NAVBAR_HEIGHT, zIndex: 50 }}
    >
      <div
        className="max-w-7xl mx-auto flex items-center justify-between p-4"
        style={{ minHeight: NAVBAR_HEIGHT }}
      >
     <Link to='/'>
     <h1 className="text-lg sm:text-xl md:text-2xl font-bold font-mono text-green-700 px-2 sm:px-3 py-0.5 bg-amber-400 rounded-full ">
          FreshCart.
        </h1>
     </Link>
        <input
          type="text"
          placeholder="Search fruits & vegetables"
          className="hidden md:block w-1/3 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>
    </header>
  );
}
export default Navbar