const products = [
    // --- VEGETABLES ---
    {
      id: "v1",
      name: "Safed Petha",
      price: 45,
      unit: "kg",
      category: "Vegetables",
      image: "https://www.bbassets.com/media/uploads/p/l/10000010-3_3-fresho-ash-gourd.jpg"
    },
    {
      id: "v2",
      name: "Amla",
      price: 20,
      unit: "250g",
      category: "organic",
      image: "https://www.bbassets.com/media/uploads/p/m/10000332_17-fresho-amla.jpg?tr=w-154,q-80"
    },
    {
      id: "v3",
      name: "Raw Haldi",
      price: 30,
      unit: "250g",
      category: "organic",
      image: "https://www.bbassets.com/media/uploads/p/l/40004372_16-fresho-turmeric-fresh.jpg"
    },
    {
      id: "v4",
      name: "Sweet Potato",
      price: 40,
      unit: "500g",
      category: "Vegetables",
      image: "https://www.bbassets.com/media/uploads/p/m/10000194_15-fresho-sweet-potato.jpg?tr=w-154,q-80"
    },
    {
      id: "v5",
      name: "Onion",
      price: 40,
      unit: "kg",
      category: "Vegetables",
      image: "https://www.bbassets.com/media/uploads/p/m/10000149_15-fresho-onion.jpg?tr=w-154,q-80"
    },
    {
      id: "v6",
      name: "Potato",
      price: 30,
      unit: "kg",
      category: "Vegetables",
      image: "https://www.bbassets.com/media/uploads/p/m/40048457_20-fresho-potato-new-crop.jpg?tr=w-154,q-80"
    },
    {
      id: "v7",
      name: "Mushroom",
      price: 50,
      unit: "packet",
      category: "organic",
      image: "https://www.bbassets.com/media/uploads/p/l/10000273_18-fresho-mushrooms-button.jpg"
    },
    {
      id: "v8",
      name: "Broccoli",
      price: 60,
      unit: "500g",
      category: "vegetables",
      image: "https://www.bbassets.com/media/uploads/p/l/10000062_25-fresho-broccoli.jpg"
    },
  
    // --- SAAG / LEAFY GREENS ---
    {
      id: "s1",
      name: "Palak",
      price: 25,
      unit: "bunch",
      category: "herbs",
      image: "https://www.bbassets.com/media/uploads/p/m/40050066_5-fresho-palak-organically-grown.jpg?tr=w-154,q-80"
    },
    {
      id: "s2",
      name: "Methi",
      price: 25,
      unit: "bunch",
      category: "herbs",
      image: "https://www.bbassets.com/media/uploads/p/m/10000112_22-fresho-methiventhaya-keerai-cleaned-without-roots.jpg?tr=w-154,q-80"
    },
  
    // --- FRUITS ---
    {
      id: "f1",
      name: "Apple (Kinnaur)",
      price: 190,
      unit: "kg",
      category: "Fruits",
      image: "https://www.bbassets.com/media/uploads/p/m/40033821_12-fresho-apple-kinnaur.jpg?tr=w-154,q-80"
    },
    {
      id: "f2",
      name: "Banana",
      price: 70,
      unit: "dozen",
      category: "Fruits",
      image: "https://www.bbassets.com/media/uploads/p/m/10000027_32-fresho-banana-robusta.jpg?tr=w-154,q-80"
    },
    {
      id: "f3",
      name: "Dragon Fruit",
      price: 85,
      unit: "piece",
      category: "Fruits",
      image: "https://www.bbassets.com/media/uploads/p/l/40008982_17-fresho-dragon-fruit.jpg"
    },
    {
      id: "f4",
      name: "Pomegranate",
      price: 240,
      unit: "kg",
      category: "Fruits",
      image: "https://cdn.zeptonow.com/production/tr:w-403,ar-1024-1024,pr-true,f-auto,q-40,dpr-2/cms/product_variant/de40eb0f-0c4c-4356-9813-321eb312eca1.jpeg"
    },
    {
      id: "f5",
      name: "Chiku",
      price: 70,
      unit: "500g",
      category: "Fruits",
      image: "https://cdn.zeptonow.com/production/tr:w-403,ar-3000-3000,pr-true,f-auto,q-40,dpr-2/cms/product_variant/9156c8a0-e9a3-4f54-a27c-2fc874db0f1f.jpeg"
    },
    {
      id: "f6",
      name: "Guava",
      price: 120,
      unit: "kg",
      category: "Fruits",
      image: "https://cdn.zeptonow.com/production/tr:w-403,ar-3000-3000,pr-true,f-auto,q-40,dpr-2/cms/product_variant/85ea6516-de09-455a-a332-cedcada09588.jpeg"
    },
    {
      id: "f7",
      name: "Desi Guava",
      price: 80,
      unit: "kg",
      category: "Fruits",
      image: "https://cdn.zeptonow.com/production/tr:w-403,ar-3000-3000,pr-true,f-auto,q-40,dpr-2/cms/product_variant/083aa85c-d5cc-4513-9c9f-fe81805157a5.jpeg"
    },
    {
      id: "f8",
      name: "Sarifa",
      price: 140,
      unit: "kg",
      category: "Fruits",
      image: "https://res.cloudinary.com/dr9al4lhy/image/upload/c_crop,ar_1:1/v1765947215/navbharat-times-1718704164199_rdlgc6.webp"
    },
    {
      id: "f9",
      name: "Kiwi",
      price: 145,
      unit: "4 pcs",
      category: "Fruits",
      image: "https://cdn.zeptonow.com/production/tr:w-403,ar-3000-3000,pr-true,f-auto,q-40,dpr-2/cms/product_variant/fb069e9b-7616-4a89-b363-a292123554c6.jpeg"
    },
    {
      id: "f10",
      name: "Mosambi",
      price: 80,
      unit: "kg",
      category: "Fruits",
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/98a70607-18d3-4cba-87cf-0193ef733730.png"
    },
    {
      id: "f11",
      name: "Orange",
      price: 120,
      unit: "kg",
      category: "Fruits",
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/d4cc2986-4fde-4435-bd97-1e6f8730d5f6.png"
    },
  
    {
      id: "f12",
      name: "Apple",
      price: 150,
      unit: "kg",
      category: "Fruits",
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/6cb3350f-2f86-4c56-8795-f307252c1e79.png"
    },
  
    {
      id: "f13",
      name: "Papaya",
      price: 65,
      unit: "piece",
      category: "Fruits",
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/60cd73b6-dd4a-4814-a9aa-4439cc710215.png"
    },
  
    {
      id: "f14",
      name: "Coconut Water",
      price: 80,
      unit: "piece",
      category: "Fruits",
      image: "https://res.cloudinary.com/dr9al4lhy/image/upload/c_crop,ar_1:1/v1765947215/a-glass-of-coconut-water-with-green-coconut-on-a-white-background_b6bsm5.webp"
    },
  
    // --- DAIRY & OTHERS ---
    {
      id: "d1",
      name: "Dairy Paneer",
      price: 80,
      unit: "250g",
      category: "Dairy",
      image: "https://res.cloudinary.com/dr9al4lhy/image/upload/v1765894932/360_F_632649552_4Gi6jOlnbDllG1qyjKo53lzdFDJNDfhq_stjmfx.jpg"
    },
    {
      id: "d2",
      name: "White Peas",
      price: 30,
      unit: "250g",
      category: "Dairy",
      image: "https://res.cloudinary.com/dr9al4lhy/image/upload/c_crop,ar_1:1/v1765947758/bowl-of-dried-peas-on-white-background-free-photo_xnnuwd.webp"
    },
    {
      id: "d3",
      name: "Egg Crate",
      price: 300,
      unit: "30 eggs",
      category: "Eggs",
      image: "https://www.bbassets.com/media/uploads/p/m/40313518_1-naatis-mix-combo-eggs.jpg?tr=w-154,q-80"
    },
  
    // --- FROZEN ---
    {
      id: "fz1",
      name: "Frozen Peas",
      price: 120,
      unit: "kg",
      category: "Frozen",
      image: "https://imgs.search.brave.com/f14E-JnjFBS6rAE9Rm6kEN0TF79zU0_W7gM9wkPfYy0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cy4x/MjNyZi5jb20vNDUw/d20vY29naXBpeC9j/b2dpcGl4MTAxMC9j/b2dpcGl4MTAxMDAw/MTQ0LzgxMzIzMTYt/ZnJvemVuLXBlYXMt/b24tYS1wbGF0ZS5q/cGc_dmVyPTY"
    },
    {
      id: "fz2",
      name: "Frozen Corn",
      price: 130,
      unit: "kg",
      category: "Frozen",
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/99c15d2f-06ab-47a9-8f6c-96675195d51f.png"
    }
  ];
  
export default products;