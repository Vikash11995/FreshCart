import React, { useState, useEffect, useRef } from "react";
import { CiApple } from "react-icons/ci";
import { FaShippingFast } from "react-icons/fa";
import { BsArrowReturnLeft } from "react-icons/bs";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import CategoriesTab from "../components/CategoriesTab";
import ProductCard from "../components/ProductCard";



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

export default function Home() {
  return (
    <div >

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
     <CategoriesTab/>

      {/* Products */}
 <ProductCard/>

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
     
    </div>
  );
}
