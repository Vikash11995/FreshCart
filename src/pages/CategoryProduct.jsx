import React, { useState, useEffect } from 'react';
import productsData from '../product';

// Category and utility definitions remain the same
const categories = [
  {
    tittle: "All",
    category: "All",
    image:
      "https://cdn.zeptonow.com/production/tr:w-90,ar-120-120,pr-true,f-auto,q-40/cms/sub_category/102e9688-c220-4a0e-bc35-0f0b16de6ad1.png",
    slug: "vegetables",
  },
  {
    tittle: "Vegetables",
    category: "Vegetables",
    image:
      "https://cdn.zeptonow.com/production/tr:w-90,ar-160-161,pr-true,f-auto,q-40/cms/sub_category/694c07e0-542b-49db-a596-b1f4f4935342.png",
    slug: "vegetables",
  },
  {
    tittle: "Fruits",
    category: "Fruits",
    image:
      "https://cdn.zeptonow.com/production/tr:w-90,ar-160-161,pr-true,f-auto,q-40/cms/sub_category/7e51d0f6-ee57-42f3-98f9-945033ad3e5f.png",
    slug: "fruits",
  },
  {
    tittle: "Herbs & Seasonings",
    category: "Herbs & Seasonings",
    image:
      "https://cdn.zeptonow.com/production/tr:w-90,ar-160-161,pr-true,f-auto,q-40/cms/sub_category/63d60637-1717-4eb3-9df3-a9bfb6f05d49.png",
    slug: "herbs",
  },
  {
    tittle: "Dairy & Eggs",
    category: "Dairy & Eggs",
    image:
      "https://res.cloudinary.com/dr9al4lhy/image/upload/e_background_removal/b_rgb:FFFFFF/f_png/v1765979182/474e6e58-1894-4378-86f1-168cc7266d1a_brutr2.png",
    slug: "Dairy",
  },
  {
    tittle: "Meat & Eggs",
    category: "Meat & Eggs",
    image:
      "https://res.cloudinary.com/dr9al4lhy/image/upload/v1765735099/1237afd6-40bf-4942-a266-25f23025e86c_v22rg1.png",
    slug: "Meat-Eggs",
  },
];

const slugToCategory = {
  "vegetables": "Vegetables",
  "fruits": "Fruits",
  "herbs": "Herbs",
  "herbs-&-seasonings": "Herbs & Seasonings",
  "seasonal": "Seasonal",
  "meat-eggs": "Meat & Eggs",
};

