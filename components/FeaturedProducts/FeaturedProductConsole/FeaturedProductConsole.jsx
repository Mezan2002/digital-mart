import Image from "next/image";
import Link from "next/link";

const FeaturedProductConsole = () => {
  const featuredProductsData = [
    {
      title: "Game Console",
      subtitle: "XBOX 360 Games",
      linkText: "Shop Now",
      href: "/",
      imageURL: "https://i.ibb.co/LzxBCwm/Untitled-design-1.png",
    },
    {
      title: "Game Console",
      subtitle: "PC Game Controller",
      linkText: "Shop Now",
      href: "/",
      imageURL: "https://i.ibb.co/37pL4M1/Untitled-design-2.png",
    },
    {
      title: "Game Console",
      subtitle: "PlayStation 5 Games",
      linkText: "Shop Now",
      href: "/",
      imageURL: "https://i.ibb.co/42pMgD2/Untitled-design-3.png",
    },
  ];
  return (
    <section>
      <div className="mt-5">
        <div className="md:grid md:grid-cols-12 grid-cols-1 gap-5 px-4 md:px-0">
          {/* {featuredProductsData.map((data, i) => (
            <div
              key={i}
              className={`${
                i === 1 && "my-3 md:my-0"
              } rounded-3xl relative cursor-pointer object-cover object-center`}
            >
              <div className="text-white absolute top-[70%] left-5 z-10">
                <span className="text-xs">{data.title}</span>
                <p className="md:text-3xl text-base font-semibold md:mb-8 mb-5 uppercase">
                  {data.subtitle}
                </p>
                <Link
                  href={data.href}
                  className="border-b-1 pb-2 cursor-pointer font-medium text-base"
                >
                  {data.linkText}
                </Link>
              </div>
              <Image draggable
                src={data.imageURL}
                alt="Image"
                width={500}
                height={500}
                className="rounded-2xl drop-shadow-xl z-0"
              />
            </div>
          ))} */}
          <div className="col-span-6 uppercase rounded-xl bg-gray-200 flex flex-col items-center justify-center">
            <h4 className="text-center text-2xl font-semibold py-8">
              OFF Price Laptops
            </h4>
            <Image
              draggable
              width={1000}
              height={1000}
              alt="Image"
              src="https://i.ibb.co/Rg4XF2f/porto45-banner-5.png"
              className="w-80"
            />
            <h4 className="text-center text-2xl font-semibold pb-8">
              Upto 35% OFF
            </h4>
            <Link
              href="/"
              className="pb-5 underline cursor-pointer font-medium text-base"
            >
              Shop Now
            </Link>
          </div>
          <div className="md:col-span-6 grid md:grid-cols-2 gap-5 mt-5 md:mt-0">
            <div className="md:col-span-2 relative">
              <div className="absolute bottom-5 left-6">
                <span className="text-xs">Headphone</span>
                <p className="md:text-3xl text-base font-semibold md:mb-8 mb-5 uppercase">
                  Aurora Headset
                </p>
                <Link
                  href="/"
                  className="pb-5 underline cursor-pointer font-medium text-base"
                >
                  Go to Collection
                </Link>
              </div>
              <Image
                draggable
                width={1000}
                height={1000}
                alt="Image"
                src="https://i.ibb.co/Mn6TQfY/logitech-aurora-headset.jpg"
                className="rounded-xl"
              />
            </div>
            <div className="relative">
              <div className="absolute bottom-5 left-6">
                <span className="text-xs">Instant Camera</span>
                <p className="md:text-2xl text-xl font-semibold md:mb-8 mb-5 uppercase">
                  Fujifilm Cam
                </p>
                <Link
                  href="/"
                  className="pb-5 underline cursor-pointer font-medium text-base"
                >
                  Shop Now
                </Link>
              </div>
              <Image
                draggable
                width={1000}
                height={1000}
                alt="Image"
                src="https://i.ibb.co/F4cRk40/instant-cameras.jpg"
                className="rounded-xl"
              />
            </div>
            <div className="relative">
              <div className="absolute bottom-5 left-6">
                <span className="text-xs">Game Controller</span>
                <p className="md:text-2xl text-xl font-semibold md:mb-8 mb-5 uppercase">
                  For PS5
                </p>
                <Link
                  href="/"
                  className="pb-5 underline cursor-pointer font-medium text-base"
                >
                  Shop Now
                </Link>
              </div>
              <Image
                draggable
                width={1000}
                height={1000}
                alt="Image"
                src="https://i.ibb.co/XsGY2pk/new-dualsense.jpg"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductConsole;
