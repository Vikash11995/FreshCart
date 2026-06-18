import React from 'react'
import { useNavigate } from 'react-router-dom'
import Products from '../product'

const ProductCard = () => {
  const navigate = useNavigate();

  // Helper to shuffle array using Fisher-Yates algorithm
  function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }

  const productsShuffled = shuffle([...Products]).slice(0, 12);

  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 py-12" id="productDiv">
        <h3 className="text-2xl font-semibold mb-6">Featured Products</h3>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
          {productsShuffled.map((product, i) => (
            <div
              key={product.id || i}
              className="bg-white rounded-xl shadow hover:shadow-lg p-4 flex flex-col items-center cursor-pointer transition-transform"
              onClick={() => navigate(`/details/${product.slug}`)}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  navigate(`/details/${product.slug}`);
                }
              }}
              role="button"
              aria-label={`View details for ${product.name}`}
            >
              <div className="h-30 md:h-32 w-full flex items-center justify-center bg-gray-100 rounded-lg mb-4 overflow-hidden pointer-events-none">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover  w-full "
                  draggable={false}
                />
              </div>
              <h4 className="font-semibold text-center">{product.name}</h4>
              <p className="text-sm text-gray-500 text-center">{`₹ ${product.price} / ${product.unit}`}</p>
              <button
                className="mt-3 w-full bg-green-600 text-white py-2 rounded-full hover:bg-green-700 cursor-pointer pointer-events-none"
                tabIndex={-1}
                aria-hidden="true"
                type="button"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default ProductCard