import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom"
const VerificationFailed = ({ BtnFunction }) => {

    return (
        <div className="fixed p-3  top-0 left-0 w-full h-full bg-black/50 grid place-content-center">

            <div className="bg-white max-w-[25rem] rounded-xl w-[100%]  p-6">
                <div className="grid place-content-center mb-4 ">
                    <div className="border rounded-full bg-red-600 p-2">
                        <FaXmark className="text-5xl text-white" />

                    </div>
                </div>
                <h1 className="text-center font-semibold text-lg"> Driving License Check Verification <br />
                    Not Completed</h1>



                <div className="bg-white p-6 mt-4 rounded-xl shadow-[0_0_20px_2px_rgba(0,0,0,0.1)]">

                    <p className="mt-2">unable to apply the license because access or permission were denied. Plese contact your system administrator for assistance </p>

                    <button onClick={BtnFunction} className="bg-custom-green w-full mt-6 text-white py-2.5 px-8 rounded-md">Proceed</button>



                </div>
            </div>

        </div>





    )
}

export default VerificationFailed