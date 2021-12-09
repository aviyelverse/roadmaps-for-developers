import React from "react";

const MainBody = () => {
  return (
    <section className="bg-template-light-purple py-20 mt-20 lg:mt-60">
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
              understanding of "How internet actually works".The Internet is a
              global network of billions of computers and other electronic
              devices. With the Internet, it's possible to access almost any
              information, communicate with anyone else in the world, and do
              much more. You can do all of this by connecting a computer to the
              Internet, which is also called going online.
            </p>
          </div>
        </div>
        {/* Rounded Rectangle */}
        <div className="hidden lg:block overflow-hidden bg-template-purple rounded-lg absolute h-80 w-1/2 -bottom-24 -left-36"></div>
      </div>

      {/* HTML */}
      <div className="relative mt-20 lg:mt-40">
        <div className="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24">
          <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
            <img
              className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 lg:w-full lg:h-full rounded-lg"
              src="./img/Html.png"
              alt=""
            />
          </div>
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h1 className="text-3xl text-template-blue">HTML</h1>
            <p className="text-template-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
              The HyperText Markup Language, or HTML is the standard markup
              language for documents designed to be displayed in a web browser.
              It can be assisted by technologies such as Cascading Style Sheets
              (CSS) and scripting languages such as JavaScript.
            </p>
          </div>
        </div>
        {/* Back Rectangle */}
        <div className="hidden lg:block overflow-hidden bg-green-500 rounded-lg absolute h-80 w-1/2 top-32 right-0 lg:-bottom-28 lg:right-200"></div>
      </div>

      {/* CSS */}
      <div className="relative mt-20 lg:mt-40">
        <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
          <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
            <img
              className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 lg:w-full lg:h-full"
              src="./img/Css.png"
              alt=""
            />
          </div>
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h1 className="text-3xl text-template-blue">CSS</h1>
            <p className="text-template-grey my-5 text-center lg:text-left sm:w-3/4 lg:w-full">
              Cascading Style Sheets (CSS) is a style sheet language used for
              describing the presentation of a document written in a markup
              language such as HTML.CSS is a cornerstone technology of the World
              Wide Web, alongside HTML and JavaScript.
            </p>
          </div>
        </div>
        {/* Rounded Rectangle */}
        <div className="hidden lg:block overflow-hidden bg-template-purple rounded-lg absolute h-80 w-1/2 -bottom-24 -left-36"></div>
      </div>

      {/* Javascript */}
      <div className="relative mt-20 lg:mt-40 pb-8">
        <div className="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24">
          <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
            <img
              className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 lg:w-full lg:h-full rounded-lg"
              src="./img/Javascript.png"
              alt=""
            />
          </div>
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h1 className="text-3xl text-template-blue">Javascript</h1>
            <p className="text-template-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
              JavaScript,often abbreviated as JS, is a programming language that
              conforms to the ECMAScript specification.JavaScript is high-level,
              often just-in-time compiled and multi-paradigm. It has dynamic
              typing, prototype-based object-orientation and first-class
              functions.Alongside HTML and CSS, JavaScript is one of the core
              technologies of the World Wide Web Over 97% of websites use it
              client-side for web page behavior,often incorporating third-party
              libraries.All major web browsers have a dedicated JavaScript
              engine to execute the code on the user's device.
            </p>
          </div>
        </div>
        {/* Back Rectangle */}
        <div className="hidden lg:block overflow-hidden bg-green-500 rounded-lg absolute h-80 w-1/2 pb-11 top-42 right-0 lg:-bottom-28 lg:right-200"></div>
      </div>

      {/* WEB security */}
      <div className="relative mt-20 lg:mt-40 pb-11">
        <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
          <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
            <img
              className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 lg:w-full lg:h-full"
              src="./img/Websecurity.png"
              alt=""
            />
          </div>
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h1 className="text-3xl text-template-blue">Web Security</h1>
            <p className="text-template-grey my-5 text-center lg:text-left sm:w-3/4 lg:w-full">
              web security refers to the protective measures and protocols that
              organizations adopt to protect the organization from, cyber
              criminals and threats that use the web channel. Web security is
              critical to business continuity and to protecting data, users and
              companies from risk.
            </p>
          </div>
        </div>
        {/* Rounded Rectangle */}
        <div className="hidden lg:block overflow-hidden bg-template-purple rounded-lg absolute h-80 w-1/2 -bottom-48 -left-36"></div>
      </div>

      {/* Version Control */}
      <div className="relative mt-20 lg:mt-40 pt-8">
        <div className="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24">
          <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
            <img
              className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 lg:w-full lg:h-full rounded-lg"
              src="./img/VersionControl.png"
              alt=""
            />
          </div>
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h1 className="text-3xl text-template-blue">Version Control</h1>
            <p className="text-template-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
              Version control, also known as source control, is the practice of
              tracking and managing changes to software code. Version control
              systems are software tools that help software teams manage changes
              to source code over time.
            </p>
          </div>
        </div>
        {/* Back Rectangle */}
        <div className="hidden lg:block overflow-hidden bg-green-500 rounded-lg absolute h-80 w-1/2 top-18 right-0 lg:-bottom-28 lg:right-200"></div>
      </div>

      {/* Testing */}
      <div className="relative mt-20 lg:mt-40 pt-8">
        <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
          <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
            <img
              className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 lg:w-full lg:h-full"
              src="./img/Testing.png"
              alt=""
            />
          </div>
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h1 className="text-3xl text-template-blue">Testing</h1>
            <p className="text-template-grey my-5 text-center lg:text-left sm:w-3/4 lg:w-full">
              Code-based testing corresponds to the testing that is carried out
              on code development, code inspection, unit testing in software
              development process. The Code-based testing consists of following
              testing: Dynamic Testing - Statement coverage, Branch coverage,
              Path coverage.
            </p>
          </div>
        </div>
        {/* Rounded Rectangle */}
        <div className="hidden lg:block overflow-hidden bg-template-purple rounded-lg absolute h-80 w-1/2 -bottom-48 -left-36"></div>
      </div>

      {/* Package Manager */}
      <div className="relative mt-20 lg:mt-40 pt-11 pb-10">
        <div className="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24">
          <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
            <img
              className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 lg:w-full lg:h-full rounded-lg"
              src="./img/PackageManager.png"
              alt=""
            />
          </div>
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h1 className="text-3xl text-template-blue">Package Manager</h1>
            <p className="text-template-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
              A package manager or package-management system is a collection of
              software tools that automates the process of installing,
              upgrading, configuring, and removing computer programs for a
              computer in a consistent manner.Early package managers, like from
              1994, had no automatic dependency resolution but could already
              drastically simplify the process of adding and removing software
              from a running system.By around 1995, beginning with CPAN, package
              managers began doing the work of downloading packages from a
              repository, automatically resolving its dependencies and
              installing them as needed, making it much easier to install,
              uninstall and update software from a system.
            </p>
          </div>
        </div>
        {/* Back Rectangle */}
        <div className="hidden lg:block overflow-hidden bg-green-500 rounded-lg absolute h-80 w-1/2 top-14 right-0 lg:-bottom-48 lg:right-200"></div>
      </div>

      {/* Hosting */}
      <div className="relative mt-20 lg:mt-40 pt-11">
        <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
          <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
            <img
              className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 lg:w-full lg:h-full"
              src="./img/Hosting.png"
              alt=""
            />
          </div>
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h1 className="text-3xl text-template-blue">Hosting</h1>
            <p className="text-template-grey my-5 text-center lg:text-left sm:w-3/4 lg:w-full">
              A web hosting service is a type of Internet hosting service that
              hosts websites for clients, i.e. it offers the facilities required
              for them to create and maintain a site and makes it accessible on
              the World Wide Web. Companies providing web hosting services are
              sometimes called web hosts.
            </p>
          </div>
        </div>
        {/* Rounded Rectangle */}
        <div className="hidden lg:block overflow-hidden bg-template-purple rounded-lg absolute h-80 w-1/2  top-14 -bottom-24 -left-36"></div>
      </div>

      {/* Modern CSS */}
      <div className="relative mt-20 lg:mt-40 pt-11">
        <div className="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24">
          <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
            <img
              className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 lg:w-full lg:h-full rounded-lg"
              src="./img/ModernCss.png"
              alt=""
            />
          </div>
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h1 className="text-3xl text-template-blue">Modern CSS</h1>
            <p className="text-template-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
              Modern CSS
            </p>
          </div>
        </div>
        {/* Back Rectangle */}
        <div className="hidden lg:block overflow-hidden bg-green-500 rounded-lg absolute h-80 w-1/2 top-14 right-0 lg:-bottom-28 lg:right-200"></div>
      </div>

      {/* Apis */}
      <div className="relative mt-20 lg:mt-40 pt-11">
        <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
          <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
            <img
              className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 lg:w-full lg:h-full"
              src="./img/Api.png"
              alt=""
            />
          </div>
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h1 className="text-3xl text-template-blue">API</h1>
            <p className="text-template-grey my-5 text-center lg:text-left sm:w-3/4 lg:w-full">
              API is the acronym for Application Programming Interface, which is
              a software intermediary that allows two applications to talk to
              each other.
            </p>
          </div>
        </div>
        {/* Rounded Rectangle */}
        <div className="hidden lg:block overflow-hidden bg-template-purple rounded-lg absolute h-80 w-1/2 top-14 -bottom-24 -left-36"></div>
      </div>

      {/* Modern Frameworks */}
      <div className="relative mt-20 lg:mt-40 pt-11">
        <div className="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24">
          <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
            <img
              className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 lg:w-full lg:h-full rounded-lg"
              src="./img/ModernFrameworks.png"
              alt=""
            />
          </div>
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h1 className="text-3xl text-template-blue">Modern Frameworks</h1>
            <p className="text-template-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
              Modern Frameworks
            </p>
          </div>
        </div>
        {/* Back Rectangle */}
        <div className="hidden lg:block overflow-hidden bg-green-500 rounded-lg absolute h-80 w-1/2 top-14 right-0 lg:-bottom-28 lg:right-200"></div>
      </div>

      {/* Static site Generators */}
      <div className="relative mt-20 lg:mt-40 pt-11 pb-20">
        <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
          <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
            <img
              className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 lg:w-full lg:h-full"
              src="./img/StaticSiteGenerators.png"
              alt=""
            />
          </div>
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h1 className="text-3xl text-template-blue">
              Static site Generators
            </h1>
            <p className="text-template-grey my-5 text-center lg:text-left sm:w-3/4 lg:w-full">
              A static site generator is a tool that generates a full static
              HTML website based on raw data and a set of templates.
              Essentially, a static site generator automates the task of coding
              individual HTML pages and gets those pages ready to serve to users
              ahead of time. Because these HTML pages are pre-built, they can
              load very quickly in users' browsers.
            </p>
          </div>
        </div>
        {/* Rounded Rectangle */}
        <div className="hidden lg:block overflow-hidden bg-template-purple rounded-lg absolute h-80 w-1/2 top-14 right-0 -bottom-24 -left-36 "></div>
      </div>
    </section>
  );
};

export default MainBody;
