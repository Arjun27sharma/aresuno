import React from "react";
import { FiHardDrive, FiNavigation } from "react-icons/fi";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MainCategories = () => {
  const categories = useSelector((state) => state.categories);


  return (
    <div className="self-center w-full max-w-[1314px] mt-16 max-md:max-w-full max-md:mt-10">
      <div className="text-bold text-center text-4xl font-bold leading-10 self-center whitespace-nowrap mt-8 max-md:max-w-full">
        Explore all the categoriess
      </div>
      <div className="m-auto self-center w-full  max-w-[1100px] mt-12 max-md:max-w-full max-md:mt-10">
        <div className="flex flex-wrap gap-10 justify-center items-start">
          {categories.map((category, index) => (
            category.subcategories.map((subCategory, index) => (
              <Link to={`/category/${category.title} `} className="">
              <div
                key={index}
                className="flex flex-col gap-3 items-center justify-center w-32 h-full"
              >
                <div className="">
                  <img src={subCategory.icon} alt="" className="bg-gray-100 p-4 rounded-xl w-20"/>
                </div>
                <span className="text-sm text-center leading-4 ">
                {subCategory.name}
                </span>
              </div>
              </Link>
            ))
            

          ))}
        </div>
      </div>{" "}
    </div>
  );
};

export default MainCategories;