import React from 'react'
import { Link } from 'react-router';

const categories = [
  {
    category: "Vegetables",
    image:
      "https://cdn.zeptonow.com/production/tr:w-90,ar-160-161,pr-true,f-auto,q-40/cms/sub_category/694c07e0-542b-49db-a596-b1f4f4935342.png",
    slug: "vegetables",
  },
  {
    category: "Fruits",
    image:
      "https://cdn.zeptonow.com/production/tr:w-90,ar-160-161,pr-true,f-auto,q-40/cms/sub_category/7e51d0f6-ee57-42f3-98f9-945033ad3e5f.png",
    slug: "fruits",
  },
  {
    category: "Herbs",
    image:
      "https://cdn.zeptonow.com/production/tr:w-90,ar-160-161,pr-true,f-auto,q-40/cms/sub_category/63d60637-1717-4eb3-9df3-a9bfb6f05d49.png",
    slug: "herbs",
  },
  {
    category: "Organic",
    image:
      "https://cdn.zeptonow.com/production/tr:w-90,ar-480-480,pr-true,f-auto,q-40/cms/sub_category/8eaac110-0f14-47d3-b986-b024f107aba3.png",
    slug: "organic",
  },
  {
    category: "Seasonal",
    image:
      "https://cdn.zeptonow.com/production/tr:w-90,ar-192-192,pr-true,f-auto,q-40/cms/sub_category/8aeb735f-3e05-4556-8dba-63c890d0fc0a.png",
    slug: "seasonal",
  },
  {
    category: "Meat & Eggs",
    image:
      "https://res.cloudinary.com/dr9al4lhy/image/upload/v1765735099/1237afd6-40bf-4942-a266-25f23025e86c_v22rg1.png",
    slug: "meat-eggs",
  },
];

const MOBILE_NAV_HEIGHT = 112; // px, tailwind h-28, used for offset

const CategoryProduct = () => {
  return (
    <div
      className="flex flex-col md:flex-row min-h-[500px] mb-2 w-full"
    >
      {/* Sidebar for large screens */}
      <aside
        className="
          hidden
          md:flex
          w-64 min-w-[200px] max-w-xs bg-white shadow-lg  p-6 flex-col gap-4 relative top-0 h-fit
        "
      >
        <h2 className="text-lg font-semibold mb-4">Categories</h2>
        {categories.map((cat, idx) => (
          <Link to={`/${cat.slug}`} key={cat.category + idx}>
            <div
              className="flex items-center gap-3 mb-2 p-2 rounded-lg hover:bg-amber-100 cursor-pointer transition"
              title={cat.category}
            >
              <img
                src={cat.image}
                alt={`${cat.category} image`}
                className="w-10 h-10 object-contain"
              />
              <span className="font-medium text-gray-700">{cat.category}</span>
            </div>
          </Link>
        ))}
      </aside>
      {/* Mobile horizontal bar */}
      <nav
        className="
          flex
          md:hidden
          w-full
          overflow-x-auto
          gap-2
          px-3
          py-3
          sticky
          top-0
          justify-center
          bg-white
          shadow-sm
          h-28
          z-30
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
        <div className="flex gap-3 hide-scrollbar w-full">
          {categories.map((cat, idx) => (
            <Link
              to={`/${cat.slug}`}
              key={cat.category + idx}
              title={cat.category}
              className="flex flex-col items-center gap-1 shrink-0"
            >
              <div className="rounded-full bg-amber-200/40 flex items-center justify-center w-14 h-14 shadow hover:bg-amber-200 active:scale-95 transition">
                <img
                  src={cat.image}
                  alt={`${cat.category} icon`}
                  className="w-10 h-10 object-contain"
                />
              </div>
              <span className="text-xs font-medium text-gray-700">{cat.category.split(' ')[0]}</span>
            </Link>
          ))}
        </div>
      </nav>
      {/* Main Content with top padding for mobile */}
      <section
        className="
          flex-1
          px-4
          md:px-8
          py-8
          md:py-12
          bg-amber-50
          flex
          items-center
          justify-center
          relative
          w-full
        "
        style={{
          paddingTop: `max(${MOBILE_NAV_HEIGHT}px, env(safe-area-inset-top))`,
        }}
      >
        <div className="text-gray-500 text-xl italic opacity-50 select-none text-center md:relative md:top-0"
          style={{
            zIndex: 0,
            marginTop: 0,
            // Remove mobile overlap: add margin-top only on mobile
            // but no need because of paddingTop above
          }}>
          <div className="flex flex-col items-center gap-1">
            <span className="block mb-2">Please select a category tab above to view products!</span>
            <svg width="48" height="48" className="mx-auto animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
            <span className="block mt-2 text-sm text-gray-400">(Tap a category to see products)</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoryProduct;