import { footerLinks } from "../../config/ui/footerLinksConfig";

const Footer = () => {
  return (
    <>
      <footer className="bottom-0 w-full px-8 md:px-20 lg:px-40 py-6 md:py-8 lg:py-10 shadow-sm shadow-neutral-500 bg-[#2B293D] text-white">
        <div className="flex flex-wrap justify-center md:justify-between gap-x-10 gap-y-6">
          {footerLinks.map((section) => (
            <div
              key={section.heading}
              className="flex flex-col items-start justify-start space-y-2 md:space-y-1 md:flex-1 min-w-[200px] max-w-[300px]"
            >
              <h3 className="text-lg font-bold whitespace-nowrap md:h-10 flex items-center">
                {section.heading}
              </h3>
              <ul className="text-sm text-[#A9A9A9]">
                {section.links.map((link) => (
                  <li key={link.name} className="text-xs md:text-sm">
                    <a href={link.path}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t-[0.3px] border-[#A9A9A9] text-center text-xs md:text-sm text-[#A9A9A9] mt-6 md:mt-8 pt-4">
          © 2023 Events. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
