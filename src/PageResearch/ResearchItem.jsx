import React from "react";

const ResearchItem = ({ title, description, image }) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 p-4 border rounded-lg shadow-md bg-white">
      
     
      <div className="flex-shrink-0 w-full md:w-1/2">  
        <img
          src={image}
          alt={title}
          className="w-full h-auto object-contain rounded-md"
        />
      </div>

    
      <div className="flex-1 text-left md:pl-6">  
        <h2 className="text-lg font-semibold mb-2">{title}</h2> 
        <p className="text-sm text-stone-600">{description}</p>
      </div>

    </div>
  );
};

export default ResearchItem;
