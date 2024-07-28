import { FaUserAlt } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { FaUser } from "react-icons/fa";
import { requireAuth } from "../../utils/auth";
import { getProfile } from "../../api";
import { useLoaderData } from "react-router-dom";

import Button from "../../components/utils/Button";
import { GrCertificate } from "react-icons/gr";
import { MdEditDocument } from "react-icons/md";
import { IoDocuments } from "react-icons/io5";
import { GrDocumentVerified } from "react-icons/gr";
import { TbCapture } from "react-icons/tb";
import { MdOutlineDriveEta } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";
import { BsClipboard2CheckFill } from "react-icons/bs";
import { HiOutlineDocumentDuplicate } from "react-icons/hi2";
import { FaPaypal } from "react-icons/fa";
import { Link } from "react-router-dom";

export const dashboardLoader = async ({ request }) => {
    await requireAuth(request);

    const profile = await getProfile();

    console.log(profile);

    return profile;
};

const Dashboard = () => {
    const { auth } = useAuth();

    console.log(auth.user);

    let style;

    return (
        <div className="md:px-10 xl:px-20 max-w-[100vw] overflow-hidden px-4  py-4 pb-20 ">
            <div>
                <div className=" flex md:py-4 gap-3 items-center">
                    <div className=" ">
                        {!auth.user?.image ? (
                            <FaUserAlt className="text-8xl p-1 border rounded-full" />
                        ) : (
                            <img
                                className="h-16 rounded-full"
                                src={auth.user?.image}
                                alt=""
                            />
                        )}
                    </div>
                    <div>
                        <h1 className="text-2xl md:text-2xl">
                            Hello{" "}
                            <span className="text-custom-green font-bold capitalize">
                                {auth.user?.username}
                            </span>{" "}
                        </h1>
                        <p>Welcome Back!</p>
                    </div>
                </div>
            </div>

            <div className="grid w-full my-10 gap-4 grid-cols-2  lg:grid-cols-4 md:grid-cols-3">
                <Link
                    to={"/profile"}
                    className="hover:scale-105 transition-all hover:-translate-y-2 bg-green-100   duration-300  rounded-lg grid gap-2 place-items-center place-content-center text-custom-green  p-4 h-[10rem] text-center"
                >
                    <FaUser className="text-6xl" />
                    <h3 className=" font-bold">Profile</h3>
                </Link>

                <Link
                    to="/applications/new"
                    className="hover:scale-105 transition-all hover:-translate-y-2 bg-white rounded-lg grid gap-2  shadow-[0_0_10px_rgba(0,0,0,0.1)] place-items-center place-content-center p-4 h-[10rem] text-center"
                >
                    <GrCertificate className="text-6xl" />
                    <h3 className=" font-bold">New Application</h3>
                </Link>

                <Link
                    to={"/applications/renewal"}
                    className=" hover:scale-105 transition-all hover:-translate-y-2  shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-lg grid gap-2 place-items-center place-content-center  p-4 h-[10rem] text-center md:bg-green-100 md:text-custom-green md:shadow-none"
                >
                    <MdEditDocument className="text-6xl" />
                    <h3 className=" font-bold">Renewal</h3>
                </Link>

                <Link
                    to={"/applications/reissue"}
                    className="hover:scale-105 transition-all hover:-translate-y-2 bg-green-100 text-custom-green md:shadow-[0_0_10px_rgba(0,0,0,0.1)] md:bg-white md:text-black rounded-lg grid gap-2 place-items-center place-content-center  p-4 h-[10rem] text-center"
                >
                    <IoDocuments className="text-6xl" />
                    <h3 className=" font-bold">Reissue</h3>
                </Link>

                <Link
                    to={"/verify-license"}
                    className="hover:scale-105 transition-all hover:-translate-y-2 lg:bg-white lg:text-black md:shadow-none lg:shadow-[0_0_10px_rgba(0,0,0,0.1)] bg-green-100 rounded-lg grid gap-2 place-items-center place-content-center text-custom-green  p-4 h-[10rem] text-center"
                >
                    <HiOutlineDocumentDuplicate className="text-6xl" />
                    <h3 className=" font-bold">License Verification</h3>
                </Link>

                <Link
                    to={""}
                    className="hover:scale-105 transition-all hover:-translate-y-2 lg:bg-green-100 lg:text-custom-green lg:shadow-none shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-lg grid gap-2 place-items-center place-content-center  p-4 h-[10rem] text-center"
                >
                    <GrDocumentVerified className="text-6xl" />
                    <h3 className=" font-bold">Appointment Slip</h3>
                </Link>

                <Link
                    to={"/capture-centers"}
                    className="hover:scale-105 transition-all hover:-translate-y-2 md:bg-green-100  shadow-[0_0_10px_rgba(0,0,0,0.1)] md:shadow-none rounded-lg grid gap-2 place-items-center place-content-center md:text-custom-green lg:bg-white lg:text-black lg:shadow-[0_0_10px_rgba(0,0,0,0.1)] p-4 h-[10rem] text-center"
                >
                    <BsClipboard2CheckFill className="text-6xl" />
                    <h3 className=" font-bold">Capture Centers</h3>
                </Link>
                <Link
                    to={"/driving-schools"}
                    className="hover:scale-105 transition-all hover:-translate-y-2 bg-green-100 text-custom-green md:shadow-[0_0_10px_rgba(0,0,0,0.1)] md:bg-white md:text-black rounded-lg grid gap-2 place-items-center place-content-center lg:shadow-none lg:bg-green-100 lg:text-custom-green p-4 h-[10rem] text-center"
                >
                    <TbCapture className="text-6xl" />
                    <h3 className=" font-bold">Driving Schools</h3>
                </Link>
                <Link
                    to={"/support"}
                    className="hover:scale-105 transition-all hover:-translate-y-2 bg-green-100 rounded-lg grid gap-2 place-items-center place-content-center text-custom-green  p-4 h-[10rem] text-center"
                >
                    <MdOutlineDriveEta className="text-6xl" />
                    <h3 className=" font-bold">Support</h3>
                </Link>
            </div>
        </div>
    );
};

export default Dashboard;
