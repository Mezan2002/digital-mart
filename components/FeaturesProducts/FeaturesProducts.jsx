"use client";
import Image from "next/image";
import Link from "next/link";

const FeaturesProducts = () => {
  const featuredProductsData = [
    {
      title: "Surface",
      subtitle: "Save Upto $550",
      bgColor: "bg-rose-500",
      linkText: "Shop Surface",
      href: "/",
      imageURL: "https://i.ibb.co/XYjgN7R/asset-25-removebg-preview.png",
    },
    {
      title: "Gamepad",
      subtitle: "Save Upto $60",
      bgColor: "bg-indigo-500",
      linkText: "Shop Deals",
      href: "/",
      imageURL: "https://i.ibb.co/Cnp67mC/asset-26-removebg-preview.png",
    },
    {
      title: "Cameras",
      subtitle: "Save Upto $250",
      bgColor: "bg-teal-500",
      linkText: "Shop Cameras",
      href: "/",
      imageURL: "https://i.ibb.co/80DW58Z/asset-27-removebg-preview.png",
    },
  ];
  return (
    <section>
      <div className="mt-5">
        <div className="md:grid md:grid-cols-3 grid-cols-1 gap-5 px-4 md:px-0">
          {featuredProductsData.map((data, i) => (
            <div
              key={i}
              className={`${data.bgColor} ${
                i === 1 && "my-3 md:my-0"
              } rounded-3xl relative cursor-pointer`}
            >
              <div className="text-white absolute top-[22%] left-5">
                <span className="text-xs">{data.title}</span>
                <p className="md:text-xl text-base font-semibold md:mb-8 mb-5 uppercase">
                  {data.subtitle}
                </p>
                <Link
                  href={data.href}
                  className="border-b-1 pb-2 cursor-pointer font-medium text-base"
                >
                  {data.linkText}
                </Link>
              </div>
              <Image
                src={data.imageURL}
                alt="Image"
                width={1000}
                height={1000}
                className="hover:scale-110 duration-700 drop-shadow-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesProducts;
