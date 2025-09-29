import Professors from "./PagePeople/Professors";
import PeopleItem from "./PagePeople/PeopleItem";

const PagePeople = () => {
  const peopleItems = Professors.map((professor) => (
    <PeopleItem Professor={professor} key={professor.id} />
  ));

  return (
    <div className="grid gap-6 p-6">
      People
    </div>
  );
};

export default PagePeople;
