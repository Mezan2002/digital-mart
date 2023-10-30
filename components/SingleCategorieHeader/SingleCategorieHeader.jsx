import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import styles from "./styles.module.css";

const SingleCategorieHeader = () => {
  return (
    <div className={styles.backgroundDiv}>
      <div className="text-white font-semibold flex-col flex items-center justify-center h-[300px]">
        <h1 className="flex items-center text-5xl">
          {" "}
          <span className="mr-5">
            {" "}
            <BsArrowLeft />{" "}
          </span>{" "}
          Computer & Laptop
        </h1>
        <nav
          aria-label="breadcrumb"
          className="w-full p-4 flex items-center justify-center dark:bg-gray-800 dark:text-gray-100"
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
