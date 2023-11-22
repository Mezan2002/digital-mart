import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import styles from "./styles.module.css";

const SingleCategorieHeader = () => {
  return (
    <div
      className={`${styles.backgroundDiv} md:w-[129%] w-full md:h-[300px] md:-mx-[215px]`}
    >
      <div className="text-white font-semibold flex-col flex items-center justify-center md:h-[300px] pt-20 pb-14">
        <h1 className="flex items-center md:text-5xl text-2xl">
          {" "}
          <span className="md:mr-5 mr-2">
            {" "}
            <BsArrowLeft />{" "}
          </span>{" "}
          Computer & Laptop
        </h1>
        <nav
          aria-label="breadcrumb"
          className="w-full p-4 flex items-center justify-center md:text-base text-xs dark:bg-gray-800 dark:text-gray-100"
        >
          <ol className="flex h-8 space-x-2 dark:text-gray-100">
            <li className="flex items-center">
              <Link
                rel="noopener noreferrer"
                href="#"
                title="Back to homepage"
                className="flex items-center hover:underline"
              >
                Home
              </Link>
            </li>
            <li className="flex items-center space-x-1">
              <span className="dark:text-gray-400">/</span>
              <Link
                href="/"
                className="flex items-center px-1 capitalize hover:underline"
              >
                Categories
              </Link>
            </li>
            <li className="flex items-center space-x-1">
              <span className="dark:text-gray-400">/</span>
              <Link
                href="/"
                className="flex items-center px-1 capitalize hover:underline"
              >
                Computer & Laptop
              </Link>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default SingleCategorieHeader;
