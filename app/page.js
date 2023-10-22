import Banner from "@/components/Banner/Banner";
import FeaturesProducts from "@/components/FeaturesProducts/FeaturesProducts";

export default function Home() {
  return (
    <main className="md:min-h-[93vh] min-h-screen bg-[#F1F3F7]">
      <div className="md:max-w-[1480px] md:mx-auto py-8">
        <Banner />
        <FeaturesProducts />
      </div>
    </main>
  );
}
