import React, { useEffect, useReducer } from "react";
import axios from "../../utils/requestCaller";
import MainProductCard from "../components/cards/productCard/MainProductCard";
import FilterSideBar from "../components/filter/FilterSideBar";
import Header from "../components/layout/Header";
import SubHeader from "../components/layout/SubHeader";

const Main = () => {
  const [actions, setActions] = useReducer(
    (state, diff) => ({ ...state, ...diff }),
    {
      filterData: "",
      products: [],
      cart: [],
    }
  );

  const { filterData, products, cart } = actions;

  // Get Data of all the Filters
  const getFilters = () => {
    axios
      .get("/filters")
      .then((res) => {
        setActions({ filterData: res.data.searchFilter });
      })
      .catch((err) => console.log(err));
  };

  // Get Data of all the Products
  const getProducts = () => {
    axios
      .get("/products")
      .then((res) => {
        setActions({ products: res.data.products });
        console.log(res.data.products);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getFilters();
    getProducts();
  }, []);

  const addProductToCart = (data) => {
    cart.push(data);
    console.log(cart);
  };

  const deleteProductFromCart = (id) => {    
    cart.forEach((element, index) => {
      if (element.id === id) {
        console.log(index);
        console.log(cart.splice(index, index));
        cart.splice(index, index);
        console.log("hello");
        console.log(cart);
      }
    });
  };

  return (
    <div>
      <Header filters={filterData} />
      <SubHeader />
      <div className="px-12 py-12 flex">
        <div className="w-1/4 sticky">
          <FilterSideBar filters={filterData} />
        </div>
        <div className="w-3/4 px-2 flex gap-10 flex-wrap items-center justify-between">
          {products?.map((data) => (
            <MainProductCard
              data={data}
              addProduct={addProductToCart}
              removeProduct={deleteProductFromCart}
              cart={cart}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
