import hero from "../assets/home-page-images/hero.png";

import React from "react";

const categories = [
    "Woman’s Fashion",
    "Men’s Fashion",
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby’s & Toys",
    "Groceries & Pets",
    "Health & Beauty",
  ];
  export default function Hero() {
    return (
      <div className="flex justify-between container-x items-center">
        <div className="flex min-w-[19%] border-r border-r-gray-300">
          <ul className="flex flex-col gap-y-[17px] text-base mt-9">
            {categories.map((items) => (
              <li key={items}>
                <a className="link_hover" href="">{items}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-10 w-[77%]">
          <img src={hero} alt="Hero_image" />
        </div>
      </div>
    );
  }