import React from "react";
import { FiChevronDown, FiChevronUp, FiMinus, FiPlus } from "react-icons/fi";

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

export default DropDownButton;
