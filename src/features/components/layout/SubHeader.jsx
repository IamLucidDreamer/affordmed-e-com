import React from "react";
import { BiChevronDown } from "react-icons/bi";

const SubHeader = () => {
  return (
    <div className="bg-bgMain sticky top-0">
      <div className="px-12 py-3 flex">
        <ButtonComp title={"Bakery"} />
        <ButtonComp title={"Fruit and vegetables"} />
        <ButtonComp title={"Meat and fish"} />
        <ButtonComp title={"Drinks"} />
        <ButtonComp title={"Kitchen"} />
        <ButtonComp title={"Special nutrition"} />
      </div>
    </div>
  );
};

export default SubHeader;

const ButtonComp = ({ title }) => (
  <button className="text-textMain font-semibold py-0.5 mr-20 flex items-center justify-center">
    {title} <BiChevronDown className="text-primaryGreen text-sm ml-2 mt-1"/>
  </button>
);
