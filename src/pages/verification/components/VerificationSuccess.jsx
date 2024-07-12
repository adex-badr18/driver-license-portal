import { IoCheckmarkDoneCircle } from "react-icons/io5";




const VerifcationSuccess = ({ BtnFunction }) => {
    return (
        <div className="fixed  top-0 left-0 w-full h-full bg-black/50 grid place-content-center">

            <div className="bg-white rounded-xl w-[25rem] p-6">
                <div className="grid gap-4  mb-4 justify-items-center">
                    <IoCheckmarkDoneCircle className="text-7xl text-green-700" />
                </div>
                <h1 className="text-center font-semibold text-lg"> Driving License Check Verification <br />
                    Successfully Completed</h1>



                <div className="bg-white p-6 mt-4 rounded-xl shadow-[0_0_20px_2px_rgba(0,0,0,0.1)]">
                    <h2 className="font-bold">Details</h2>
                    <ul className="grid gap-3 mt-3">
                        <li><span className="text-gray-400">Owner: </span>Micheal Joe</li>
                        <li><span className="text-gray-400">Active: </span>True</li>
                        <li><span className="text-gray-400">Issued: </span>01-09-2024</li>
                        <li><span className="text-gray-400">license No: </span>IDL123456789</li>
                    </ul>

                    <button onClick={BtnFunction} className="bg-custom-green w-full mt-6 text-white py-2.5 px-8 rounded-md">Proceed</button>

                </div>


            </div>

        </div>
    )
}

export default VerifcationSuccess