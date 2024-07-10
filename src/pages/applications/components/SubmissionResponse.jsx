import React from "react";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { Link } from "react-router-dom";

const SubmissionResponse = ({ responseData }) => {
    console.log(responseData);
    
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
                <Link
                    to="/appointment"
                    state={{
                        responseData,
                    }}
                    className="px-4 py-2 text-center bg-custom-green text-white font-medium rounded-lg hover:bg-green-600"
                >
                    Generate Appointment Slip
                </Link>
            </div>
        </div>
    );
};

export default SubmissionResponse;
