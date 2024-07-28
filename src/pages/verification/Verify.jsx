import StepBox from "./components/StepBox"
import verifiedLicense from "../../assets/verified-license.svg"
import { useEffect, useRef, useState } from "react";
import VerificationFailed from "./components/VerificationFailed"
import VerificationSuccess from "./components/VerificationSuccess"
import VerificationInvalid from "./components/VerificationInvalid";
import axios from 'axios';
import Spinner from "./components/SpinningPopup";


const Verify = () => {
    window.scrollTo(0, 0)
    const IDinput = useRef()
    const [Popup, SetPopup] = useState(false)
    const [Message, SetMessage] = useState("")
    const [value, setValue] = useState("")
    const [errMsg, setErrMsg] = useState("")




    const closePopup = () => {
        SetPopup(false)
        document.querySelector("body").classList.remove("h-screen")
        document.querySelector("body").classList.remove("overflow-hidden")
        console.log(Popup)
    }

    useEffect(() => {
        setErrMsg("")
    }, [value])


    const VerifyLicense = async (e) => {
        e.preventDefault()

        if (value) {

            SetPopup(true)
            SetMessage(<Spinner>hello</Spinner>)

            try {
                const response = await axios.get(`https://saviorte.pythonanywhere.com/api/licenses/${value}`,)
                const data = await response.data
                console.log(data)

                if (response.status === 200) {
                    SetMessage(
                        <VerificationSuccess
                            BtnFunction={closePopup}
                            details={data.details}
                            licenseID={data.licenseId}
                            expires={data.expiry_date}
                            issued={data.issue_date}
                            status={data.status}
                        />
                    )
                }
            }
            catch (err) {
                console.log(err.response)
                if (err.message === 'Network Error') {
                    SetPopup(true)
                    SetMessage(
                        <VerificationFailed
                            BtnFunction={closePopup}
                            errMsg={"You currently are not connected to the internet, Please check internet connection and try again"}
                        />
                    )
                }
                else if (err.response.status === 404) {
                    SetPopup(true)
                    SetMessage(
                        <VerificationInvalid
                            BtnFunction={closePopup}
                            details={err.response.data.details}
                            licenseID={err.response.data.licenseId}
                            status={err.response.data.status}

                        />

                    )
                }
            }

        } else {

            setErrMsg("This field is required")
        }


    }


    return (
        <div className="p-4 md:px-10 xl:p-20 h-full md:py-16 ">


            <div >

                <div className="grid gap-10 items-center justify-center lg:flex">
                    <div className="w-full">
                        <h1 className=" text-3xl md:text-5xl text-custom-green font-bold mb-8 md:mb-16">Verify License</h1>

                        <p className="text-justify">Securely verify your identity or someone else's with our driver's license verification service. This quick and easy process uses secure technology to protect your information. Get started today and streamline your verification needs.</p>
                        <p>Sample ID: IDL1234567890 </p>

                        <form>

                            <label className=" w-full mt-6 flex shadow-[2px_5px_10px_rgba(0,0,0,0.1)] border border-gray-50  rounded-full">
                                <input onChange={(e) => { setValue(e.target.value) }} ref={IDinput} placeholder="Enter License ID" className='bg-transparent py-4 pl-6 pr-2 text-black w-full rounded-xl md:rounded-none  border-customr-grey outline-0' />
                                <button onClick={VerifyLicense} className="bg-custom-green px-8 text-white    rounded-full">Submit</button>

                            </label>
                            <span className="text-red-500 px-4 h-4 text-sm block mt-1">{errMsg}</span>



                        </form>



                    </div>

                    <div className="w-full md:grid place-content-center">
                        <img className=" p-4 h-[25rem] w-[25rem] block object-contain aspect-square shadow-[5px_2px_10px_rgba(0,0,0,0.1)]  rounded-full " src={verifiedLicense} alt="" />
                    </div>


                </div>


                <div className="w-full mt-10 p-3 md:p-8">
                    <h2 className="text-3xl text-custom-green font-bold mb-2">How it Works</h2>
                    <p >Get Started with your verification requset following the simple guidelines below:</p>

                    <div className="grid  md:grid-cols-2 gap-8 mt-14 ">
                        <StepBox
                            head={<>Get Started</>}
                            message={"Click on input field above to begin your verification process"}
                            count={"1"}
                        />
                        <StepBox
                            head={<>Fill Verification  Form</>}
                            message={"Kindly input your verification ID correctly for accurate verification and click the submit button to begin verification"}
                            count={"2"}
                        />

                        <StepBox
                            head={<>Secure Verifcation</>}
                            message={"Our system securely check those details against official records to confirm your license is valid in real-time"}
                            count={"3"}
                        />
                        <StepBox
                            head={"Instant Results"}
                            message={"You should recieve a clear and concise response within seconds stating the validity of your license"}
                            count={"4"}
                        />

                    </div>
                </div>
                {
                    Popup && Message
                }



            </div>



        </div>
    )
}

export default Verify