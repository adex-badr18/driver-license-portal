import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";
import { FiChevronDown, FiChevronUp, FiPlus, FiMinus } from "react-icons/fi";
import Logo from "./utils/Logo";

const DropDownMenu = ({ menuArray }) => {
    return (
        <div className="flex flex-col absolute z-30 left-6 md:left-0 mt-4 min-w-60 bg-white md:bg-[#3d4249] text-[#3d4249] md:text-white shadow-lg divide-y divide-solid divide-neutral-200 md:divide-neutral-600">
            {menuArray.map((menu, index) => (
                <Link
                    key={index}
                    to={menu.to}
                    state={menu.state && menu.state}
                    className="md:hover:bg-green-700 py-2 px-6 capitalize"
                >
                    {menu.title}
                </Link>
            ))}
        </div>
    );
};

const DropDownButton = ({ isOpen, isMobile, title }) => {
    return (
        <div
            className={`flex items-center ${
                isMobile ? "justify-between" : "gap-2 cursor-pointer"
            } text-white`}
        >
            <span className="text-white transition-colors">{title}</span>
            {isMobile ? (
                <span className="">{isOpen ? <FiMinus /> : <FiPlus />}</span>
            ) : (
                <span className="">
                    {isOpen ? <FiChevronUp /> : <FiChevronDown />}
                </span>
            )}
        </div>
    );
};

const dropdownData = {
    applications: [
        { title: "new application", to: "/application", state: {type: 'new'} },
        { title: "renewal", to: "/application", state: {type: 'renewal'} },
        { title: "re-Issue", to: "/application", state: {type: 're-issue'} },
    ],
    services: [
        { title: "update your data", to: "/update" },
        { title: "get appointment slip", to: "/get-slip" },
        { title: "verify license", to: "/verify" },
    ],
    contact: [
        { title: "support center", to: "/support" },
        { title: "capture centers", to: "/centers" },
        { title: "driving schools", to: "/driving-schools" },
    ],
};

const NavBar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { applications, services, contact } = dropdownData;
    const logoStyle = {
        container: "logo grid content-start text-center justify-start",
        h1: "text-green-500 text-3xl md:text-6xl font-extrabold tracking-widest",
        p: "text-gray-300 text-sm md:text-sm",
    };

    const toggleDrawer = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-[#3d4249]">
            <div className="container mx-auto flex justify-center items-center">
                <div className="hidden md:flex">
                    <Link
                        to="/"
                        className="text-white px-6 py-4 hover:bg-green-700 transition-colors"
                    >
                        Home
                    </Link>
                    <div
                        className="relative px-6 py-4 hover:bg-green-700"
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                        <DropDownButton
                            isOpen={isDropdownOpen}
                            isMobile={false}
                            title="License Applications"
                        />

                        {isDropdownOpen && (
                            <DropDownMenu menuArray={applications} />
                        )}
                    </div>
                    <div
                        className="relative px-6 py-4 hover:bg-green-700"
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                    >
                        <DropDownButton
                            isOpen={isServicesOpen}
                            isMobile={false}
                            title="Services"
                        />

                        {isServicesOpen && (
                            <DropDownMenu menuArray={services} />
                        )}
                    </div>
                    <Link
                        to="/faq"
                        className="text-white px-6 py-4 hover:bg-green-700 transition-colors"
                    >
                        FAQ
                    </Link>

                    <div
                        className="relative px-6 py-4 hover:bg-green-700"
                        onMouseEnter={() => setIsContactOpen(true)}
                        onMouseLeave={() => setIsContactOpen(false)}
                    >
                        <DropDownButton
                            isOpen={isContactOpen}
                            isMobile={false}
                            title="Contact"
                        />

                        {isContactOpen && <DropDownMenu menuArray={contact} />}
                    </div>
                </div>
            </div>

            <div className="flex md:hidden justify-between bg-[#3d4249] px-6 py-4">
                <Logo
                    container={logoStyle.container}
                    h1Style={logoStyle.h1}
                    pStyle={logoStyle.p}
                />

                <button
                    className=" text-white text-3xl"
                    onClick={toggleDrawer}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <MdClose /> : <MdMenu />}
                </button>
            </div>

            {isMenuOpen && (
                <div className="absolute top-0 right-0 z-20 h-full w-full md:hidden bg-[#3d4249]">
                    <button
                        className="absolute right-6 top-6 text-white text-3xl"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <MdClose />
                    </button>

                    <div className="absolute top-4 left-6">
                        <Logo
                            container={logoStyle.container}
                            h1Style={logoStyle.h1}
                            pStyle={logoStyle.p}
                        />
                    </div>

                    <div className="flex flex-col px-6 py-4 mt-20 divide-y divide-solid divide-neutral-600">
                        <Link
                            to="/"
                            className="text-white px-6 py-4  transition-colors"
                        >
                            Home
                        </Link>
                        <div
                            className="relative px-6 py-4 "
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >
                            <DropDownButton
                                isOpen={isDropdownOpen}
                                isMobile={true}
                                title="License Applications"
                            />

                            {isDropdownOpen && (
                                <DropDownMenu menuArray={applications} />
                            )}
                        </div>
                        <div
                            className="relative px-6 py-4"
                            onClick={() => setIsServicesOpen(!isServicesOpen)}
                        >
                            <DropDownButton
                                isOpen={isServicesOpen}
                                isMobile={true}
                                title="Services"
                            />

                            {isServicesOpen && (
                                <DropDownMenu menuArray={services} />
                            )}
                        </div>
                        <Link
                            to="/faq"
                            className="text-white px-6 py-4 transition-colors"
                        >
                            FAQ
                        </Link>
                        <div
                            className="relative px-6 py-4"
                            onClick={() => setIsContactOpen(!isContactOpen)}
                        >
                            <DropDownButton
                                isOpen={isContactOpen}
                                isMobile={true}
                                title="Contact"
                            />

                            {isContactOpen && (
                                <DropDownMenu menuArray={contact} />
                            )}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
