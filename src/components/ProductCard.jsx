import React from 'react'
import Products from '../product'

const ProductCard = () => {
  return (
    <div>
           {(() => {
             // Helper to shuffle array using Fisher-Yates algorithm
             function shuffle(array) {
               let currentIndex = array.length, randomIndex;
               // While there remain elements to shuffle...
               while (currentIndex !== 0) {
                 // Pick a remaining element...
                 randomIndex = Math.floor(Math.random() * currentIndex);
                 currentIndex--;
                 // And swap it with the current element.
                 [array[currentIndex], array[randomIndex]] = [
                   array[randomIndex], array[currentIndex]];
               }
               return array;
             }

             const productsShuffled = shuffle([...Products]).slice(0, 12);

             return (
               <section className="max-w-7xl mx-auto px-4 py-12" id="productDiv">
                 <h3 className="text-2xl font-semibold mb-6">Featured Products</h3>
                 <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
                   {productsShuffled.map((product, i) => (
                     <div
                       key={product.id || i}
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
             );
           })()}
    </div>
  )
}

export default ProductCard