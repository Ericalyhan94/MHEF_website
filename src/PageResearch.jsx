import React from "react";
import ResearchItem from "./PageResearch/ResearchItem";
import ResearchData from "./PageResearch/ResearchData";

const ResearchPage = () => {
 
  const orderedData = [...ResearchData];  

 
  
  const uniqueData = Array.from(new Map(ResearchData.map(item => [item.id, item])).values());
  const labsItems = uniqueData.filter(item => item.id < 6);
  const virtualLabsItems = uniqueData.filter(item => item.id >= 6);


  return (
    <div className="space-y-8 p-6 flex flex-col">
 
      <h1 className="text-4xl font-bold text-red-600 mb-6">Research Capability</h1>

 
      <h2 className="text-2xl font-semibold text-red-600 mb-4">Labs: Microstructure Observation, Mechanical Testing, and Thermal Desorption Spectroscopy</h2>
      {labsItems.map((item) => (
        <ResearchItem
          key={item.id}
          title={item.title}
          description={item.description}
          image={item.image}
        />
      ))}

 
      <h2 className="text-2xl font-semibold text-red-600 mt-8 mb-4">Virtual Labs： Multiscale modeling and characterization</h2>
      {virtualLabsItems.map((item) => (
        <ResearchItem
          key={item.id}
          title={item.title}
          description={item.description}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default ResearchPage;
