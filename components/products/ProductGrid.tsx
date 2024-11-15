"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Aji Charapita",
    origin: "Peruvian Amazon",
    price: 129.99,
    description: 'Known as "Mother of all Chilis"',
    category: "Rare",
    heatLevel: "Medium",
    stats: [
      { attribute: "Heat", value: 6 },
      { attribute: "Smokiness", value: 4 },
      { attribute: "Sweetness", value: 7 },
      { attribute: "Citrus", value: 8 },
      { attribute: "Earthiness", value: 3 },
    ],
  },
  {
    id: 2,
    name: "Black Cobra",
    origin: "Northern Thailand",
    price: 89.99,
    description: "Rare and exceptionally spicy",
    category: "Super Hot",
    heatLevel: "Extreme",
    stats: [
      { attribute: "Heat", value: 9 },
      { attribute: "Smokiness", value: 7 },
      { attribute: "Sweetness", value: 2 },
      { attribute: "Citrus", value: 1 },
      { attribute: "Earthiness", value: 8 },
    ],
  },
  // Add more products as needed
];

const ProductGrid = () => {
  const [filteredProducts] = useState(products);

  return (
    <div className="lg:col-span-3">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
