import Hero from "../components/Hero.jsx";
import Timer from "../components/Timer.jsx";
import FlashSale from "../components/FlashSale.jsx";
import BestSelling from "../components/BestSelling.jsx";
import BrowseByCategory from "../components/BrowseByCategory.jsx";
import ExploreProduct from "../components/ExploreProduct.jsx";
import Music from "../components/Music.jsx";
import NewArrivalGrid from "../components/NewArrivalGrid.jsx";
import Slider from "../components/Slider.jsx";

export default function Home() {
  return (
    <div>
      <Hero />
      {/* <Slider /> */}
      <Timer />
      <FlashSale />
      <BrowseByCategory />
      <BestSelling />
      <Music />
      <ExploreProduct />
      <NewArrivalGrid />
    </div>
  );
}