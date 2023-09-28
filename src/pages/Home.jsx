import React, { useEffect, useState } from "react";

import { Categories } from "../components/Categories";
import { Sort } from "../components/Sort";
import { Skeleton } from "../components/PizzaBlock/Skeleton";
import { PizzaBlock } from "../components/PizzaBlock/PizzaBlock";

import { PIZZAS_API } from "../core/api/axios";

export const Home = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeSortType, setActiveSortType] = useState({
    name: "Популярности",
    sortType: "rating",
  });
  const [activeCategoryId, setActiveCategoryId] = useState(0);

  useEffect(() => {
    const sortBy = activeSortType.sortType.replace("-", "");
    const order = activeSortType.sortType.includes("-") ? "desc" : "asc";
    const category = activeCategoryId > 0 ? activeCategoryId : "";

    setIsLoading(true);
    PIZZAS_API({
      url: `/items?sortBy=${sortBy}&order=${order}&category=${category}`,
      method: "GET",
    }).then((res) => {
      setData(res.data);
      setIsLoading(false);
    });
    window.scrollTo(0, 0);
  }, [activeSortType, activeCategoryId]);

  if (!data) return null;

  return (
    <>
      <div className="content__top">
        <Categories
          activeCategory={activeCategoryId}
          setActiveCategory={(categoryId) => setActiveCategoryId(categoryId)}
        />
        <Sort
          activeSort={activeSortType}
          sortChangeValue={(sortType) => setActiveSortType(sortType)}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(9)].map((_, index) => <Skeleton key={index} />)
          : data.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)}
      </div>
    </>
  );
};
