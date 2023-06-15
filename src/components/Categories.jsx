import { useState } from "react";

const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];

export const Categories = () => {
  const [active, setActive] = useState(0);

  const handleChange = (index) => {
    setActive(index);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((item, index) => (
          <li
            key={index}
            onClick={() => handleChange(index)}
            className={index === active ? "active" : ""}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
