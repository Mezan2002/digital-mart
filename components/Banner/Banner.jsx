import BannerImageSlider from "./BannerImageSlider/BannerImageSlider";
import BannerMenuBar from "./BannerMenuBar/BannerMenuBar";

const Banner = () => {
  return (
    <section>
      <div className="md:grid block grid-cols-5 gap-5">
        <div className="col-span-1 md:block hidden">
          <BannerMenuBar />
        </div>
        <div className="col-span-4">
          <BannerImageSlider />
        </div>
      </div>
    </section>
  );
};

export default Banner;
