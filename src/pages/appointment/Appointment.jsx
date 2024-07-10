import React from "react";
import { useLocation } from "react-router-dom";
import { getTomorrowsDate } from "./utils";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

const Appointment = () => {
    const { state } = useLocation();
    const { biodata, contactData } = state?.responseData;

    const printSlip = () => {
        window.print();
    };

    return (
        <div className="flex flex-col items-center gap-6 py-10">
            <div className="flex justify-center items-center self-center p-1 bg-neutral-100 rounded-full shadow-md h-20 w-20">
                <div className="flex justify-center items-center p-1 bg-neutral-200 rounded-full h-16 w-16">
                    <IoCheckmarkDoneCircle className="text-5xl text-green-700" />
                </div>
            </div>

            <h1 className="text-2xl font-bold">Appointment Scheduled</h1>

            <div className="flex flex-col gap-4 w-[500px] border p-6">
                <h3 className="text-xl font-medium">Personal Information</h3>

                <div className="flex justify-between gap-10">
                    <label
                        htmlFor="fullName"
                        className="mb-[2px] block text-base font-medium text-neutral-700"
                    >
                        Full Name:
                    </label>
                    <p className="font-bold text-grey" id="fullName">
                        {`${biodata.firstName} ${biodata.middleName} ${biodata.lastName}`}
                    </p>
                </div>

                <div className="flex justify-between gap-10">
                    <label
                        htmlFor="email"
                        className="mb-[2px] block text-base font-medium text-neutral-700"
                    >
                        Email:
                    </label>
                    <p className="font-bold text-grey" id="email">
                        {contactData.email}
                    </p>
                </div>

                <div className="flex justify-between gap-10">
                    <label
                        htmlFor="phone"
                        className="mb-[2px] block text-base font-medium text-neutral-700"
                    >
                        Phone Number:
                    </label>
                    <p className="font-bold text-grey" id="phone">
                        {contactData.phone}
                    </p>
                </div>

                <div className="flex justify-between gap-10">
                    <label
                        htmlFor="nin"
                        className="mb-[2px] block text-base font-medium text-neutral-700"
                    >
                        NIN:
                    </label>
                    <p className="font-bold text-grey" id="nin">
                        {biodata.nin}
                    </p>
                </div>

                <div className="flex justify-between gap-10">
                    <label
                        htmlFor="state"
                        className="mb-[2px] block text-base font-medium text-neutral-700"
                    >
                        State of Residence:
                    </label>
                    <p className="font-bold text-grey" id="state">
                        {contactData.state}
                    </p>
                </div>

                <div className="flex justify-between gap-10">
                    <label
                        htmlFor="lga"
                        className="mb-[2px] block text-base font-medium text-neutral-700"
                    >
                        LGA:
                    </label>
                    <p className="font-bold text-grey" id="lga">
                        {contactData.lga}
                    </p>
                </div>
            </div>

            <div className="flex flex-col gap-4 w-[500px] border p-6">
                <h3 className="text-xl font-medium">Appointment Information</h3>

                <div className="flex justify-between gap-10">
                    <label
                        htmlFor="fullName"
                        className="mb-[2px] block text-base font-medium text-neutral-700"
                    >
                        Application ID:
                    </label>
                    <p className="font-bold text-grey" id="fullName">
                        {`QWSERT-12345-12GH90`}
                    </p>
                </div>

                <div className="flex justify-between gap-10">
                    <label
                        htmlFor="capture-center"
                        className="mb-[2px] block text-base font-medium text-neutral-700"
                    >
                        Capture Center:
                    </label>
                    <p className="font-bold text-grey" id="capture-center">
                        {`Beside FO filling station, Unilag Premise, Lagos Mainland, Lagos.`}
                    </p>
                </div>

                <div className="flex justify-between gap-10">
                    <label
                        htmlFor="appointment-date"
                        className="mb-[2px] block text-base font-medium text-neutral-700"
                    >
                        Date:
                    </label>
                    <p className="font-bold text-grey" id="appointment-date">
                        {getTomorrowsDate()}
                    </p>
                </div>

                <div className="flex justify-between gap-10">
                    <label
                        htmlFor="phone"
                        className="mb-[2px] block text-base font-medium text-neutral-700"
                    >
                        Time:
                    </label>
                    <p className="font-bold text-grey" id="phone">
                        {`9:00 AM - 12 NOON`}
                    </p>
                </div>
            </div>

            <div className="flex justify-end print:hidden">
                <button
                    className="bg-custom-green hover:bg-green-600 px-4 py-2 text-white rounded-lg mt-4"
                    onClick={printSlip}
                >
                    Print Appointment Slip
                </button>
            </div>
        </div>
    );
};

export default Appointment;
