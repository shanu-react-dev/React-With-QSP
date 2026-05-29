import React, { Fragment } from "react";

const Navlists = () => {
  let arrOfList = [
    "Vehicles",
    "Human Spaceflight",
    "Starlink",
    "Starshield",
    "xAI",
    "teraFab",
    "Company",
    "Shop",
  ];
  return (
    <ul className="navlist">
      {arrOfList.map((ele, index) => {
        return (
          <Fragment key={index} className="Shanu">
            <li>{ele}</li>
          </Fragment>
        );
      })}
    </ul>
  );
};

export default Navlists;
