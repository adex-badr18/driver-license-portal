import React, { useState } from "react";
import { BiSolidEdit } from "react-icons/bi";

const Review = ({
    biodata,
    contactData,
    step,
    setStep,
    setIsReviewed,
    openModal,
}) => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const submit = (e) => {
        e.preventDefault();

        console.log(biodata);
        console.log(contactData);

        setIsSubmitting(true);

        setTimeout(() => {
            setIsReviewed(true);
            openModal();
            setIsSubmitting(false);
        }, 3000);
    };

    const goBack = (e) => {
        e.preventDefault();

        setStep(step - 1);
    };

    return (
        <div className="flex flex-col px-10 py-4">
            <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                {/* Biodata Review */}
                <div className="flex flex-col w-full md:w-1/2 shadow-md border border-neutral-200 rounded-md">
                    <div className="flex justify-between bg-neutral-200 p-4">
                        <h4 className="text-xl font-bold text-grey">Biodata</h4>
                        <button
                            className="bg-neutral-300 hover:bg-neutral-400 p-1 rounded-md"
                            onClick={() => setStep(1)}
                        >
                            <BiSolidEdit />
                        </button>
                    </div>
                    <div className="flex flex-col gap-6 p-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
                            <div className="">
                                <label
                                    htmlFor="firstName"
                                    className="mb-[2px] block text-base font-medium text-neutral-700"
                                >
                                    First Name
                                </label>
                                <p
                                    className="font-bold text-grey"
                                    id="firstName"
                                >
                                    {biodata.firstName}
                                </p>
                            </div>

                            <div className="">
                                <label
                                    htmlFor="lastName"
                                    className="mb-[2px] block text-base font-medium text-neutral-700"
                                >
                                    Last Name
                                </label>
                                <p
                                    className="font-bold text-grey"
                                    id="lastName"
                                >
                                    {biodata.lastName}
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
                            <div className="">
                                <label
                                    htmlFor="middleName"
                                    className="mb-[2px] block text-base font-medium text-neutral-700"
                                >
                                    Middle Name
                                </label>
                                <p
                                    className="font-bold text-grey"
                                    id="middleName"
                                >
                                    {biodata.middleName}
                                </p>
                            </div>

                            <div className="">
                                <label
                                    htmlFor="gender"
                                    className="mb-[2px] block text-base font-medium text-neutral-700"
                                >
                                    Gender
                                </label>
                                <p className="font-bold text-grey" id="gender">
                                    {biodata.gender}
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
                            <div className="">
                                <label
                                    htmlFor="motherMaidenName"
                                    className="mb-[2px] block text-base font-medium text-neutral-700"
                                >
                                    Mother's Maiden Name
                                </label>
                                <p
                                    className="font-bold text-grey"
                                    id="motherMaidenName"
                                >
                                    {biodata.motherMaidenName}
                                </p>
                            </div>

                            <div className="">
                                <label
                                    htmlFor="dateOfBirth"
                                    className="mb-[2px] block text-base font-medium text-neutral-700"
                                >
                                    Date of Birth
                                </label>
                                <p
                                    className="font-bold text-grey"
                                    id="dateOfBirth"
                                >
                                    {biodata.dateOfBirth}
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
                            <div className="">
                                <label
                                    htmlFor="nin"
                                    className="mb-[2px] block text-base font-medium text-neutral-700"
                                >
                                    NIN
                                </label>
                                <p className="font-bold text-grey" id="nin">
                                    {biodata.nin}
                                </p>
                            </div>

                            <div className="">
                                <label
                                    htmlFor="drivingCertificateNumber"
                                    className="mb-[2px] block text-base font-medium text-neutral-700"
                                >
                                    Driving Certificate ID
                                </label>
                                <p
                                    className="font-bold text-grey"
                                    id="drivingCertificateNumber"
                                >
                                    {biodata.drivingCertificateNumber}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Review */}
                <div className="flex flex-col w-full md:w-1/2 shadow-md border border-neutral-200 rounded-md">
                    <div className="flex justify-between bg-neutral-200 p-4">
                        <h4 className="text-xl font-bold text-grey">Contact</h4>
                        <button
                            className="bg-neutral-300 hover:bg-neutral-400 p-1 rounded-md"
                            onClick={() => setStep(2)}
                        >
                            <BiSolidEdit />
                        </button>
                    </div>

                    <div className="flex flex-col gap-6 p-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
                            <div className="">
                                <label
                                    htmlFor="email"
                                    className="mb-[2px] block text-base font-medium text-neutral-700"
                                >
                                    Email
                                </label>
                                <p className="font-bold text-grey" id="email">
                                    {contactData.email}
                                </p>
                            </div>

                            <div className="">
                                <label
                                    htmlFor="phone"
                                    className="mb-[2px] block text-base font-medium text-neutral-700"
                                >
                                    Phone Number
                                </label>
                                <p className="font-bold text-grey" id="phone">
                                    {contactData.phone}
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
                            <div className="">
                                <label
                                    htmlFor="state"
                                    className="mb-[2px] block text-base font-medium text-neutral-700"
                                >
                                    State
                                </label>
                                <p className="font-bold text-grey" id="state">
                                    {contactData.state}
                                </p>
                            </div>

                            <div className="">
                                <label
                                    htmlFor="lga"
                                    className="mb-[2px] block text-base font-medium text-neutral-700"
                                >
                                    Local Govt. Area
                                </label>
                                <p className="font-bold text-grey" id="lga">
                                    {contactData.lga}
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-4 md:gap-10">
                            <div className="">
                                <label
                                    htmlFor="streetAddress"
                                    className="mb-[2px] block text-base font-medium text-neutral-700"
                                >
                                    Street Address
                                </label>
                                <p
                                    className="font-bold text-grey"
                                    id="streetAddress"
                                >
                                    {contactData.streetAddress}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-between mt-4 md:mt-8">
                <button
                    className="bg-custom-green hover:bg-green-600 px-4 py-2 text-white rounded-lg mt-4"
                    onClick={goBack}
                >
                    Previous
                </button>

                <button
                    className="bg-custom-green hover:bg-green-600 px-4 py-2 text-white rounded-lg mt-4"
                    onClick={submit}
                >
                    {isSubmitting ? (
                        <div className="flex justify-center gap-4">
                            <div className="w-6 h-6 rounded-full animate-spin border-y-4 border-solid border-white border-t-transparent shadow-md"></div>
                            <span>Submitting...</span>
                        </div>
                    ) : (
                        "Submit Application"
                    )}
                </button>
            </div>
        </div>
    );
};

export default Review;
