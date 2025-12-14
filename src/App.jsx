import React, { useState, useEffect, useRef } from "react";
import { CiApple } from "react-icons/ci";
import { FaShippingFast } from "react-icons/fa";
import { BsArrowReturnLeft } from "react-icons/bs";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

const categories = [
  {
    category: "Vegetables",
    image:
      "https://cdn.zeptonow.com/production/tr:w-90,ar-160-161,pr-true,f-auto,q-40/cms/sub_category/694c07e0-542b-49db-a596-b1f4f4935342.png",
  },
  {
    category: "Fruits",
    image:
      "https://cdn.zeptonow.com/production/tr:w-90,ar-160-161,pr-true,f-auto,q-40/cms/sub_category/7e51d0f6-ee57-42f3-98f9-945033ad3e5f.png",
  },
  {
    category: "Herbs",
    image:
      "https://cdn.zeptonow.com/production/tr:w-90,ar-160-161,pr-true,f-auto,q-40/cms/sub_category/63d60637-1717-4eb3-9df3-a9bfb6f05d49.png",
  },
  {
    category: "Organic",
    image:
      "https://cdn.zeptonow.com/production/tr:w-90,ar-480-480,pr-true,f-auto,q-40/cms/sub_category/8eaac110-0f14-47d3-b986-b024f107aba3.png",
  },
  {
    category: "Seasonal",
    image:
      "https://cdn.zeptonow.com/production/tr:w-90,ar-192-192,pr-true,f-auto,q-40/cms/sub_category/8aeb735f-3e05-4556-8dba-63c890d0fc0a.png",
  },
  {
    category: "Meat & Eggs",
    image:
      "https://res.cloudinary.com/dr9al4lhy/image/upload/v1765735099/1237afd6-40bf-4942-a266-25f23025e86c_v22rg1.png",
  },
];

const reasons = [
  { title: "Farm Fresh", icon: CiApple },
  { title: "Fast Delivery", icon: FaShippingFast },
  { title: "Quality Checked", icon: AiOutlineSafetyCertificate },
  { title: "Easy Returns", icon: BsArrowReturnLeft },
];

// VideoWithSkeleton component for hero video
function VideoWithSkeleton({ src, className }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="w-full h-56 sm:h-72 md:h-80 lg:h-96 relative overflow-hidden  rounded-2xl flex items-center justify-center">
      {!loaded && (
        <div
          className="absolute inset-0 flex items-center justify-center z-10"
          aria-label="Loading video"
        >
          {/* Skeleton shimmer */}
          <div className="w-full h-full bg-gray-200 rounded-2xl animate-pulse flex items-center justify-center">
            <div className="w-20 h-20 bg-gray-300 rounded-full animate-pulse" />
          </div>
        </div>
      )}
      <video
        src={src}
        autoPlay
        muted
        loop
        onCanPlayThrough={() => setLoaded(true)}
        className={
          `${className} w-full h-full object-cover rounded-2xl drop-shadow-sm ` +
          (!loaded ? "invisible" : "")
        }
        style={{ transition: "visibility 0.1s" }}
      ></video>
    </div>
  );
}

// Navbar component with show/hide on scroll down/up
function Navbar() {
  const [show, setShow] = useState(true);
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY < 16) {
            setShow(true);
            lastScrollY.current = window.scrollY;
            ticking = false;
            return;
          }
          if (window.scrollY > lastScrollY.current) {
            // Scrolling down
            setShow(false);
          } else if (window.scrollY < lastScrollY.current) {
            // Scrolling up
            setShow(true);
          }
          lastScrollY.current = window.scrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white shadow transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{ willChange: "transform" }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold font-mono text-green-700 px-2 sm:px-3 py-0.5 bg-amber-400 rounded-full ">
          FreshCart.
        </h1>
        <input
          type="text"
          placeholder="Search fruits & vegetables"
          className="hidden md:block w-1/3 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>
    </header>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#efeae37a] text-gray-800 ">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center px-4 py-16">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Fresh Fruits & Vegetables
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Farm fresh produce delivered straight to your door every day.
          </p>
          <div className="flex gap-4">
            <button className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700">
              Shop Now
            </button>
            <button className="border border-green-600 text-green-700 px-6 py-3 rounded-full hover:bg-green-50">
             <a href="#productDiv"> View Deals</a>
            </button>
          </div>
        </div>
        <VideoWithSkeleton src="https://res.cloudinary.com/dr9al4lhy/video/upload/v1765650468/274912_ewshhr.mp4" />
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h3 className="text-2xl font-semibold mb-6">Categories</h3>
        <div 
          className="
            flex gap-6 
            overflow-x-auto 
            md:grid md:grid-cols-6 md:gap-6 md:overflow-visible
            pb-4 md:pb-0
          "
          style={{
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          
          <style>
            {`
              .hide-scrollbar::-webkit-scrollbar {
                display: none;
              }
            `}
          </style>
          <div className="hide-scrollbar contents">
            {categories.map((cat, idx) => (
              <div
                key={cat.category + idx}
                className="shrink-0 bg-white p-6 rounded-xl shadow hover:shadow-lg text-center cursor-pointer md:w-auto w-30 h-36"
                title={cat.category}
              >
                <div className="flex justify-center flex-col items-center gap-1">
                  <div className="bg-transparent  flex justify-center items-center">
                    <img
                      src={cat.image}
                      alt={`${cat.category} image`}
                      className="w-18"
                      
                    />
                  </div>
                  <p className="font-medium ">{cat.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="max-w-7xl mx-auto px-4 py-12" id="productDiv">
        <h3 className="text-2xl font-semibold mb-6">Featured Products</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow hover:shadow-lg p-4"
            >
              <div className="h-32 bg-green-100 rounded-lg mb-4" />
              <h4 className="font-semibold">Fresh Tomato</h4>
              <p className="text-sm text-gray-500">₹40 / kg</p>
              {/* <button className="mt-3 w-full bg-green-600 text-white py-2 rounded-full hover:bg-green-700">
                Add to Cart
              </button> */}
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-green-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Why Choose Us
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {reasons.map((reason, idx) => (
              <div
                key={reason.title + idx}
                className="bg-white p-6 rounded-xl shadow text-center"
              >
                <div className="w-12 h-12 mx-auto mb-3 bg-green-100 rounded-full flex items-center justify-center">
                 <reason.icon size={28} color="green"/>
                </div>
                <p className="font-medium">{reason.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-700 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-3 gap-16">
          <div>
            <h4 className="font-bold text-lg mb-2">FreshCart</h4>
            <p className="text-sm">Fresh fruits & vegetables </p><p className="text-gray-200/80">Delivered daily.</p> 
          </div>
          <div className="">
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1 text-sm">
              <li>Home</li>
              <li>Shop</li>
              <li>About</li>
              <li><a href="tel:+917678325879">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Contact</h4>
            <p className="text-sm">vikashyadav11995@gmail.com</p>
            <p className="text-sm">+91 76783 25879</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
