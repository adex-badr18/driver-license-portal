import Logo from "./utils/Logo"
import arrowRight from "../assets/arrowRight.svg"
import search from "../assets/search.svg"

const Header = () => {

    const logoStyle = {
        container: "logo grid content-start text-center  justify-start",
        h1: "text-green-500 text-3xl md:text-6xl font-extrabold",
        p: "text-gray-500 text-[7px] md:text-xs"
    }
    return (
        <header className="px-4 py-3 hidden md:px-20 md:flex   md:flex-row justify-between Md:pt-6 md:pb-4 border-b">

            <Logo
                container={logoStyle.container}
                h1Style={logoStyle.h1}
                pStyle={logoStyle.p}
            />

            <div className="flex items-center">
                <div className="relative">
                    <input className="pl-14 pr-4 py-2 h-10 border rounded-bl-full outline-0 border-green-500 w-40 md:w-80" type="text" placeholder="Search here" />
                    <img className="w-4 top-1/2 left-6 absolute -translate-y-1/2" src={search} alt="" />
                </div>
                <button className="bg-green-500 h-10 w-14 grid rounded-tr-full items-center justify-center">
                    <img className=" w-4" src={arrowRight} alt="" />
                </button>
            </div>
        </header>
    )
}

export default Header