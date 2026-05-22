const Newcomp = (name) => {
  console.log("I am new compoonent");
  console.log(name);
  //   name.username = "Kurinji";
  //   name.age = 90;
  let myage = name.age;
  myage = "Shanu";
  console.log(name.age);
  console.log(myage);
  return (
    <div>
      <h1>Hii I am {name.username} from new component</h1>
      <h1>I am {name.age} years old</h1>
    </div>
  );
};

export default Newcomp;
