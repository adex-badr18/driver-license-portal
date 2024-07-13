import { FaUserAlt } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom"


const Dashboard = () => {
    const { auth } = useAuth()
    const user = auth.user

    return (
        <div className="md:px-10 lg:px-20 max-w-[100vw] overflow-hidden px-4  py-4 pb-20 ">

            <div >
                <div className=" flex md:py-4 gap-3 items-center">
                    <div className="w-fit border h-fit p-1 rounded-full ">
                        {
                            !user.image ? <FaUserAlt className="text-4xl" /> : <img className="h-16 md:h-20 rounded-full" src={user.image} alt="" />
                        }

                    </div>
                    <div>
                        <h1 className="text-2xl md:text-4xl">Hello <span className="text-custom-green font-bold">{user.username}</span> </h1>
                        <h1 className="text-xl md:text-3xl">Welcome Back!</h1>

                    </div>
                </div>

                {/* <div className="flex gap-3">
                    <div className="grid">
                        <div className="inline-block bg-custom-green h-10 w-40">
                            
                        </div>
                        <div className="inline-block bg-green-100 h-20 w-40">

                        </div>
                    </div>
                    <div className="grid">
                        <div className="inline-block bg-custom-green h-10 w-40">

                        </div>
                        <div className="inline-block bg-green-100 h-20 w-40">

                        </div>
                    </div>
                </div> */}



            </div>

            <div className=" md:grid mt-4 md:grid-cols-2 md:gap-10 gap-4 items-start ">


                <div className="border h-fit rounded-lg  p-4">
                    <div className="flex items-center justify-between mb-4">
                        <h1 className="text-xl font-semibold">Drivers License Details</h1>

                    </div>

                    <div className="border grid  gap-2 p-4 rounded-xl">
                        <p> <span className="font-bold text-custom-green">License No:</span> <span className=" md:text-xl">IDL123456</span></p>
                        <p> <span className="font-bold text-custom-green" >License Class:</span> <span className=" md:text-xl">A</span></p>
                        <p> <span className="font-bold text-custom-green">Country of Issue:</span> <span className=" md:text-xl">Nigeria</span></p>
                        <p> <span className="font-bold text-custom-green">Date of Issue: </span><span className=" md:text-xl">22-06-2023</span></p>
                        <p> <span className="font-bold text-custom-green">Date of Expiration:</span> <span className=" md:text-xl">22-06-2025</span></p>

                    </div>
                </div>

                <div className="border mt-4 md:mt-0 h-fit rounded-lg  p-4">
                    <div className="flex items-center justify-between mb-4">
                        <h1 className="text-xl font-semibold"> Drivers Information</h1>

                        <Link to="/profile">
                            <button className="border bg-custom-green rounded-md text-white text-sm py-1.5 px-2">View Profile</button>
                        </Link>


                    </div>
                    <div className="border grid truncate overflow-clip gap-2 p-4 text-wrap rounded-xl">
                        <p> <span className="font-bold text-custom-green">First Name:</span> <span className=" md:text-xl">{user.firstName}</span></p>
                        <p> <span className="font-bold text-custom-green" >Last Name:</span> <span className=" md:text-xl">{user.lastName}</span></p>
                        <p> <span className="font-bold text-custom-green">Email:</span> <span className="  md:text-xl ">{user.email}</span></p>
                        <p> <span className="font-bold text-custom-green">Sex: </span><span className=" md:text-xl">{user.gender}</span></p>
                        <p> <span className="font-bold text-custom-green">Phone No:</span> <span className=" md:text-xl">+234900000000</span></p>

                    </div>


                </div>
            </div>
            <div className="mt-8">
                <h1 className="font-bold text-2xl mb-6">Transaction History</h1>
                <div className="max-w-[100vw] overflow-x-hidden">
                    <table className="w-full ">
                        <tr className="bg-custom-green h-10 border-collapse text-white" >
                            <th className="p-2 w-16" >S/N</th>
                            <th className="p-2 border-x">Transaction Applied</th>
                            <th className="p-2  border-x">Reference No</th>
                            <th className="p-2 ">Status</th>
                        </tr>

                        <tr>
                            <td className="p-2 text-center">1</td>
                            <td className="p-2  border-x">License Renewal</td>
                            <td className="p-2  border-x">12345</td>
                            <td className="p-2  ">Success</td>
                        </tr>
                        <tr className="bg-green-100">
                            <td className="p-2 text-center">2</td>
                            <td className="p-2 border-x">License Renewal</td>
                            <td className="p-2 border-x">12345</td>
                            <td className="p-2 text-red-500">Failed</td>
                        </tr>

                        <tr>
                            <td className="p-2 text-center">3</td>
                            <td className="p-2 border-x">License Renewal</td>
                            <td className="p-2 border-x">12345</td>
                            <td className="p-2 text-orange-500">Pending</td>
                        </tr>

                        <tr className="bg-green-100">
                            <td className="p-2 text-center">4</td>
                            <td className="p-2 border-x">License Renewal</td>
                            <td className="p-2 border-x">12345</td>
                            <td className="p-2">Success</td>
                        </tr>


                    </table>
                </div>

            </div>
        </div>
    )
}

export default Dashboard