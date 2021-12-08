import Image from "next/image";

const MainHero = () => {
  return (
    <section className="relative container flex flex-col-reverse lg:flex-row gap-12 mt-14 lg:mt-28 w-full">
      <div className="flex flex-1 flex-col items-center lg:items-start">
        <h2 className="text-template-blue text-3xl md:text-4xl lg:text-5xl text-center lg:text-left mb-6">
          Frontend Roadmap
        </h2>
        <p className="text-template-grey text-lg text-center lg:text-left mb-6">
          If you're a rookie or junior developer looking to advance your
          frontend development career, this roadmap is for you.
        </p>
        <div className="flex justify-center flex-wrap gap-6">
          <a
            href="https://github.com/aviyeldevrel/roadmaps-for-developers/tree/main/RoadmapAssets"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              type="button"
              className="btn flex items-center bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-5 px-7 border border-green-500 hover:border-transparent rounded-lg"
            >
              Full Roadmap on Github ➤
              <Image
                src="/img/github.svg"
                width={30}
                height={30}
                alt="GitHub Logo"
              />
            </button>
          </a>
        </div>
      </div>
      <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
        <img
          src="./img/fullroadmap.png"
          alt="Full roadmap"
          className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 lg:w-full lg:h-full rounded-lg"
        />
      </div>
      <div className="hidden lg:block overflow-hidden bg-green-500 rounded-lg py-3 px-6 bg-opacity-75 absolute h-80 w-1/2 top-32 right-0 lg:-bottom-28 lg:right-0"></div>
    </section>
  );
};

export default MainHero;
