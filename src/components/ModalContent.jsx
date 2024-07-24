import React from "react";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";

const ModalContent = ({ closeModal, heading, primaryText, secondaryText }) => {
    return (
        <div className="flex flex-col gap-5 p-6">
            <div className="absolute top-6 right-6 text-2xl text-grey cursor-pointer">
                <IoCloseSharp onClick={closeModal} className="font-semibold" />
            </div>
            <div className="flex justify-center items-center self-center p-1 bg-neutral-100 rounded-full shadow-md h-20 w-20">
                <div className="flex justify-center items-center p-1 bg-neutral-200 rounded-full h-16 w-16">
                    <IoCheckmarkDoneCircle className="text-5xl text-green-700" />
                </div>
            </div>

            <div className="flex flex-col items-center">
                <h3 className="text-lg font-bold mb-5">{heading}</h3>
                <p className="">{primaryText}</p>
                <p className="">{secondaryText}</p>
            </div>
        </div>
    );
};

export default ModalContent;
