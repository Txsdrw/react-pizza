import '../scss/app.scss'
import {Header} from "../components/Header";
import {Sort} from "../components/Sort";
import {Categories} from "../components/Categories";
import {PizzaBlock} from "../components/PizzaBlock";
import {PIZZAS_API} from "./api/axios";
import {useEffect, useState} from "react";

export const App = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        PIZZAS_API({
            url: '/items',
            method: 'GET',
        }).then(res => setData(res.data))
    }, []);

    if (!data) return null

    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {data.map((pizza) => (
                <PizzaBlock key={pizza.id} {...pizza} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
}

