import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import { categories } from "src/constants/data";
import { useFilters } from "src/hooks/useFilters";

export const Filters: React.FC = () => {
  const { filter, updateFilters } = useFilters();
  const [category, setCategory] = useState(filter || "All");

  const handleCategoryChange = (newCategory: string) => {
    if(category === newCategory) {
        setCategory('')
        updateFilters('All')
        return;
    }else {
        setCategory(newCategory)
        updateFilters(newCategory)
    }
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="mt-3 mb-2"
    >
      {categories.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleCategoryChange(item.category)}
          className={`flex flex-col items-start mr-4
         px-4 py-2 rounded-full ${
           category === item.category
             ? "bg-primary-300"
             : "bg-primary-100 border border-primary-200"
         }`}
        >
          <Text
            className={`text-sm ${
              category === item.category
                ? "text-white"
                : "text-black-300"
            }`}
          >
            {item.title}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};
