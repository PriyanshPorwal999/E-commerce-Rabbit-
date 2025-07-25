import React from "react";
import mensCollectionImage from "../../assets/mens-collection.webp";
import womensCollectionImage from "../../assets/womens-collection.webp";
import { Link } from "react-router";

const GenderCollectionSection = () => {
  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto flex flex-col md:flex-row gap-8">
        {/* Women's Collection */}
        <div className="relative flex-1">
          <img
            src={womensCollectionImage}
            alt="Women's Collection"
            className="w-full h-[700px] object-cover"
          ></img>
          <div className="absolute bottom-8 left-8 bg-white/90 p-4">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Women's Collection
            </h2>
            <Link
              to="/collections/all?gender=women"
              className="text-gray-900 underline"
            >Shop Now</Link>
          </div>
        </div>

        {/* Men's Collection */}
        <div className="relative flex-1">
          <img
            src={mensCollectionImage}
            alt="men's Collection"
            className="w-full h-[700px] object-cover"
          ></img>
          <div className="absolute bottom-8 left-8 bg-white/90 p-4">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              men's Collection
            </h2>
            <Link
              to="/collections/all?gender=men"
              className="text-gray-900 underline"
            >Shop Now</Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default GenderCollectionSection;
