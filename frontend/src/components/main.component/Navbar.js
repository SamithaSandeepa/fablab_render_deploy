import React, { Fragment, useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";
import { useLocation } from "react-router-dom";
import { TbArrowBigUpLines } from "react-icons/tb";

const Navbar = ({ logout, isAuthenticated }) => {
  const location = useLocation();
  console.log(location.pathname);
  const [redirect, setRedirect] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [open, setOpen] = useState(false);
  const [showNewsDropdown, setShowNewsDropdown] = useState(false);
  const [showProjectDropdown, setShowProjectDropdown] = useState(false);
  const [allpages, setAllPages] = useState([]);
  const [ShowEvent, setShowEvent] = useState(false);

  const logout_user = () => {
    logout();
    setRedirect(true);
    setAllPages(false);
  };
  const guestLinksforAdmin = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/industry", label: "industry 4.0 technologies" },
    { path: "/education", label: "Education" },
    { path: "/fablabmakandura", label: "Fablab Makandura" },
    { path: "/contactus", label: "Contact Us" },
  ];
  const classNames = guestLinksforAdmin.map((link) => {
    return location.pathname === link.path
      ? "flex bg-[#0A4D68] text-white px-4 py-2 rounded-md text-sm font-medium"
      : "flex items-center text-sm px-4 py-2 font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:underline transition duration-150 ease-in-out";
  });

  const guestLinks = () => (
    <>
      <li className="nav-item text-sm px-1">
        <Link
          className={
            location.pathname === "/about"
              ? "bg-[#0A4D68] text-white px-4 py-2 rounded-md text-sm font-medium"
              : "text-gray-700 hover:bg-[#F1F6F9] hover:text-gray-900 px-4 py-2 rounded-md text-sm font-medium"
          }
          to="/about"
        >
          WHO WE ARE
        </Link>
      </li>
      <li className="nav-item text-sm px-1 relative group">
        <a className="text-gray-700 hover:text-gray-900 hover:underline px-4 py-3 rounded-md text-sm font-medium">
          WHAT WE DO
        </a>
        <div
          className="hidden absolute top-full mt-3 bg-white  border border-gray-300 shadow-lg rounded-lg group-hover:block"
          style={{ width: "max-content" }}
        >
          <div class="grid grid-row-3 divide-y ">
            <div className="py-4">
              <Link
                className={
                  location.pathname === "/education"
                    ? "text-[#0A4D68] px-4 py-2 rounded-md text-sm font-medium"
                    : "text-gray-700 hover:bg-[#F1F6F9] hover:text-gray-900 px-4 py-2 rounded-md text-sm font-medium"
                }
                to="/education"
              >
                Education & Training
              </Link>
            </div>
            <div className="py-4">
              <Link
                className={
                  location.pathname === "/fablab"
                    ? "text-[#0A4D68] px-4 py-2 rounded-md text-sm font-medium"
                    : "text-gray-700 hover:bg-[#F1F6F9] hover:text-gray-900 px-4 py-2 rounded-md text-sm font-medium"
                }
                to="/fablab"
              >
                FabLabs for Innovation and Social Development
              </Link>
            </div>
            <div className="py-4">
              <Link
                className={
                  location.pathname === "/fablab"
                    ? "text-[#0A4D68] px-4 py-2 rounded-md text-sm font-medium"
                    : "text-gray-700 hover:bg-[#F1F6F9] hover:text-gray-900 px-4 py-2 rounded-md text-sm font-medium"
                }
                to="/fablab"
              >
                Product Development
              </Link>
            </div>
            <div className="py-4">
              <Link
                className={
                  location.pathname === "/fablab"
                    ? "text-[#0A4D68] px-4 py-2 rounded-md text-sm font-medium"
                    : "text-gray-700 hover:bg-[#F1F6F9] hover:text-gray-900 px-4 py-2 rounded-md text-sm font-medium"
                }
                to="/fablab"
              >
                Project and Program Management
              </Link>
            </div>
            <div className="py-4">
              <Link
                className={
                  location.pathname === "/fablab"
                    ? "text-[#0A4D68] px-4 py-2 rounded-md text-sm font-medium"
                    : "text-gray-700 hover:bg-[#F1F6F9] hover:text-gray-900 px-4 py-2 rounded-md text-sm font-medium"
                }
                to="/fablab"
              >
                Consultancy and Advisory
              </Link>
            </div>
            <div className="py-4">
              <Link
                className={
                  location.pathname === "/fablab"
                    ? "text-[#0A4D68] px-4 py-2 rounded-md text-sm font-medium"
                    : "text-gray-700 hover:bg-[#F1F6F9] hover:text-gray-900 px-4 py-2 rounded-md text-sm font-medium"
                }
                to="/fablab"
              >
                International Technology Transfer
              </Link>
            </div>
          </div>
        </div>
      </li>
      <li className="nav-item text-sm px-1">
        <Link
          className={
            location.pathname === "/industry"
              ? "bg-[#0A4D68] text-white px-4 py-2 rounded-md text-sm font-medium"
              : "text-gray-700 hover:bg-[#F1F6F9] hover:text-gray-900 px-4 py-2 rounded-md text-sm font-medium"
          }
          to="/industry"
        >
          INDUSTRY 4.0
        </Link>
      </li>
      <li className="nav-item text-sm px-1 relative group">
        <a className="text-gray-700 hover:text-gray-900 hover:underline px-4 py-3 rounded-md text-sm font-medium">
          OUR VENTURES 
        </a>
        <div
          className="hidden absolute top-full mt-3 bg-white  border border-gray-300 shadow-lg rounded-lg group-hover:block"
          style={{ width: "max-content" }}
        >
          <div class="grid grid-row-3 divide-y ">
            <div className="py-4">
              <Link
                className={
                  location.pathname === "/fablabmakandura"
                    ? "text-[#0A4D68] px-4 py-2 rounded-md text-sm font-medium"
                    : "text-gray-700 hover:bg-[#F1F6F9] hover:text-gray-900 px-4 py-2 rounded-md text-sm font-medium"
                }
                to="/fablabmakandura"
              >
                FabLab Makandura
              </Link>
            </div>
            <div className="py-4">
              <Link
                className={
                  location.pathname === "/fablab"
                    ? "text-[#0A4D68] px-4 py-2 rounded-md text-sm font-medium"
                    : "text-gray-700 hover:bg-[#F1F6F9] hover:text-gray-900 px-4 py-2 rounded-md text-sm font-medium"
                }
                to="/fablab"
              >
                Universal Energy
              </Link>
            </div>
            <div className="py-4">
              <Link
                className={
                  location.pathname === "/fablab"
                    ? "text-[#0A4D68] px-4 py-2 rounded-md text-sm font-medium"
                    : "text-gray-700 hover:bg-[#F1F6F9] hover:text-gray-900 px-4 py-2 rounded-md text-sm font-medium"
                }
                to="/fablab"
              >
                Makandura Model Farm
              </Link>
            </div>
            <div className="py-4">
              <Link
                className={
                  location.pathname === "/fablab"
                    ? "text-[#0A4D68] px-4 py-2 rounded-md text-sm font-medium"
                    : "text-gray-700 hover:bg-[#F1F6F9] hover:text-gray-900 px-4 py-2 rounded-md text-sm font-medium"
                }
                to="/fablab"
              >
                Center for Bio-Technology
              </Link>
            </div>
          </div>
        </div>
      </li>
      <li className="nav-item text-sm px-1">
        <Link
          className={
            location.pathname === "/contactus"
              ? "bg-[#0A4D68] text-white px-4 py-2 rounded-md text-sm font-medium"
              : "text-gray-700 hover:bg-[#F1F6F9] hover:text-gray-900 px-4 py-2 rounded-md text-sm font-medium"
          }
          to="/contactus"
        >
          CONTACT US
        </Link>
      </li>
    </>
  );
  const authLinks = () => (
    <>
      <li className="nav-item text-sm px-1">
        <Link
          className={
            location.pathname === "/admin"
              ? "bg-[#0A4D68] text-white px-4 py-2 rounded-md text-sm font-medium"
              : "text-gray-700 hover:bg-[#F1F6F9] hover:text-gray-900 px-4 py-2 rounded-md text-sm font-medium"
          }
          to="/admin"
        >
          Admin
        </Link>
      </li>

      {/* <li className="nav-item text-sm">
        <Link
          className={
            location.pathname === "/firstpage"
              ? "bg-[#0A4D68] text-white px-4 py-2 rounded-md text-sm font-medium"
              : "text-gray-700 hover:bg-[#F1F6F9] hover:text-gray-900 px-4 py-2 rounded-md text-sm font-medium"
          }
          to="/firstpage"
        >
          FirstPage
        </Link>
      </li> */}
      <div className="relative">
        <button
          className={
            location.pathname === "/create-event" ||
            location.pathname === "/show-all-event"
              ? "flex bg-[#0A4D68] text-white px-4 py-2 rounded-md text-sm font-medium"
              : "flex items-center text-sm px-4 py-2 font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:underline transition duration-150 ease-in-out"
          }
          onMouseEnter={() => setShowEvent(true)}
          onMouseLeave={() => setShowEvent(false)}
        >
          Events
          <svg className="ml-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className={
            "absolute right-0 w-48 rounded-md shadow-lg " +
            (ShowEvent ? "block" : "hidden")
          }
          onMouseEnter={() => setShowEvent(true)}
          onMouseLeave={() => setShowEvent(false)}
        >
          <div className="bg-white rounded-md shadow-xs">
            <Link
              className={
                location.pathname === "/create-event"
                  ? "block px-4 py-2 text-sm text-gray-700 bg-gray-100 text-blue-900"
                  : "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              }
              to="/create-event"
            >
              Create Event
            </Link>
            <Link
              className={
                location.pathname === "/show-all-event"
                  ? "block px-4 py-2 text-sm text-gray-700 bg-gray-100 text-gray-900"
                  : "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              }
              to="/show-all-event"
            >
              Show All Event
            </Link>
          </div>
        </div>
      </div>
      <div className="relative">
        <button
          className={
            location.pathname === "/create-news" ||
            location.pathname === "/show-all-news"
              ? "flex bg-[#0A4D68] text-white px-4 py-2 rounded-md text-sm font-medium"
              : "flex items-center text-sm px-4 py-2 font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:underline transition duration-150 ease-in-out"
          }
          onMouseEnter={() => setShowNewsDropdown(true)}
          onMouseLeave={() => setShowNewsDropdown(false)}
        >
          News
          <svg className="ml-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className={
            "absolute right-0 w-48 rounded-md shadow-lg " +
            (showNewsDropdown ? "block" : "hidden")
          }
          onMouseEnter={() => setShowNewsDropdown(true)}
          onMouseLeave={() => setShowNewsDropdown(false)}
        >
          <div className="bg-white rounded-md shadow-xs">
            <Link
              className={
                location.pathname === "/create-news"
                  ? "block px-4 py-2 text-sm text-gray-700 bg-gray-100 text-blue-900"
                  : "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              }
              to="/create-news"
            >
              Create News
            </Link>
            <Link
              className={
                location.pathname === "/show-all-news"
                  ? "block px-4 py-2 text-sm text-gray-700 bg-gray-100 text-gray-900"
                  : "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              }
              to="/show-all-news"
            >
              Show All News
            </Link>
          </div>
        </div>
      </div>
      <div className="relative">
        <button
          className={
            location.pathname === "/create-project" ||
            location.pathname === "/show-all-project"
              ? "flex bg-[#0A4D68] text-white px-4 py-2 rounded-md text-sm font-medium"
              : "flex items-center text-sm px-4 py-2 font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:underline transition duration-150 ease-in-out"
          }
          onMouseEnter={() => setShowProjectDropdown(true)}
          onMouseLeave={() => setShowProjectDropdown(false)}
        >
          Project Makandura
          <svg className="ml-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className={
            "absolute right-0 w-48 rounded-md shadow-lg " +
            (showProjectDropdown ? "block" : "hidden")
          }
          onMouseEnter={() => setShowProjectDropdown(true)}
          onMouseLeave={() => setShowProjectDropdown(false)}
        >
          <div className="bg-white rounded-md shadow-xs">
            <Link
              className={
                location.pathname === "/create-project"
                  ? "block px-4 py-2 text-sm text-gray-700 bg-gray-100 text-blue-900"
                  : "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              }
              to="/create-project"
            >
              Create Project
            </Link>
            <Link
              className={
                location.pathname === "/show-all-project"
                  ? "block px-4 py-2 text-sm text-gray-700 bg-gray-100 text-gray-900"
                  : "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              }
              to="/show-all-projects"
            >
              Show All News
            </Link>
          </div>
        </div>
      </div>

      <div className="relative">
        <button
          className={classNames}
          onMouseEnter={() => setAllPages(true)}
          onMouseLeave={() => setAllPages(false)}
        >
          All Pages
          <svg className="ml-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className={
            "absolute right-0 w-48 rounded-md shadow-lg " +
            (allpages ? "block" : "hidden")
          }
          onMouseEnter={() => setAllPages(true)}
          onMouseLeave={() => setAllPages(false)}
        >
          <div className="bg-white rounded-md shadow-xs">
            {guestLinksforAdmin.map((link, index) => (
              <Link
                key={index}
                className={
                  location.pathname === link.path
                    ? "block px-4 py-2 text-sm text-gray-700 bg-gray-100 text-blue-900"
                    : "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                }
                to={link.path}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <li className="nav-item text-sm">
        <Link
          className={
            location.pathname === "/signup"
              ? "bg-[#0A4D68] text-white px-4 py-2 rounded-md text-sm font-medium"
              : "text-gray-700 hover:bg-[#F1F6F9] hover:text-gray-900 px-4 py-2 rounded-md text-sm font-medium"
          }
          to="/signup"
        >
          Sign Up
        </Link>
      </li>
      <li className="nav-item text-sm">
        <button
          className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 px-4 py-2 rounded-md text-sm font-medium"
          onClick={logout_user}
        >
          Logout
        </button>
      </li>
    </>
  );

  return (
    <>
      <div className="container mx-auto block relative">
        <div className="w-full fixed top-0 left-0">
          <div className="flex flex-wrap items-center justify-center px-1 md:px-10 py-2 md:py-0 bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg transition duration-300 ease-in-out">
            <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
              <span className="text-3xl text-indigo-600 mr-1 flex-shrink-0">
                <img
                  src="https://fablanka-website.s3.ap-southeast-1.amazonaws.com/images/24x24.png"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              </span>
              <Link to="/">
                <a className="navbar-brand pl-2 font-serif">
                  Fablanka Fundation
                </a>
              </Link>
            </div>

            <div
              onClick={() => setOpen(!open)}
              className="text-3xl absolute right-4 item-center cursor-pointer md:hidden"
            >
              {/* <MDBIcon fas icon={open ? "close" : "bars"} /> */}X
            </div>
            <ul
              className={`md:flex md:items-center justify-center md:pb-0 pb-12 absolute md:static md:z-auto z-50 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
                open ? "top-20" : "top-[-490px]"
              } md:p-0 md:m-0
  `}
              style={{ zIndex: 9999 }} // add this line to set the z-index value
            >
              {isAuthenticated ? authLinks() : guestLinks()}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(Navbar);
