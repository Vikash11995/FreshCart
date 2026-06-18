import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
// import { addToCart } from '../features/cart'
import products from '../product'

const Details = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const [details, setDetails] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [animateAdd, setAnimateAdd] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const findDetails = products.filter(product => product.slug === slug);
      if (findDetails.length > 0) {
        setDetails(findDetails[0]);
        setError(null);
      } else {
        setDetails(null);
        setError('Product not found.');
      }
    } catch (err) {
      setDetails(null);
      setError('An error occurred while fetching the product details.');
    }
  }, [slug]);

  const handleMinusBtn = () => {
    setQuantity(prev => (prev - 1) < 1 ? 1 : prev - 1);
  }

  const handlePlusBtn = () => {
    setQuantity(prev => prev + 1);
  }

  const handleAddCart = () => {
    try {
      if (!details) {
        setError('No product details available.');
        return;
      }
      dispatch(addToCart({
        productId: details.id,
        quantity: quantity,
      }));
      setAnimateAdd(true);
      setError(null);
    } catch (err) {
      setError('Could not add to cart. Please try again.');
    }
  }

  // Animation will reset itself after 600ms
  useEffect(() => {
    let timeout;
    if (animateAdd) {
      timeout = setTimeout(() => setAnimateAdd(false), 600);
    }
    return () => clearTimeout(timeout);
  }, [animateAdd]);

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center py-12">
        <h1 className="text-2xl font-bold text-red-500 mb-4">Sorry!</h1>
        <p className="text-lg">{error}</p>
      </div>
    );
  }

  if (details === null) {
    // Show loading spinner or fallback if needed
    return (
      <div className="flex justify-center items-center py-12">
        <span className="text-gray-400 text-lg">Loading...</span>
      </div>
    );
  }

  return (
    <div className=' '>
      <div className='grid md:grid-cols-2 gap-5 grid-cols-1  '>
        <div className='md:bg-transparent bg-transparent flex justify-center  p-4 '>
          <img src={details.image} alt={details.name} className='bg-full w-90 rounded-lg' onError={e => {e.target.onerror=null;e.target.src='/fallback.png'}} />
        </div>
        <div className='flex flex-col gap-5 px-2 py-3 items-center bg-gray-300/40 rounded-2xl m-3 mt-0 border'>
          <h1 className='text-2xl uppercase font-bold'>{details.name}</h1>
          <p className="md:text-lg text-gray-500  font-bold ">{`₹ ${details.price} / ${details.unit}`}</p>
          <div className='flex gap-5'>
            {/* {/* <div className='flex gap-2 justify-center items-center'>
              <button
                className='bg-gray-100 font-bold text-xl h-full w-10 flex justify-center items-center rounded-xl hover:bg-gray-300/70 hover:shadow-xl'
                onClick={handleMinusBtn}
              >-</button>
              <span className='bg-transparent font-bold h-full w-10 flex justify-center items-center text-xl '>{quantity}</span>
              <button
                className='bg-gray-100 font-bold h-full w-10 flex justify-center items-center rounded-xl text-xl hover:bg-gray-300/70 hover:shadow-xl'
                onClick={handlePlusBtn}
              >+</button>
            </div> */}
            {/* <div className="relative flex items-center">
              <button
                className={`text-white px-7 py-3 rounded-xl shadow-sm bg-slate-900 hover:bg-slate-900/90 shadow-zinc-400 hover:shadow-lg transition-transform duration-300 ${animateAdd ? "scale-110 shadow-lg ring-amber-100" : ""}`}
                style={{ outline: "none" }}
                onClick={handleAddCart}
                disabled={!details}
              >
                Add to cart
              </button>
              {/* Animated cart icon/emoji flying animation */}
              {/* {animateAdd && (
                <span
                  className="absolute -top-7 left-1/2 -translate-x-1/2 animate-cart-fly text-2xl pointer-events-none"
                  style={{
                    animation: 'cartFly 0.6s cubic-bezier(0.46, 0.03, 0.52, 0.96)'
                  }}
                >🛒</span>
              )} */}
              {/* <style>
                {`
                  @keyframes cartFly {
                    0% {
                      opacity: 0;
                      transform: translate(-50%, 20px) scale(0.6);
                    }
                    30% {
                      opacity: 1;
                      transform: translate(-50%, -10px) scale(1.1) rotate(-7deg);
                    }
                    70% {
                      opacity: 1;
                      transform: translate(-50%, -45px) scale(1.05) rotate(12deg);
                    }
                    100% {
                      opacity: 0;
                      transform: translate(-50%, -73px) scale(0.47) rotate(-9deg);
                    }
                  }
                `}
              </style> */}
            {/* </div> */} 
          </div> 
          {/* <p className='shadow-sm rounded-lg p-2'>{details.description}</p> */}
        </div>
      </div>
    </div>
  );
}

export default Details;