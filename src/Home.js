import React from "react";
import Navigation from "./common/NavBar";
import Card from "./common/card/Card";
import FormCard from "./common/form/FormCard";

const Home = () => {
  return (
    <div className="App">
      <Navigation />
      <div className="container">
        <h2>Old Car Available</h2>
        <hr />
        <Card />
        <FormCard />
      </div>
    </div>
  );
};

export default Home;
