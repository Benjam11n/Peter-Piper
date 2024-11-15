"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Flame, Tag, DollarSign } from "lucide-react";

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
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="lg:col-span-1"
    >
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold dark:text-white">Filters</h2>
        </div>

        <Accordion type="single" collapsible className="px-6">
          <AccordionItem value="category">
            <AccordionTrigger className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              Category
            </AccordionTrigger>
            <AccordionContent>
              <RadioGroup
                value={activeFilters.category}
                onValueChange={(value) => handleFilterChange("category", value)}
                className="space-y-2"
              >
                {filters.categories.map((category) => (
                  <div key={category} className="flex items-center space-x-2">
                    <RadioGroupItem
                      value={category}
                      id={`category-${category}`}
                    />
                    <label
                      htmlFor={`category-${category}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-gray-300"
                    >
                      {category}
                    </label>
                  </div>
                ))}
              </RadioGroup>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="heatLevel">
            <AccordionTrigger className="flex items-center gap-2">
              <Flame className="w-4 h-4" />
              Heat Level
            </AccordionTrigger>
            <AccordionContent>
              <RadioGroup
                value={activeFilters.heatLevel}
                onValueChange={(value) =>
                  handleFilterChange("heatLevel", value)
                }
                className="space-y-2"
              >
                {filters.heatLevels.map((level) => (
                  <div key={level} className="flex items-center space-x-2">
                    <RadioGroupItem value={level} id={`heat-${level}`} />
                    <label
                      htmlFor={`heat-${level}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-gray-300"
                    >
                      {level}
                    </label>
                  </div>
                ))}
              </RadioGroup>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="priceRange">
            <AccordionTrigger className="flex items-center gap-2">
              <DollarSign className="w-4 h-4" />
              Price Range
            </AccordionTrigger>
            <AccordionContent>
              <RadioGroup
                value={activeFilters.priceRange}
                onValueChange={(value) =>
                  handleFilterChange("priceRange", value)
                }
                className="space-y-2"
              >
                {filters.priceRanges.map((range) => (
                  <div key={range} className="flex items-center space-x-2">
                    <RadioGroupItem value={range} id={`price-${range}`} />
                    <label
                      htmlFor={`price-${range}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-gray-300"
                    >
                      {range}
                    </label>
                  </div>
                ))}
              </RadioGroup>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </motion.div>
  );
}
