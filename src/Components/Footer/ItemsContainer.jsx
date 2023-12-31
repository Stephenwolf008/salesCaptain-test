import React from "react";
import Item from "./Item";
import { Products, Resources, Industry, Partner, Company, USHeadquarters, IndiaHeadquarters, LondonHeadquarters } from "./Menus";

const ItemsContainer = () => {
  return (
    <div className="flex flex-wrap lg:justify-center lg:items-center flex-col px-4 py-10">
      <div className="mb-8">
        <img src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d85afd15788d0263af7b58_full_logo_white.webp" alt="logo" />
      </div>
      <div className="lg:flex lg:flex-row grid grid-cols-3 gap-10 lg:gap-20 mb-4">
        <Item Links={Products} title="Products" />
        <Item Links={Resources} title="" />
        <Item Links={Industry} title="Industry" />
        <Item Links={Partner} title="Partner" />
        <Item Links={Company} title="Company" />
      </div>
      <div className="flex gap-4">
        <Item Links={USHeadquarters} title="US Headquarters" />
        <Item Links={IndiaHeadquarters} title="India Office" />
        <Item Links={LondonHeadquarters} title="London Office" />
      </div>
    </div>
  );
};

export default ItemsContainer;
