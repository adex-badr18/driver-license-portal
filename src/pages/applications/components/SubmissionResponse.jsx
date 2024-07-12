import React, { useState } from "react";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

const SubmissionResponse = ({ responseData }) => {
    const navigate = useNavigate();
    const [isGenerating, setIsGenerating] = useState(false);
    console.log(responseData);

    const generateSlip = () => {
        setIsGenerating(true);

        setTimeout(() => {
            setIsGenerating(false);
            navigate("/appointment", { state: { responseData } });
        }, 3000);
    };

    return (
        <div className="flex flex-col gap-5 p-4">
            <div className="flex justify-center items-center self-center p-1 bg-neutral-100 rounded-full shadow-md h-20 w-20">
                <div className="flex justify-center items-center p-1 bg-neutral-200 rounded-full h-16 w-16">
                    <IoCheckmarkDoneCircle className="text-5xl text-green-700" />
                </div>
            </div>

            <div className="flex flex-col items-center">
                <h3 className="text-lg font-bold mb-5">
                    Your application has been successfully submitted.
                </h3>
                <p className="">
                    Please generate your appointment slip to get the details of
                </p>
                <p className="">your capturing center. Thank you.</p>
            </div>

            <div className="flex flex-col gap-2 mt-1">
                <button
                    className="w-full bg-custom-green hover:bg-green-600 px-4 py-3 text-white font-medium tracking-widest rounded-lg"
                    onClick={generateSlip}
                >
                    {isGenerating ? (
                        <div className="flex justify-center gap-4">
                            <div className="w-6 h-6 rounded-full animate-spin border-y-4 border-solid border-white border-t-transparent shadow-md"></div>
                            <span>Generating Slip...</span>
                        </div>
                    ) : (
                        "Generate Appointment Slip"
                    )}
                </button>
            </div>
        </div>
    );
};

export default SubmissionResponse;
