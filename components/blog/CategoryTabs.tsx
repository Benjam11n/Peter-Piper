"use client";

import { useState } from "react";

const categories = [
  "All",
  "Cultivation",
  "Recipes",
  "Education",
  "Industry News",
];

export default function CategoryTabs() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="mb-12">
      <div className="flex flex-wrap gap-4 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className="relative"
          >
            <span
              className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "text-white"
                  : "text-gray-600 hover:text-red-600"
              }`}
            >
              {category}
            </span>
            {activeCategory === category && (
              <div className="absolute inset-0 bg-red-600 rounded-full -z-10" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
