import Image from "next/image";
import Link from "next/link";

const FeaturedProduct2Col = () => {
  const featuredProductsData = [
    {
      title: "Deals Good",
      subtitle: "Cellphone Ultra.Save $150",
      bgColor: "bg-[#B10E23]",
      linkText: "Shop Iphone Red",
      href: "/",
      imageURL: "/images/sale-image-1.jpg",
    },
    {
      title: "Super Sale",
      subtitle: "B&O Beoplay.Save $80",
      bgColor: "bg-[#67589D]",
      linkText: "Shop B&O Beoplay",
      href: "/",
      imageURL: "/images/sale-image-2.jpg",
    },
  ];
  return (
    <section>
      <div className="mt-5">
        <div className="md:grid md:grid-cols-2 grid-cols-1 gap-5 px-4 md:px-0">
          {featuredProductsData.map((data, i) => (
            <div
              key={i}
              className={`${data.bgColor} ${
                i === 1 && "my-3 md:my-0"
              } rounded-3xl relative cursor-pointer h-48`}
            >
              <div className="text-white absolute md:top-[22%] top-[25%] left-5 z-10">
                <span className="text-xs">{data.title}</span>
                <p className="md:text-xl text-sm font-semibold md:mb-8 mb-5 uppercase">
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
                draggable
                src={data.imageURL}
                alt="Image"
                width={1000}
                height={1000}
                className="w-1/2 ml-auto object-cover object-center rounded-3xl md:h-auto z-0 h-48 md:static absolute bottom-0 right-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct2Col;
