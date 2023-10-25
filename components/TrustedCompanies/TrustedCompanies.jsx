import Image from "next/image";

const TrustedCompanies = () => {
  return (
    <section className="">
      <div className="grid md:grid-cols-5 grid-cols-2 gap-5 mt-16 md:-mx-12">
        <Image
          src="https://i.ibb.co/0XYq9V4/Frame-1000001516.png"
          width={1000}
          height={1000}
          alt="Image"
        />
        <Image
          src="https://i.ibb.co/rxqmNmT/Frame-1000001517.png"
          width={1000}
          height={1000}
          alt="Image"
        />
        <Image
          src="https://i.ibb.co/RjbSz90/Frame-1000001513.png"
          width={1000}
          height={1000}
          alt="Image"
        />
        <Image
          src="https://i.ibb.co/qxZxnXH/Frame-1000001515.png"
          width={1000}
          height={1000}
          alt="Image"
        />
        <Image
          src="https://i.ibb.co/QnZq8yX/Frame-1000001514.png"
          width={1000}
          height={1000}
          alt="Image"
        />
      </div>
    </section>
  );
};

export default TrustedCompanies;
