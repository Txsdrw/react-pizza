import React from "react";
import { Link } from "react-router-dom";

function CartEmpty() {
  return (
    <div className="App">
      <div className="header">
        <div className="wrapper">
          <div className="container">
            <div className="content">
              <div className="header__cart">
                <span>Карзина пуста</span>
                <Link to="/" className="button button--cart">
                  <div className="button__delimiter">X</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartEmpty;
