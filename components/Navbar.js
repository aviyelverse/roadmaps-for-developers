import { MenuIcon } from "@heroicons/react/outline";
const Navbar = () => {
  return (
    <nav className="container bg-white rounded-lg flex items-center py-3 mt-4 sm:mt-5">
      <div className="py-1 w-32">
        <img src="./img/Frontend.svg" alt="" />
      </div>
      <ul className="hidden sm:flex flex-1 justify-end items-center gap-12 text-landing-blue uppercase text-xs">
        <li className="cursor-pointer">
          <a
            href="https://github.com/aviyeldevrel/roadmaps-for-developers"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </li>
        <a
          href="https://github.com/aviyeldevrel/roadmaps-for-developers/tree/main/RoadmapAssets"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            type="button"
            className="bg-green-500 text-white rounded-lg px-7 py-3 uppercase hover:bg-red-500"
          >
            Full roadmap
          </button>
        </a>
      </ul>
      <div className="flex sm:hidden flex-1 justify-end">
        <MenuIcon className="h-8 w-8" />
      </div>
    </nav>
  );
};

export default Navbar;
