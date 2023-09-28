import React, { useEffect, useState } from "react";

import { Categories } from "../components/Categories";
import { Sort } from "../components/Sort";
import { Skeleton } from "../components/PizzaBlock/Skeleton";
import { PizzaBlock } from "../components/PizzaBlock/PizzaBlock";

import { PIZZAS_API } from "../core/api/axios";

export const Home = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeSortId, setActiveSortId] = useState(0);
  const [activeCategoryId, setActiveCategoryId] = useState(0);

  const sortParam = ["rating", "price", "title"];

  useEffect(() => {
    setIsLoading(true);
    PIZZAS_API({
      url: `/items?orderBy=${sortParam[activeSortId]}&category=${
        activeCategoryId > 0 ? activeCategoryId : ""
      }`,
      method: "GET",
    }).then((res) => {
      setData(res.data);
      setIsLoading(false);
    });
    window.scrollTo(0, 0);
  }, [activeSortId, activeCategoryId]);

  if (!data) return null;

  return (
    <>
      <div className="content__top">
        <Categories
          activeCategory={activeCategoryId}
          setActiveCategory={(categoryId) => setActiveCategoryId(categoryId)}
        />
        <Sort
          activeSort={activeSortId}
          sortChangeValue={(sortId) => setActiveSortId(sortId)}
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
