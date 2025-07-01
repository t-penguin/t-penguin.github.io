import React, { useState } from "react";
import { PageHeader, SectionHeader } from "../components/Headers";
import Origins from "./subpages/Origins";

const Reflections = () => {
  const [story, setStory] = useState("Origins");
  const viewOrigins = () => setStory("Origins");
  const viewProphecy = () => setStory("Prophecy");
  const viewLegends = () => setStory("Legends");
  
  return (
    <div className="content reflections">
      <PageHeader headerText={"Reflections Series"} />
      <p className="project-description">
        Reflections is a 3-part series that I intend to develop over several years. 
        Chronologically, the series aptly begins with Origins, where we will find out 
        how our magical world came to be. Hundreds of years after the events of Origins 
        we have Prophecy, where a young spellcaster discovers their destiny to become a 
        great and powerful mage. And lastly, over a thousand years after the events of 
        Prophecy, we have Legends, where our modern day heroes will take on the legends 
        of the past who have been broken out of their prisons.
        <br /><br />
        Use the tabs below to check out more information about each part of the story. 
        I will be adding new information as I work on both the project and this website.
      </p>

      <div className="horizontal-divider"></div>

      <div className="tab-container col3">
        <div className="tab" onClick={viewOrigins}>
            <h2>Origins</h2>
        </div>
        <div className="tab" onClick={viewProphecy}>
            <h2>Prophecy</h2>
        </div>
        <div className="tab" onClick={viewLegends}>
            <h2>Legends</h2>
        </div>
      </div>

      <div className="horizontal-divider"></div>

      <SectionHeader headerText={story} centered={true} large={true}/>
      {story === "Origins" && <Origins />}
    </div>
  );
};

export default Reflections;