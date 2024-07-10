import React from "react";
import { Link } from "react-router-dom";

const LinkButton = ({ buttonText, linkTo, state, classAttr }) => {
    return (
        <Link
            to={linkTo}
            state={state}
            className={`py-3 px-8 rounded-full bg-custom-green text-white text-center hover:bg-green-600 ${classAttr}`}
        >
            {buttonText}
        </Link>
    );
};

export default LinkButton;
