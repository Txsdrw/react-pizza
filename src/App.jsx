import React from "react";
import "./scss/app.scss";
import { Header } from "./components/header";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <Home />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
