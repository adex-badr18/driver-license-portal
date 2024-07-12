import StepBox from "./components/StepBox"
import handcard from "../../assets/hand-card.webp"
import { useRef, useState } from "react";

import VerificationFailed from "./components/VerificationFailed"
import VerificationSuccess from "./components/VerificationSuccess"



const Verify = () => {
    window.scrollTo(0, 0)
    const IDinput = useRef()

    const [Popup, SetPopup] = useState(false)
    const [Message, SetMessage] = useState()


    let dummyId = "IDL1234567890"

    const closePopup = () => {
        SetPopup(false)
        document.querySelector("body").classList.remove("h-screen")
        document.querySelector("body").classList.remove("overflow-hidden")
        console.log(Popup)
    }

    const verifyID = () => {
        console.log(IDinput.current.value)
        SetPopup(true)

        if (!Popup) {
            document.querySelector("body").classList.add("h-screen")
            document.querySelector("body").classList.add("overflow-hidden")

            if (IDinput.current.value === dummyId) {
                SetMessage(
                    <VerificationSuccess
                        BtnFunction={closePopup}
                    />
                )
            } else {
                SetMessage(
                    <VerificationFailed
                        BtnFunction={closePopup}
                    />
                )
            }
        }

    }


    return (
        <div className="p-4 md:px-20 h-full md:py-16 ">
            <div >

                <div className="grid gap-10 items-center justify-center md:flex">
                    <div className="w-full">
                        <h1 className=" text-3xl md:text-5xl text-custom-green font-bold mb-8 md:mb-16">Verify License</h1>

                        <p className="text-justify">Securely verify your identity or someone else's with our driver's license verification service. This quick and easy process uses secure technology to protect your information. Get started today and streamline your verification needs.</p>
                        <p>Sample ID: IDL1234567890 </p>

                        <div className="mt-10">
                            <label className="mb-[2px] block text-base font-medium text-neutral-700">License ID <span className="text-red-500">*</span></label>
                            <input ref={IDinput} className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" type="text" placeholder="Enter License ID to be verified" />
                        </div>

                        <div className="mt-5 grid place-content-end">
                            <button onClick={verifyID} className="bg-custom-green text-white py-2.5 px-8 rounded-md">Submit</button>

                        </div>
                    </div>

                    <div className="w-full">
                        <img className="w-full" src={handcard} alt="" />
                    </div>


                </div>


                <div className="w-full mt-10 p-3 md:p-8">
                    <h2 className="text-3xl text-custom-green font-bold mb-2">How it Works</h2>
                    <p >Get Started with your verification requset following the simple guidelines below:</p>

                    <div className="grid  md:grid-cols-2 gap-8 mt-14 ">
                        <StepBox
                            head={<>Get Started</>}
                            message={"Click on the get input field above to begin your verification process"}
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
                            message={"You should recieve a clear and concise response with seconds stating the validity of your license"}
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