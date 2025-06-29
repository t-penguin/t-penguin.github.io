import React from "react";
import NavBar from "../components/NavBar";
import PageHeader from "../components/PageHeader";

const Home = () => {
  return (
    <div className="content homepage">
      <PageHeader headerText={"Frozen Rose Entertainment"} />
      <p>
        There isn't much to view here at the moment... <br />
        <br />
        Use the links on the navigation bar to check out my projects 
        or learn more about me!
      </p>
    </div>
  );
};

export default Home;