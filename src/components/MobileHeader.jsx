import React from "react";
import { MdClose, MdMenu } from "react-icons/md";
import logo from "../assets/images/dannon-logo2.png";
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

                <div className="border-l pl-3 grid place-content-center border-green-700">
                    <img
                        src={logo}
                        alt="Dannon Group Logo"
                        className="w-40 h-auto pl-3"
                    />
                    <span className="text-[9.4px] tracking-normal text-custom-green uppercase font-bold -mt-[6px] ml-4">
                        Instant Drivers License
                    </span>
                </div>
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
