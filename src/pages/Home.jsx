import React from "react";
import { Categories } from "../components/categories";
import { Sort } from "../components/sort";
import Placeholder from "../components/PizzaBlock/Placeholder";
import PizzaBlock from "../components/PizzaBlock";

function Home() {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsloading] = React.useState(true);

  React.useEffect(() => {
    const fetchData = async () => {
      let res = await fetch(
        "https://63e3759b65ae4931770f5b26.mockapi.io/items"
      );
      let data = await res.json();
      setItems(data);
      setIsloading((prevState) => !prevState);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Placeholder key={index} />)
          : items.map((item) => (
              <PizzaBlock key={item.id} image={item.imageUrl} {...item} />
            ))}
      </div>
    </>
  );
}

export default Home;
