import { FaWhatsapp } from "react-icons/fa";

function Header() {
  return (
    <nav className="bg-white shadow sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          <div className="flex-shrink-0">
            <a href="/">
              <h2 className="text-3xl font-semibold">Buyweb</h2>
            </a>
          </div>

          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
              <a href="/">
                <FaWhatsapp className="lg:text-3xl text-2xl text-white" />{" "}
              </a>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
