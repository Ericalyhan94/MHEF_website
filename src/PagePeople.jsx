import React from 'react';
import Professors from "./PagePeople/Professors";
import ResearchAssociate from "./PagePeople/ResearchAssociate";
import PostDoc from "./PagePeople/PostDoc";
import PhDCandidates from "./PagePeople/PhDCandidates";
import PeopleItem from "./PagePeople/PeopleItem";

const PagePeople = () => {
 
  const professorItems = Professors.map((professor) => (
    <PeopleItem professor={professor} key={professor.id} />
  ));

 
  const researchAssociateItems = ResearchAssociate.map((ra) => (
    <PeopleItem professor={ra} key={ra.id} />
  ));

 
  const postDocItems = PostDoc.map((pd) => (
    <PeopleItem professor={pd} key={pd.id} />
  ));

 
  const phdcandidateItems = PhDCandidates.map((pd) => (
    <PeopleItem professor={pd} key={pd.id} />
  ));

  return (
    <div className="grid gap-12 p-6">
 
      <div>
        <h1 className="text-4xl font-bold text-red-600 mb-8">Professors:</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {professorItems}
        </div>
      </div>

      {/* Research Associates Section */}
      <div>
        <h1 className="text-4xl font-bold text-red-600 mb-8">Research Associates:</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchAssociateItems}
        </div>
      </div>

      {/* Postdoctoral Fellows Section */}
      <div>
        <h1 className="text-4xl font-bold text-red-600 mb-8">Postdoctoral Researchers:</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {postDocItems}
        </div>
      </div>

      {/* Ph.D. Candidates Section */}
      <div>
        <h1 className="text-4xl font-bold text-red-600 mb-8">Ph.D. Candidates:</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {phdcandidateItems}
        </div>
      </div>
    </div>
  );
};

export default PagePeople;