function MobileCategoryNav({ categories, selectedCategory, handleCategoryClick }) {
  // This navigation bar is now sticky below the navbar on mobile
  return (
    <nav
      className={`
        flex
        md:hidden
        w-full
        overflow-x-auto
        gap-2
        px-2
        py-2
        sticky
        top-[56px]  // Assume a 56px navbar height on mobile
        left-0
        bg-white
        shadow
        h-20
        z-20
        justify-start
        border-t border-amber-100
        no-scrollbar
      `}
      style={{
        WebkitOverflowScrolling: "touch",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
      <div className="flex gap-3 hide-scrollbar w-full px-1">
        {categories.map((cat, idx) => (
          <button
            type="button"
            key={cat.category + idx}
            title={cat.category}
            className={`flex flex-col items-center gap-1 shrink-0 outline-none min-w-[60px]
              ${selectedCategory === cat.category ? "font-semibold text-amber-600" : "text-gray-700"}`}
            style={{ background: "none", border: "none" }}
            onClick={() => handleCategoryClick(cat)}
          >
            <div className={`rounded-full bg-amber-200/40 flex items-center justify-center w-12 h-12 shadow hover:bg-amber-200 active:scale-95 transition
              ${selectedCategory === cat.category ? "ring-2 ring-amber-400" : ""}`}>
              <img
                src={cat.image}
                alt={`${cat.category} icon`}
                className="w-8 h-8 object-contain"
              />
            </div>
            <span className="text-[11px] leading-3 font-medium text-center">
              {cat.category.length > 11
                ? cat.category.slice(0, 11) + "…"
                : cat.category}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
}

const CategoryProduct = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Scroll to top on mount
  useEffect(() => {
    // For browsers, this should scroll the document to top
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  // Filtering logic unchanged
  const filteredProducts = selectedCategory === "All"
    ? productsData
    : productsData.filter((prod) => {
        if (selectedCategory === "Herbs & Seasonings") {
          return (
            prod.category === "Herbs" ||
            prod.category === "herbs" ||
            prod.category === "Seasonings" ||
            prod.category === "Herbs & Seasonings"
          );
        } 
        else if (selectedCategory === "Meat & Eggs") {
          return (
            prod.category === "Meat" ||
            prod.category === "Meat & Eggs" ||
            prod.category === "Eggs"
          );
        }
        else if (selectedCategory === "Dairy & Eggs") {
          return (
            prod.category === "Dairy" ||
            prod.category === "Dairy & Eggs" ||
            prod.category === "Eggs"
          );
        }
         else if (selectedCategory === "Vegetables") {
          return prod.category === "Vegetables";
        }
         else {
          return prod.category === selectedCategory;
        }
      });

  const handleCategoryClick = (cat) => {
    setSelectedCategory(cat.category);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-[500px] w-full">
      {/* Sidebar for large screens */}
      <aside
        className="
          hidden
          md:flex
          w-64 min-w-[200px] max-w-xs bg-white shadow-lg  p-6 flex-col gap-4 relative top-0 h-auto
        "
      >
        <h2 className="text-lg font-semibold mb-4">Categories</h2>
        {categories.map((cat, idx) => (
          <button
            type="button"
            key={cat.category + idx}
            onClick={() => handleCategoryClick(cat)}
            className={`flex items-center gap-3 mb-2 p-2 rounded-lg hover:bg-amber-100 cursor-pointer transition w-full text-left
              ${selectedCategory === cat.category ? "bg-amber-100 font-semibold shadow-md" : ""}`}
            title={cat.category}
          >
            <img
              src={cat.image}
              alt={`${cat.category} image`}
              className="w-10 h-10 object-contain"
            />
            <span className="font-medium text-gray-700">{cat.category}</span>
          </button>
        ))}
      </aside>

      {/* Mobile horizontal bar moved to just below the navbar */}
      <div className="md:hidden w-full z-20">
        <MobileCategoryNav
          categories={categories}
          selectedCategory={selectedCategory}
          handleCategoryClick={handleCategoryClick}
        />
      </div>

      {/* Main Content — padding-top for navbar and mobile filter bar */}
      <section
        className="
          flex-1
          px-2
          md:px-8
          py-6
          bg-amber-50
          flex
          flex-col
          items-stretch
          justify-start
          relative
          w-full
          min-h-screen
        "
        style={{
          // On mobile, pad for navbar (56px) + mobile cat nav (80px)
          paddingTop: "calc(env(safe-area-inset-top, 0px) + 0.5rem)", // 56px(navbar)+80px(nav)=136px ~8.5rem
          // On desktop, extra padding is just for the header offset (unchanged)
          paddingBottom: "1.5rem",
        }}
      >
        <style>
          {`
            .no-scrollbar::-webkit-scrollbar {
              display: none;
            }
            .no-scrollbar {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}
        </style>
        <div className="w-full max-h-screen overflow-auto no-scrollbar pb-2">
          {filteredProducts.length === 0 ? (
            <div className="text-center text-gray-400 text-base md:text-lg opacity-60 pt-10 md:pt-14">
              No products found in <b>{selectedCategory}</b> category.
            </div>
          ) : (
            <section className="max-w-7xl mx-auto w-full" id="productDiv">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6">
                {filteredProducts.map((product, i) => (
                  <div
                    key={product.id || i}
                    className="bg-white rounded-xl shadow hover:shadow-lg p-2 md:p-4 flex flex-col items-center"
                  >
                    <div className="w-full aspect-square flex items-center justify-center bg-gray-100 rounded-lg mb-3 md:mb-4 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="object-contain w-full md:h-full"
                      />
                    </div>
                    <h4 className="font-medium text-xs md:text-base text-center line-clamp-2">{product.name}</h4>
                    <p className="text-xs md:text-sm text-gray-500 text-center">{`₹ ${product.price} / ${product.unit}`}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </section>
    </div>
  );
};

export default CategoryProduct;