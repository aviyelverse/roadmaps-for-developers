import React from "react";

const MainBody = () => {
  return (
    <section className="bg-template-white py-20 mt-20 lg:mt-60">
      {/* Heading */}
      <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
        <h1 className="text-3xl text-center text-template-blue">Roadmaps</h1>
        <p className="text-center text-template-grey mt-4">
          If you're a rookie or junior developer looking to advance your
          frontend development career, this roadmap is for you.
        </p>
      </div>
      {/* Basics of Internet */}
      <div className="relative mt-20 lg:mt-40">
        <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
          <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
            <img
              className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 lg:w-full lg:h-full"
              src="./img/BasicsOfInternet.png"
              alt=""
            />
          </div>
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h1 className="text-3xl text-template-blue">Basics of Internet</h1>
            <p className="text-template-grey my-5 text-center lg:text-left sm:w-3/4 lg:w-full">
              To start your frontend journey you need to have the basic
              understanding of "How internet actually works".
            </p>
          </div>
        </div>
        {/* Rounded Rectangle */}
        <div className="hidden lg:block overflow-hidden bg-green-500 rounded-lg absolute h-80 w-1/2 -bottom-24 -left-36"></div>
      </div>

      {/* HTML */}
      <div className="relative mt-20 lg:mt-40">
        <div className="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24">
          <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
            <img
              className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 lg:w-full lg:h-full rounded-lg"
              src="./img/BasicsOfInternet.png"
              alt=""
            />
          </div>
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h1 className="text-3xl text-template-blue">HTML</h1>
            <p className="text-template-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
              Html is the foundation of everthing. It stands for Hypertext
              Markup Language.
            </p>
          </div>
        </div>
        {/* Back Rectangle */}
        <div className="hidden lg:block overflow-hidden bg-green-500 rounded-lg absolute h-80 w-1/2 top-32 right-0 lg:-bottom-28 lg:right-200"></div>
      </div>
    </section>
  );
};

export default MainBody;
