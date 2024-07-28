import React from "react";
import { Link } from "react-router-dom";
import DropDownButton from "./DropDownButton";
import DropDownMenu from "./DropdownMenu";
// import useAuth from "../hooks/useAuth";
// import { dropdownData } from "./utils/data";

const DesktopMenu = ({ dropdownState, contactState, dropdownData, auth }) => {
    // const { auth } = useAuth();
    const { applications, contact } = dropdownData;
    const { isDropdownOpen, setIsDropdownOpen } = dropdownState;
    const { isContactOpen, setIsContactOpen } = contactState;

    return (
        <div className="container mx-auto flex justify-center items-center">
            <div className="hidden md:flex items-center">
                <Link
                    to={!auth ? "/" : "/dashboard"}
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
            </div>
        </div>
    );
};

export default DesktopMenu;
