import React from "react";
import NavBar from "../components/NavBar";
import PageHeader from "../components/PageHeader";
import ImageCard from "../components/ImageCard";
import { Link } from "react-router-dom";

const Projects = () => {
  const placeholder = {
    img: "./Images/1920x1080.png",
    alt: "Placeholder Image",
    header: "Title",
    text: "Hook Description"
  }

  const reflections = {
    img: "./Images/1920x1080.png",
    alt: "Placeholder Image",
    header: "Reflections Series",
    text: "A 3-part story about a world beyond ours"
  };

  const pokemonRB = {
    img: "./Images/1920x1080.png",
    alt: "Placeholder Image",
    header: "Pokémon Red & Blue",
    text: "A return to the Kanto Region"
  }

  return (
    <div className="content projects">
      <PageHeader headerText={"Projects"} />
      <div className="card-container col3">
        <div className="third">
          <Link to="reflections">
            <ImageCard src={reflections.img} alt={reflections.alt}
              header={reflections.header} text={reflections.text}/>
          </Link>
        </div>
        <div className="third">
          <ImageCard src={pokemonRB.img} alt={pokemonRB.alt}
            header={pokemonRB.header} text={pokemonRB.text}/>
        </div>
        <div className="third">
          <ImageCard src={placeholder.img} alt={placeholder.alt}
            header={placeholder.header} text={placeholder.text}/>
        </div>
        <div className="third">
          <ImageCard src={placeholder.img} alt={placeholder.alt}
            header={placeholder.header} text={placeholder.text}/>
        </div>
      </div>
      <div className="horizontal-divider"></div>
    </div>
  );
};

export default Projects;