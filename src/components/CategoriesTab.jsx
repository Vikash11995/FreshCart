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

const CategoriesTab = () => {
  return (
    <div>
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
              <Link to={`/${cat.slug}`} key={cat.category + idx}>
                <div
                  className="shrink-0 bg-white p-6 rounded-xl shadow hover:shadow-lg text-center cursor-pointer md:w-auto w-30 h-36"
                  title={cat.category}
                >
                  <div className="flex justify-center flex-col items-center gap-1">
                    <div className="bg-transparent flex justify-center items-center">
                      <img
                        src={cat.image}
                        alt={`${cat.category} image`}
                        className="w-18"
                      />
                    </div>
                    <p className="font-medium">{cat.category}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoriesTab;