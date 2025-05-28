import { useState, useEffect } from "react";
import WebsiteDisplay from "./WebsiteDisplay";
import { websites } from "../websitedata/data";
import Spinner from "./Spinner";

const categories = [
  "Exchange Website",
  "Consignment or Logistics Website",
  "Investment Website",
  //"Grant Website",
  //"Real Estate Website",
];

const SearchBar = () => {
  const [activeCategory, setActiveCategory] = useState<string>(() => {
    // Get saved category from localStorage or fallback to first category
    return localStorage.getItem("activeCategory") || categories[0];
  });

  const [filteredWebsites, setFilteredWebsites] = useState<
    {
      id: number;
      name: string;
      image: string;
      price: string;
      videoLink: string;
      chatLink: string;
      category: string;
    }[]
  >([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    // Save active category to localStorage
    localStorage.setItem("activeCategory", activeCategory);

    setLoading(true);
    const timer = setTimeout(() => {
      const filtered = websites.filter(
        (site) =>
          site.category.trim().toLowerCase() ===
          activeCategory.trim().toLowerCase()
      );
      setFilteredWebsites(filtered);
      setLoading(false);
    }, 1000); // Simulated loading delay

    return () => clearTimeout(timer);
  }, [activeCategory]);

  return (
    <div id="websites" className="scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div>
          <h1 className="text-center font-bold text-3xl mb-14">
            Explore Website Category
          </h1>
        </div>
        <div className="flex justify-between items-center flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm rounded-full cursor-pointer font-semibold transition-colors duration-200 ${
                activeCategory === category
                  ? "bg-black text-white"
                  : "border border-black text-black"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {loading ? (
          <div className="text-center py-20 font-semibold text-lg">
            <Spinner />
          </div>
        ) : filteredWebsites.length > 0 ? (
          <WebsiteDisplay websites={filteredWebsites} />
        ) : (
          <div className="text-center py-20 font-semibold text-base">
            No website found. Check back later.
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
