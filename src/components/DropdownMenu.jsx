import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const DropDownMenu = ({ menuArray, closeMobileMenu }) => {
    const { auth } = useAuth();

    return (
        <div className="flex flex-col absolute z-30 left-6 md:left-0 mt-4 min-w-60 bg-white md:bg-[#3d4249] text-[#3d4249] md:text-white shadow-lg divide-y divide-solid divide-neutral-200 md:divide-neutral-600">
            {menuArray.map((menu, index) => (
                <Link
                    key={index}
                    to={menu.to}
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

export default DropDownMenu;
