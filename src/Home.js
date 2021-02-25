import React from "react";
import Navigation from "./common/NavBar";
import Card from "./common/card/Card";

const Home = () => {
  return (
    <div className="App">
      <Navigation />
      <div className="container">
        <h2>Old Car Available</h2>
        <hr />
        <Card />
      </div>
    </div>
  );
};

export default Home;
