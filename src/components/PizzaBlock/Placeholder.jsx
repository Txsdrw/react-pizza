import React from "react";
import ContentLoader from "react-content-loader";
import pizzaBlock from "./index";

const PizzaBlockPlaceholder = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={457}
    viewBox="0 0 280 457"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="131" cy="128" r="121" />
    <rect x="3" y="268" rx="0" ry="0" width="270" height="24" />
    <rect x="3" y="418" rx="0" ry="0" width="85" height="33" />
    <rect x="121" y="413" rx="31" ry="31" width="159" height="47" />
    <rect x="2" y="315" rx="10" ry="10" width="281" height="77" />
  </ContentLoader>
);

export default PizzaBlockPlaceholder;
