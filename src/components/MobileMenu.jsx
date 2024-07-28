import { Link, useNavigate } from "react-router-dom";
import LinkButton from "./LinkButton";
import DropDownButton from "./DropDownButton";
import DropDownMenu from "./DropdownMenu";
import coatOfArm from "../assets/coatOfArm.png";
import logo from "../assets/Logo.svg";
import { MdClose } from "react-icons/md";
// import useAuth from "../hooks/useAuth";
// import { dropdownData } from "./utils/data";

const MobileMenu = ({ menuState, dropdownState, contactState, dropdownData, setAuth, auth }) => {
    const navigate = useNavigate();
    // const { auth, setAuth } = useAuth();
    const { applications, contact } = dropdownData;
    const { isMenuOpen, setIsMenuOpen } = menuState;
    const { isDropdownOpen, setIsDropdownOpen } = dropdownState;
    const { isContactOpen, setIsContactOpen } = contactState;

    const closeMobileMenu = () => {
        setIsMenuOpen(false);
    };

    const logOut = () => {
        sessionStorage.removeItem("auth");
        setAuth({});
        navigate("/");
        closeMobileMenu();
    };

    return (
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
                    src={logo}
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
                        to="/dashboard"
                        className="text-white px-6 py-4  transition-colors"
                        onClick={closeMobileMenu}
                    >
                        Dashboard
                    </Link>
                )}

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
                        to="/appointment"
                        className="text-white px-6 py-4 transition-colors"
                        onClick={closeMobileMenu}
                    >
                        Print Appointment Slip
                    </Link>
                )}

                {auth?.user && (
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
                            <DropDownMenu
                                menuArray={applications}
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
                    <button
                        onClick={logOut}
                        className="bg-red-800 w-full text-lg text-white font-medium px-6 py-4"
                    >
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
};

export default MobileMenu;
