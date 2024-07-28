import React from "react";
import { MdClose, MdMenu } from "react-icons/md";
import logo from "../assets/Logo.svg";
import coatOfArm from "../assets/coatOfArm.png";

const MobileHeader = ({ toggleDrawer, isMenuOpen }) => {
    return (
        <div className="flex md:hidden justify-between bg-white border-b text-grey p-6 shadow-sm">
            <div className="flex items-center divide-x divide-custom-green">
                <img
                    src={coatOfArm}
                    alt="Coat of Arm"
                    className="w-12 h-auto pr-3"
                />
                <img
                    src={logo}
                    alt="Dannon Group Logo"
                    className="w-40 h-10 pl-3"
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
    );
};

export default MobileHeader;
