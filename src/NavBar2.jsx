import { useState } from "react";
import mcgillLogo from './assets/mcgill_logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-red-50 p-6 font-serif_title shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">

        <div className="flex justify-center md:justify-start">
          <a
            href="https://www.mcgill.ca/"
            target="_blank"
            rel="noopener noreferrer"
         
          >
            <img src={mcgillLogo} className="w-36" alt="McGill Logo" />
          </a>


        </div>


        <div>
          <h1 className="text-[18px] text-red-600 mb-2">
            McGill Hydrogen Embrittlement Facility
          </h1>
          <div className="flex items-center text-red-600 text-[16px]">
            <i className="fa-regular fa-copyright mr-1"></i>
            <span>2025 Privacy Policy</span>
          </div>
        </div>


        <div className="flex flex-col gap-2">
          <a
            href="mailto:salim.brahimi@mcgill.ca"
            className="text-red-600 hover:text-red-400 text-[16px]"
          >
            Contact Us
          </a>
          <a
            href="https://scholar.google.ca/citations?user=5aLhwjQAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 hover:text-red-400 text-[16px]"
          >
            Google Scholar
          </a>
        </div>


        <div className="flex flex-col gap-2">
          <a
            href="https://www.youtube.com/watch?v=o-k962slz9U&t=48s"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-red-600 hover:text-red-400 text-[16px]"
          >
            <i className="fa-brands fa-youtube text-[20px] w-[24px] mr-2"></i>
            YouTube
          </a>
          <a
            href="https://www.linkedin.com/company/mhef/?originalSubdomain=ca"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-red-600 hover:text-red-400 text-[16px]"
          >
            <i className="fa-brands fa-linkedin text-[20px] w-[24px] mr-2"></i>
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
