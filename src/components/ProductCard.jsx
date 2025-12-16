import React from 'react'
import Products from '../product'

const ProductCard = () => {
  return (
    <div>
           <section className="max-w-7xl mx-auto px-4 py-12" id="productDiv">
        <h3 className="text-2xl font-semibold mb-6">Featured Products</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {Products.map((product, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow hover:shadow-lg p-4 flex flex-col items-center"
            >
              <div className="h-30 md:h-32 w-full flex items-center justify-center bg-gray-100 rounded-lg mb-4 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover  w-full "
                />
              </div>
              <h4 className="font-semibold text-center">{product.name}</h4>
              <p className="text-sm text-gray-500 text-center">{`₹ ${product.price} / ${product.unit}`}</p>
              {/* <button className="mt-3 w-full bg-green-600 text-white py-2 rounded-full hover:bg-green-700">
                Add to Cart
              </button> */}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default ProductCard