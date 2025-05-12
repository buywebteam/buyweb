import Button from "./Button";

function Hero() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-40">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold lg:text-5xl text-3xl text-center lg:w-[700px]">
            Buy Beautiful Ready-Made Websites at a Cheaper Rate
          </h1>
          <p className="mt-8 lg:text-2xl text-center lg:w-[900px]">
            Discover a wide range of beautifully crafted, ready-made websites
            tailored for your business—at a price that fits your budget
          </p>
          <div className="mt-8 flex lg:flex-row md:flex-row flex-col justify-center items-center w-full gap-4">
            <a href="#websites">
              <Button label="Explore websites" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
