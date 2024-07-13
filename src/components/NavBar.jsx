import { useState } from "react";
import { FiChevronDown, FiChevronUp, FiMinus, FiPlus } from "react-icons/fi";
import { MdClose, MdMenu } from "react-icons/md";
import logo2 from "../assets/images/dannon-logo2.png";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import LinkButton from "./LinkButton";
import coatOfArm from "../assets/coatOfArm.png";

// import logo from "../assets/images/dannon-logo.png";

const DropDownMenu = ({ menuArray, closeMobileMenu }) => {
    const { auth } = useAuth();

    return (
        <div className="flex flex-col absolute z-30 left-6 md:left-0 mt-4 min-w-60 bg-white md:bg-[#3d4249] text-[#3d4249] md:text-white shadow-lg divide-y divide-solid divide-neutral-200 md:divide-neutral-600">
            {menuArray.map((menu, index) => (
                <Link
                    key={index}
                    to={auth?.user ? menu.to : "/login"}
                    state={menu.state && menu.state}
                    onClick={closeMobileMenu}
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
                isMobile ? "justify-between" : "gap-2"
            } text-white cursor-pointer`}
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
        {
            title: "new application",
            to: "/application",
            state: { type: "new" },
        },
        { title: "renewal", to: "/application", state: { type: "renewal" } },
        { title: "re-Issue", to: "/application", state: { type: "re-issue" } },
    ],
    services: [
        { title: "update profile", to: "/profile" },
        { title: "get appointment slip", to: "/get-appointment-slip" },
        // { title: "verify license", to: "/verify-license" },

        // { title: "verify license", to: "/verify" },
    ],
    contact: [
        { title: "support center", to: "/support" },
        { title: "capture centers", to: "/capture-centers" },
        { title: "driving schools", to: "/driving-schools" },
    ],
};

const NavBar = () => {
    const navigate = useNavigate();

    const { auth, setAuth } = useAuth();

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

    const closeMobileMenu = () => {
        setIsMenuOpen(false);
    };

    const logOut = () => {
        sessionStorage.removeItem('auth');
        setAuth({});
        navigate("/");
        closeMobileMenu();
    };

    return (
        <nav className="bg-[#3d4249] print:hidden">
            <div className="container mx-auto flex justify-center items-center">
                <div className="hidden md:flex items-center">
                    <Link
                        to={!auth.user ? "/" : "/dashboard"}
                        className="text-white px-6 py-4 hover:bg-green-700 transition-colors"
                    >
                        Home
                    </Link>

                    {auth?.user && (
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
                    )}

                    {auth.user && (
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
                    )}

                    <Link
                        to="/verify-license"
                        className="text-white px-6 py-4 hover:bg-green-700 transition-colors"
                    >
                        Verify License
                    </Link>
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
                    {auth.user && (
                        <div
                            className="text-white px-6 py-4 hover:bg-green-700 transition-colors"
                            onClick={logOut}
                        >
                            Logout
                        </div>
                    )}
                </div>
            </div>

            <div className="flex md:hidden justify-between bg-white border-b text-grey px-6 py-4 shadow-sm">
                <div className="flex items-center divide-x divide-custom-green">
                    <img
                        src={coatOfArm}
                        alt="Coat of Arm"
                        className="w-12 h-auto pr-3"
                    />
                    <img
                        src={logo2}
                        alt="Dannon Group Logo"
                        className="w-40 h-auto pl-3"
                    />
                </div>

                <button
                    className="text-3xl"
                    onClick={toggleDrawer}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <MdClose /> : <MdMenu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-0 right-0 z-20 w-full md:hidden bg-white">
                    <button
                        className="absolute right-6 top-6 text-grey text-3xl"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <MdClose />
                    </button>

                    <div className="absolute flex items-center top-6 left-6 divide-x divide-custom-green">
                        <img
                            src={coatOfArm}
                            alt="Coat of Arm"
                            className="w-12 h-auto pr-3"
                        />
                        <img
                            src={logo2}
                            alt="Dannon Group Logo"
                            className="w-40 h-auto pl-3"
                        />
                    </div>

                    <div className="flex flex-col h-full px-6 py-4 mt-20 divide-y divide-solid bg-grey divide-neutral-600">
                        <Link
                            to="/"
                            className="text-white px-6 py-4  transition-colors"
                            onClick={closeMobileMenu}
                        >
                            Home
                        </Link>

                        {auth?.user && (
                            <Link
                                to="/profile"
                                className="text-white px-6 py-4  transition-colors"
                                onClick={closeMobileMenu}
                            >
                                Profile
                            </Link>
                        )}

                        {auth?.user && (
                            <Link
                                to="/get-appointment-slip"
                                className="text-white px-6 py-4  transition-colors"
                                onClick={closeMobileMenu}
                            >
                                Print Appointment Slip
                            </Link>
                        )}

                        {auth?.user && (
                            <div
                                className="relative px-6 py-4 "
                                onClick={() =>
                                    setIsDropdownOpen(!isDropdownOpen)
                                }
                            >
                                <DropDownButton
                                    isOpen={isDropdownOpen}
                                    isMobile={true}
                                    title="License Applications"
                                />

                                {isDropdownOpen && (
                                    <DropDownMenu
                                        menuArray={applications}
                                        closeMobileMenu={closeMobileMenu}
                                    />
                                )}
                            </div>
                        )}

                        {auth.user && (
                            <div
                                className="relative px-6 py-4"
                                onClick={() =>
                                    setIsServicesOpen(!isServicesOpen)
                                }
                            >
                                <DropDownButton
                                    isOpen={isServicesOpen}
                                    isMobile={true}
                                    title="Services"
                                />

                                {isServicesOpen && (
                                    <DropDownMenu
                                        menuArray={services}
                                        closeMobileMenu={closeMobileMenu}
                                    />
                                )}
                            </div>
                        )}

                        <Link
                            to="/verify-license"
                            className="text-white px-6 py-4 transition-colors"
                            onClick={closeMobileMenu}
                        >
                            Verify License
                        </Link>
                        <Link
                            to="/faq"
                            className="text-white px-6 py-4 transition-colors"
                            onClick={closeMobileMenu}
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
                                <DropDownMenu
                                    menuArray={contact}
                                    closeMobileMenu={closeMobileMenu}
                                />
                            )}
                        </div>
                    </div>

                    {!auth?.user && (
                        <div className="flex flex-col sm:flex-row sm:justify-end gap-4 w-full px-6 py-6 bg-grey sm:gap-6">
                            <LinkButton
                                buttonText="Login"
                                linkTo="/login"
                                classAttr="text-white hover:bg-green-600 hover:border-green-600 px-4 py-3 text-center bg-transparent border border-white font-medium tracking-widest rounded-lg"
                                onClick={closeMobileMenu}
                            />

                            <LinkButton
                                buttonText="Sign Up"
                                linkTo="/signup"
                                classAttr="bg-custom-green hover:bg-green-600 px-4 py-3 text-center text-white font-medium tracking-widest rounded-lg"
                                onClick={closeMobileMenu}
                            />
                        </div>
                    )}

                    {auth?.user && (
                        <div className="bg-grey pt-6">
                            <button onClick={logOut} className="bg-red-800 w-full text-lg text-white font-medium px-6 py-4">
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            )}
        </nav>
    );
};

export default NavBar;
