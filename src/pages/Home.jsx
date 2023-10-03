import React, { useEffect, useState } from "react";

import { Categories } from "../components/Categories";
import { Sort } from "../components/Sort";
import { Skeleton } from "../components/PizzaBlock/Skeleton";
import { PizzaBlock } from "../components/PizzaBlock/PizzaBlock";

import { PIZZAS_API } from "../core/api/axios";
import { Pagination } from "../components/Pagination";

export const Home = ({ searchValue }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeSortType, setActiveSortType] = useState({
    name: "Популярности",
    sortType: "rating",
  });
  const [activeCategoryId, setActiveCategoryId] = useState(0);
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    setActivePage(1);
  }, [activeCategoryId]);

  useEffect(() => {
    const sortBy = activeSortType.sortType.replace("-", "");
    const order = activeSortType.sortType.includes("-") ? "desc" : "asc";
    const category = activeCategoryId > 0 ? `category=${activeCategoryId}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";

    setIsLoading(true);
    PIZZAS_API({
      url: `/items?page=${activePage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
      method: "GET",
    }).then((res) => {
      setData(res.data);
      setIsLoading(false);
    });
    window.scrollTo(0, 0);
  }, [activeSortType, activeCategoryId, searchValue, activePage]);

  if (!data) return null;

  const skeleton = [...new Array(9)].map((_, index) => (
    <Skeleton key={index} />
  ));
  const pizzas = data.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />);

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
      <div className="content__items">{isLoading ? skeleton : pizzas}</div>
      <Pagination
        activePage={activePage}
        activeCategoryId={activeCategoryId}
        setActivePage={(number) => setActivePage(number)}
      />
    </>
  );
};
