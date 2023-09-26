import { useState } from "react";

const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];

export const Categories = ({activeCategory, setActiveCategory}) => {

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
