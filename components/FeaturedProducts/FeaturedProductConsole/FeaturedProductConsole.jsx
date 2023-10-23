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
        <div className="md:grid md:grid-cols-3 grid-cols-1 gap-5 px-4 md:px-0">
          {featuredProductsData.map((data, i) => (
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
              <Image
                src={data.imageURL}
                alt="Image"
                width={500}
                height={500}
                className="rounded-2xl drop-shadow-xl z-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductConsole;
