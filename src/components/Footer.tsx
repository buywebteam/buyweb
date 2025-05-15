import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="text-center sm:text-left mb-6 sm:mb-0">
            <a href="/">
              <h2 className="text-3xl font-semibold">Buyweb</h2>
            </a>{" "}
            <p className="mt-2 text-white">
              Everything you need to launch your website—fast, easy, and
              affordable.{" "}
            </p>
          </div>

          <div className="flex items-center gap-4 text-white">
            <span className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
              <a href="https://wa.me/message/4AJYUNZJISVAG1">
                <FaWhatsapp className="lg:text-3xl text-2xl text-white" />{" "}
              </a>
            </span>
          </div>
        </div>
        <div className="my-6 border-t border-white"></div>

        <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
          <p className="text-white">
            &copy; {new Date().getFullYear()} Buyweb. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
