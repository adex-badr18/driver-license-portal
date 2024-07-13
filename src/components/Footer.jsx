import { Link } from "react-router-dom";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";

import logo from "../assets/images/dannon-logo2.png"
import youtube from "../assets/youtube.svg";
import angleright from "../assets/angle-right.svg";


const Footer = () => {


    return (
        <footer className="print:hidden">
            <div className="flex lg:flex-row flex-col gap-10 justify-between px-4 py-8 md:px-20 md:pt-16 md:pb-12 bg-black">

                <div className="grid place-content-start">
                    <img src={logo} alt="" />
                </div>

                <div>
                    <p className="font-bold mb-4 text-green-500">Quick Links</p>
                    <ul className="grid gap-2">
                        <li>
                            <Link className="flex text-gray-50 gap-2">
                                <img className="w-2 " src={angleright} alt="" />{" "}
                                New Drivers License
                            </Link>
                        </li>

                        <li>
                            <Link className="flex text-gray-50 gap-2">
                                <img className="w-2" src={angleright} /> Drivers
                                License Renewal
                            </Link>
                        </li>
                        <li>
                            <Link className="flex  text-gray-100 gap-2">
                                <img className="w-2" src={angleright} /> FAQ
                            </Link>
                        </li>
                        <li>
                            <Link className="flex text-gray-200 gap-2">
                                <img className="w-2" src={angleright} /> Contact
                            </Link>
                        </li>
                        <li>
                            <Link className="flex text-gray-100 gap-2">
                                <img className="w-2" src={angleright} />{" "}
                                Aknowledgement Slip
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <p className="font-bold mb-4 text-green-500">Other Links</p>
                    <ul className="grid gap-2">
                        <li>
                            <Link className="flex text-gray-50 gap-2">
                                <img className="w-2 " src={angleright} alt="" />{" "}
                                Contact Us
                            </Link>
                        </li>

                        <li>
                            <Link className="flex text-gray-200 gap-2">
                                <img className="w-2" src={angleright} /> Forms
                            </Link>
                        </li>
                        <li>
                            <Link className="flex text-gray-50 gap-2">
                                <img className="w-2" src={angleright} />{" "}
                                Condition of use
                            </Link>
                        </li>
                        <li>
                            <Link className="flex text-gray-100 gap-2">
                                <img className="w-2" src={angleright} /> News &
                                Media
                            </Link>
                        </li>
                        <li>
                            <Link className="flex  text-gray-100 gap-2">
                                <img className="w-2" src={angleright} /> Privacy
                                and Security Statement
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <p className="mb-4 font-bold text-green-500">Follow Us:</p>
                    <ul className="flex items-center gap-4">
                        <li>
                            <img className="w-8" src={facebook} alt="" />
                        </li>
                        <li>
                            <img className="w-8" src={instagram} alt="" />
                        </li>
                        <li>
                            <img className="w-8" src={twitter} alt="" />
                        </li>
                        <li>
                            <img className="w-8" src={youtube} alt="" />
                        </li>
                    </ul>
                </div>
            </div>
            <div className="text-center text-sm h-10 border-t grid content-center bg-black text-white">
                Copyright &copy; ACME 2024
            </div>
        </footer>
    );
};

export default Footer;
