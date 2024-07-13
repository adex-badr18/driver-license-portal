import logo from "../assets/images/dannon-logo2.png"
import coatofarm from "../assets/coatOfArm.png"
// import arrowRight from "../assets/arrowRight.svg"
// import search from "../assets/search.svg"
import { Link } from "react-router-dom"
import useAuth from "../hooks/useAuth"

const Header = () => {

    const { auth } = useAuth()


    return (
        <header className="px-4 py-3 hidden md:px-20 md:flex   md:flex-row justify-between Md:pt-6 md:pb-4 border-b">
            <div className="flex items-center">
                <div className="pr-3">
                    <img className="h-20" src={coatofarm} alt="" />
                </div>


                <div className="border-l pl-3 grid place-content-center border-green-700">
                    <img src={logo} alt="" />
                </div>

            </div>

            {/* <div className="flex items-center">
                <div className="relative">
                    <input
                        className="pl-14 pr-4 py-2 h-10 border rounded-bl-full outline-0 border-green-500 w-40 md:w-80"
                        type="text"
                        placeholder="Search here"
                    />
                    <img
                        className="w-4 top-1/2 left-6 absolute -translate-y-1/2"
                        src={search}
                        alt=""
                    />
                </div>
                <button className="bg-green-500 h-10 w-14 grid rounded-tr-full items-center justify-center">
                    <img className=" w-4" src={arrowRight} alt="" />
                </button>

            </div> */}
            <div className="flex gap-6">
                <div className="flex gap-4 items-center">

                    {
                        !auth.user ? <>
                            <Link to="/login">
                                <button className="bg-custom-green py-3 w-28 rounded-2xl text-white">
                                    Login
                                </button>
                            </Link>

                            <Link to="/signup">
                                <button className="border-custom-green border py-3 w-28  rounded-2xl font-semibold text-custom-green">
                                    Sign up
                                </button>
                            </Link>
                        </> : <>
                            <div className="border p-1 rounded-full h-16">
                                <img className="h-full rounded-full" src={auth.user.image} alt="" />
                            </div>

                        </>
                    }



                </div >
            </div >

        </header >

    );
};

export default Header;
