import { useState } from "react";
import MobileHeader from "./MobileHeader";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import useAuth from "../hooks/useAuth";
import { dropdownData } from "./utils/data";

const NavBar = () => {
    const { auth, setAuth } = useAuth();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleDrawer = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-[#3d4249] print:hidden">
            <DesktopMenu
                dropdownState={{ isDropdownOpen, setIsDropdownOpen }}
                contactState={{ isContactOpen, setIsContactOpen }}
                dropdownData={dropdownData}
                auth={auth}
            />

            <MobileHeader toggleDrawer={toggleDrawer} isMenuOpen={isMenuOpen} />

            {/* Mobile Menu */}
            {isMenuOpen && (
                <MobileMenu
                    menuState={{ isMenuOpen, setIsMenuOpen }}
                    dropdownState={{ isDropdownOpen, setIsDropdownOpen }}
                    contactState={{ isContactOpen, setIsContactOpen }}
                    dropdownData={dropdownData}
                    setAuth={setAuth}
                    auth={auth}
                />
            )}
        </nav>
    );
};

export default NavBar;
