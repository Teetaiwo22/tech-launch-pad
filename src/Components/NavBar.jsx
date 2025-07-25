import { NavLink } from "react-router-dom";
import Logo from "../assets/Images/logo.png";


const NavBar = () => {
  const linkClass = ({isActive}) => 
    isActive ? 
      "bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2" 
      : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"

  return (
    <nav className="bg-indigo-700 border-b border-indigo-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <NavLink
              to="/"
              className="flex flex-shrink-0 items-center mr-4"
            >
              <img src={Logo} alt="React Jobs" className="h-10 w-auto" />
              <span className="hidden md:block text-white text-2xl ml-2 font-bold">
                TechLaunchpad
              </span>
            </NavLink>

            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <NavLink
                  to="/"
                  className= {linkClass}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/internships"
                  className= {linkClass}
                >
                  Internships
                </NavLink>
                <NavLink
                  to="/add-internship"
                  className= {linkClass}
                >
                  Add Internships
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
