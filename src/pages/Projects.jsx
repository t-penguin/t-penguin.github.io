import React from "react";
import NavBar from "../components/NavBar";
import PageHeader from "../components/PageHeader";
import ImageCard from "../components/ImageCard";

const Projects = () => {
  return (
    <div className="content projects">
      <PageHeader headerText={"Projects"} />
      <div className="card-container">
        <div className="third">
          <ImageCard src={"./Images/1920x1080.png"} alt={"Logo"} header={"Test Card"} text={"Test"}/>
        </div>
        <div className="third">
          <ImageCard src={"./Images/1920x1080.png"} alt={"Logo"} header={"Test Card"} text={"Test"}/>
        </div>
        <div className="third">
          <ImageCard src={"./Images/1920x1080.png"} alt={"Logo"} header={"Test Card"} text={"Test"}/>
        </div>
      </div>
    </div>
  );
};

export default Projects;