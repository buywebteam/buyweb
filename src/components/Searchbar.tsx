import { useState } from "react";
import WebsiteDisplay from "./WebsiteDisplay";

const categories = [
  "Exchange Website",
  "Investment Website",
  "Consignment Website",
  "Grant Website",
  "Real Estate Website",
];

const SearchBar = () => {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]);

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div>
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
      </div>

      {/* Optional: Use activeCategory to display filtered content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <WebsiteDisplay />
        {/*<WebsiteDisplay variant="solid" searchTerm={activeCategory} />*/}
      </div>
    </div>
  );
};

export default SearchBar;
