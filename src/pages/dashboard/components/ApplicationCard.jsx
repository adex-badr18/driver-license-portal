import React from "react";
import { Link } from "react-router-dom";

const ApplicationCard = ({ icon, applicationType, linkTo }) => {
    return (
        <div className="group relative">
            <Link to={linkTo} className="lg:w-[16rem] flex flex-col w-full overflow-hidden p-6 border sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75">
                <i className="text-[4rem] text-custom-green self-center">
                    {icon}
                </i>
                <h3 className="mt-6 text-sm text-gray-500">
                    <span className="absolute inset-0"></span>
                    Application
                </h3>
                <p className="text-base font-semibold text-gray-900">
                    {applicationType}
                </p>
            </Link>
        </div>
    );
};

export default ApplicationCard;
