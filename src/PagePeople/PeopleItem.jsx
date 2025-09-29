const PeopleItem = ({ professor }) => {
  return (
    <div className="border rounded-lg shadow-md border-stone-300 overflow-hidden bg-white p-4">
       
      <div className="flex justify-center mb-4">
        <img
          src={professor.image}
          alt={`Portrait of ${professor.name}`}
          className="object-cover w-48 h-48 rounded-full"
        />
      </div>

    
      <div className="flex flex-col items-start">
        <div className="text-2xl font-semibold text-stone-700">{professor.name}</div>
        <div className="text-lg font-sans text-stone-500">{professor.title}</div>

        <div className="text-sm text-stone-700 mt-2">Education:</div>
        <div className="text-sm text-stone-500">{professor.degree1}</div>
        <div className="text-sm text-stone-500">{professor.degree2}</div>

        <div className="text-sm text-stone-700 mt-2">Research Interest:</div>
        <p className="text-sm font-sans text-stone-600">{professor.research_area}</p>

    
        {professor.Academic_title && (
          <>
            <div className="text-sm text-stone-700 mt-2">Academic title(s):</div>
            <div className="text-sm text-stone-500">{professor.Academic_title}</div>
          </>
        )}
      </div>
    </div>
  );
};

export default PeopleItem;
