
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth"
import { MdLogout } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";





const SideMenu = ({ closeFunc }) => {

    const { auth, setAuth } = useAuth()
    const navigate = useNavigate()

    const user = auth.user

    const logOut = () => {
        sessionStorage.removeItem('auth');
        setAuth({});
        navigate("/");

    };
    return (

        <div className="absolute animate-[slidein_0.25s_ease-in-out] w-[18rem] z-10 shadow-[0_0_20px_rgba(0,0,0,0.1)] rounded   top-[6.25rem] right-[3rem]  bg-white">
            <div className="inline-block -top-2 right-10 translate-x-1/2 absolute rotate-45 bg-white h-6 w-6"></div>
            <div className="flex gap-2 px-4 pt-4 pb-3 items-center">
                <div className="border size-10  w-fit rounded-full">
                    {
                        user.image ? (
                            <img className="h-full rounded-full" src={user.image} alt="" />
                        ) : (
                            <RxAvatar className="size-10 rounded-full text-custom-green" />
                        )
                    }
                </div>
                <div >
                    <p className="font-semibold">{user.firstName} {user.lastName}</p>
                    <p className=" w-44 text-sm whitespace-nowrap overflow-hidden text-ellipsis">{user.email}</p>
                </div>


            </div>

            <ul className="grid gap-1  border-t py-4 px-2 border-gray-200">
                <li><Link onClick={closeFunc} to="/dashboard" className=" px-3 rounded-lg py-2 cursor-pointer hover:bg-green-100 hover:text-custom-green transition-colors flex items-center gap-2"
                ><MdOutlineSpaceDashboard className="font-bold text-lg" />
                    <span>Dashboard</span>
                </Link></li>

                <li>
                    <Link to="/profile" onClick={closeFunc} className="  px-4 py-2 cursor-pointer hover:bg-green-100  rounded-lg hover:text-custom-green transition-colors flex items-center gap-2"
                    ><FaUser className="font-bold text-lg" />
                        <span>Profile</span>
                    </Link>
                </li>

                {/* <li>
                    <Link to={"/profile"} onClick={closeFunc} className="  px-4 py-2 cursor-pointer hover:bg-green-100  rounded-lg hover:text-custom-green transition-colors flex items-center gap-2"
                    ><IoSettingsOutline className="font-bold text-lg" />
                        <span>Settings</span>
                    </Link>
                </li> */}

                <li>
                    <Link to={"/support"} onClick={closeFunc} className="  px-4 py-2 cursor-pointer hover:bg-green-100  rounded-lg hover:text-custom-green transition-colors flex items-center gap-2"
                    ><IoIosHelpCircleOutline className="font-bold text-lg" />
                        <span>Help Centers</span>
                    </Link>
                </li>

                <li className=" border-t pt-3 px-4 py-2 cursor-pointer hover:bg-green-100  rounded-lg hover:text-custom-green transition-colors flex items-center gap-2"
                    onClick={() => {
                        closeFunc()
                        logOut()

                    }

                    }><MdLogout className="font-bold text-lg" />
                    <span>Logout</span>
                </li>
            </ul>




        </div >
    )
}

export default SideMenu