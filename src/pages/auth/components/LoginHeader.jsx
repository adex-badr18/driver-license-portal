import { Link } from "react-router-dom";
import icon from "../../../assets/images/business.png"

export default function LoginHeader({
    heading,
    paragraph,
    linkName,
    linkUrl = "/signup",
    routeMessage,
}) {
    return (
        <div className="">
            <div className="flex justify-center">
                <img
                    alt=""
                    className="h-14 w-14"
                    src={icon}
                />
            </div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                {heading}
            </h2>

            {routeMessage && <h4 className="font-medium text-lg text-red-600 text-center mt-6">{routeMessage}</h4>}
        </div>
    );
}
