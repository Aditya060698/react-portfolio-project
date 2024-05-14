import { FaLinkedinIn, FaGithub } from "react-icons/fa";
const Navbar = () => {
  return (
    <div>
      <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center"></div>
        <div className="m-8 flex flex-shrink-0 items-center justify-center gap-4 text-2xl">
          <a href="https://www.linkedin.com/in/aditya-mishra-36018918a/"><FaLinkedinIn /></a>
          <a href="https://github.com/Aditya060698"><FaGithub /></a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
