import Banner from "@/components/Banner/Banner";
import DiscountSellProductCard from "@/components/DiscountSellProductCard/DiscountSellProductCard";
import FeaturedProduct2Col from "@/components/FeaturedProducts/FeaturedProduct2Col/FeaturedProduct2Col";
import FeaturedProduct3Col from "@/components/FeaturedProducts/FeaturedProduct3Col/FeaturedProduct3Col";
import FeaturedProductConsole from "@/components/FeaturedProducts/FeaturedProductConsole/FeaturedProductConsole";
import NewArrivalProducts from "@/components/NewArrivalProducts/NewArrivalProducts";
import ServicesWeProvide from "@/components/ServicesWeProvide/ServicesWeProvide";
import TopSellProductCard from "@/components/TopSellProductCard/TopSellProductCard";
import TrustedCompanies from "@/components/TrustedCompanies/TrustedCompanies";

export default function Home() {
  return (
    <main className="">
      <div className="">
        <Banner />
        <FeaturedProduct3Col />
        <TopSellProductCard />
        <FeaturedProduct2Col />
        <DiscountSellProductCard />
        <FeaturedProductConsole />
        <NewArrivalProducts />
        <TrustedCompanies />
        <ServicesWeProvide />
      </div>
    </main>
  );
}
