"use client";

import { useState } from "react";

const filters = {
  categories: ["All", "Rare", "Super Hot", "Sweet", "Smoky"],
  heatLevels: ["All", "Mild", "Medium", "Hot", "Extreme"],
  priceRanges: ["All", "Under $50", "$50-$100", "Over $100"],
};

export default function ProductFilters() {
  const [activeFilters, setActiveFilters] = useState({
    category: "All",
    heatLevel: "All",
    priceRange: "All",
  });

  const handleFilterChange = (filterType: string, value: string) => {
    setActiveFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
  };

  return (
    <div className="lg:col-span-1">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold mb-6">Filters</h2>

        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-3">Category</h3>
            <div className="space-y-2">
              {filters.categories.map((category) => (
                <label key={category} className="flex items-center">
                  <input
                    type="radio"
                    name="category"
                    value={category}
                    checked={activeFilters.category === category}
                    onChange={(e) =>
                      handleFilterChange("category", e.target.value)
                    }
                    className="mr-2"
                  />
                  {category}
                </label>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Heat Level</h3>
            <div className="space-y-2">
              {filters.heatLevels.map((level) => (
                <label key={level} className="flex items-center">
                  <input
                    type="radio"
                    name="heatLevel"
                    value={level}
                    checked={activeFilters.heatLevel === level}
                    onChange={(e) =>
                      handleFilterChange("heatLevel", e.target.value)
                    }
                    className="mr-2"
                  />
                  {level}
                </label>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Price Range</h3>
            <div className="space-y-2">
              {filters.priceRanges.map((range) => (
                <label key={range} className="flex items-center">
                  <input
                    type="radio"
                    name="priceRange"
                    value={range}
                    checked={activeFilters.priceRange === range}
                    onChange={(e) =>
                      handleFilterChange("priceRange", e.target.value)
                    }
                    className="mr-2"
                  />
                  {range}
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
