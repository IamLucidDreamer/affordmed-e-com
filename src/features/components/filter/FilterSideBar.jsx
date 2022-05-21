import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const FilterSideBar = ({ filters }) => {
  console.log(filters);
  return (
    <div className="">
      <h1 className="font-bold text-textMain text-customxl my-1">Categories</h1>
      {filters?.categories?.map((data) => (
        <div>
          <CategoriesComp title={data?.name} />
          <div className="ml-3">
            {data?.subCategories?.map((data) => (
              <CategoriesComp title={data?.name} />
            ))}
          </div>
        </div>
      ))}
      <h1 className="font-bold text-textMain text-customxl mt-10 mb-1">
        Brands
      </h1>
      {filters?.brands?.map((data) => (
        <CategoriesComp title={data?.name} />
      ))}
      <h1 className="font-bold text-textMain text-customxl mt-10 mb-1">
        Ratings
      </h1>
      <div className="flex items-center my-2 text-yellow-500">
        <input type="checkbox" className="mr-2" />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
      </div>
      <div className="flex items-center my-2 text-yellow-500">
        <input type="checkbox" className="mr-2" />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiOutlineStar />
      </div>
      <div className="flex items-center my-2 text-yellow-500">
        <input type="checkbox" className="mr-2" />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiOutlineStar />
        <AiOutlineStar />
      </div>
      <div className="flex items-center my-2 text-yellow-500">
        <input type="checkbox" className="mr-2" />
        <AiFillStar />
        <AiFillStar />
        <AiOutlineStar />
        <AiOutlineStar />
        <AiOutlineStar />
      </div>
      <div className="flex items-center my-2 text-yellow-500">
        <input type="checkbox" className="mr-2" />
        <AiFillStar />
        <AiOutlineStar />
        <AiOutlineStar />
        <AiOutlineStar />
        <AiOutlineStar />
      </div>
      <h1 className="font-bold text-textMain text-customxl mt-10 mb-1">
        Price
      </h1>
      <input type="range" className="mr-2" />
      <div className="flex items-center justify-between w-52 mt-5">
        <input
          className="bg-bgMain p-2 w-2/5 rounded-md"
          placeholder="Rs. 3000"
          type="number"
        />
        <input
          className="bg-bgMain p-2 w-2/5 rounded-md"
          placeholder="Rs. 6000"
          type="number"
        />
      </div>
      <div className="flex items-center justify-between w-52 mt-10">
        <button className="bg-primaryGreen p-2 w-2/5 rounded-md text-white font-bold">Apply</button>
        <button className="p-2 w-2/5 rounded-md text-textMain">Reset</button>
      </div>
    </div>
  );
};

export default FilterSideBar;

const CategoriesComp = ({ title }) => (
  <div className="flex items-center my-2">
    <input type="checkbox" className="mr-2" />
    <label>{title}</label>
  </div>
);
