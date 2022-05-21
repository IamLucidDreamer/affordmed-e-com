import React from "react";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import CartModal from "../modals/CartModal";

const Header = ({ filters }) => {
  console.log(filters);
  return (
    <div className="w-full flex items-center justify-between py-12 px-12">
      <h1 className="text-textMain text-h1 font-semibold w-48">Sample Ecom</h1>
      <div className="bg-bgMain w-2/5 border-2 border-borderMain rounded-xl py-1.5 flex">
        <select className="w-44 bg-bgMain ring-0 outline-none px-2 text-textMain font-bold">
          <option value="">All Categories</option>
          {filters?.categories?.map((data) => (
            <option value={data?.name}>{data?.name}</option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Search Product, Categories"
          className="w-full mx-2 border-l-2 border- bg-bgMain ring-0 outline-none px-3"
        />
      </div>
      <div className="flex">
        <AiOutlineUser className="text-textMain text-3xl mr-8" />
        <AiOutlineShoppingCart className="text-textMain text-3xl" />
      </div>
      <CartModal/>
    </div>
  );
};

export default Header;
