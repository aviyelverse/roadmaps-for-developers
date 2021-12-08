const Footer = () => {
  return (
    <footer className="bg-template-blue py-8">
      <div className="container flex flex-col md:flex-row items-center">
        <div className="flex flex-1 flex-wrap items-center justify-center md:justify-start gap-12">
          <img src="/img/aviyel.png" alt="Company Logo" width="100" />
          <ul className="flex text-white uppercase gap-12 text-xs">
            <li className="cursor-pointer">
              <a
                href="https://github.com/aviyeldevrel/roadmaps-for-developers"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
        <div className="flex gap-10 mt-12 md:mt-0">
          <a
            href="https://twitter.com/AviyelHq"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="img/twitter.svg" alt="Twitter" width="25" />
          </a>
          <a
            href="https://github.com/aviyeldevrel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="img/github.svg" alt="Twitter" width="25" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
