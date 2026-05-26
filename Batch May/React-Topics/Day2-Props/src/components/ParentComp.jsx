import ChildComp from "./ChildComp";

const ParentComp = () => {
  return (
    <div>
      <h1>I am parent</h1>
      <ChildComp amount="15k"></ChildComp>
    </div>
  );
};

export default ParentComp;
