import React, { useState } from "react";

const MainProductCard = ({ data, addProduct, removeProduct, cart }) => {
  const [added, setAdded] = useState(0);
  const checkAdded = () => {
    cart.forEach((element) => {
      console.log(element);
      console.log(element.id === data.id);
      if (element.id === data.id) {
        setAdded(1);
        console.log(added , "added");
      }
      else
      {
        setAdded(0)
        console.log(added);
      }
    });
  };

  return (
    <div className="w-72 border-2 border-borderMain rounded-xl p-6">
      <img src={data?.image} className="rounded-xl" />
      <h1 className="font-bold my-2">{data?.title}</h1>
      <p className="my-2">{data?.description.slice(0, 28)}</p>
      <div className="mt-5">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-bold text-xl">{data?.price}</h1>
            <h1 className="text-sm">46.85</h1>
          </div>
          {added === 0 ? (
            <button
              className="px-2 py-2 bg-primaryGreen text-white font-bold rounded-md"
              onClick={() => {
                addProduct(data);
                checkAdded();
              }}
            >
              Add to Cart
            </button>
          ) : (
            <button
              className="px-2 py-2 bg-primaryGreen text-white font-bold rounded-md"
              onClick={() => {
                removeProduct(data?.id);
                checkAdded();
              }}
            >
              Remove Item
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainProductCard;
