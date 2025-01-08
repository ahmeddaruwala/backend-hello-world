import ProductCard from "./ProductCard";
import useProducts from "../hooks/useProduct.js";
import { Link } from "react-router-dom";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
// import { useSelector } from "react-redux";

export default function ExploreProduct() {
  const { products, isLoading, error } = useProducts("limit=8&skip=28");

  return (
    <div>
      <div className="mx-4 md:mx-16 xl:mx-[92px] pt-12 md:pt-16 lg:pt-20">
        <div className="flex gap-3 md:gap-4 items-center">
          <span className="bg-primary py-4 md:py-5 px-[8px] md:px-[10px] rounded"></span>
          <span className="text-primary font-semibold text-sm md:text-base">
            Our Products
          </span>
        </div>

        <div className="flex justify-between items-center text-center mt-3 sm:mt-5 ">
          <div className="flex items-center gap-5 ">
            <h3 className="flex  text-lg sm:text-3xl md:text-3xl lg:text-4xl font-semibold">
              Explore Our Products
            </h3>
          </div>

          <div className="hidden sm:flex gap-2  sm:-mt-2 lg:-mt-1">
            <BsArrowLeftShort className="sm:arrow_desktop " />
            <BsArrowRightShort className="sm:arrow_desktop" />
          </div>
        </div>
      </div>

      <div className="mx-4 md:mx-16 xl:mx-[92px] sm:py-4 md:py-6 lg:py-10 mb-8 sm:mb-6 lg:mb-4">
        {isLoading ? "Loading..." : ""}
        {error}

        <div className="flex flex-wrap gap-2  xl:gap-7">
          {products?.map((item) => {
            return (
              <ProductCard
                key={item}
                id={item.id}
                cardImage={item.thumbnail}
                cardDiscount={`-${Math.round(item.discountPercentage)}%`}
                cardName={item.title}
                oldRate={`$${item.price}`}
                discountedRate={`$${(
                  item.price -
                  (item.price * item.discountPercentage) / 100
                ).toFixed(2)}`}
                percent={item.rating}
                rating={item.rating}
              />
            );
          })}
        </div>
      </div>

      <div className="bg-primary text-white w-40 h-12 text-sm sm:text-base sm:w-60 sm:h-14 rounded mx-auto text-center p-[15px] sm:p-[18px] hover:cursor-pointer ">
        <Link to="api-product" className="">
          View All Products
        </Link>
      </div>
    </div>
  );
}
