import { useState } from "react";

export const Categories = ({ activeCategory, setActiveCategory }) => {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((item, index) => (
          <li
            key={index}
            onClick={() => setActiveCategory(index)}
            className={index === activeCategory ? "active" : ""}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
