import React, { useState } from "react";
import { hasNoEmptyValue } from "../utils";

const BiodataForm = ({
    formData,
    setBiodataForm,
    handleChange,
    step,
    setStep,
    setIsSubmitted,
    applicationType,
}) => {
    const [errorMessage, setErrorMessage] = useState("");

    const submit = (e) => {
        e.preventDefault();

        setErrorMessage("");

        // console.log(formData);

        // if (!hasNoEmptyValue(formData)) {
        //     setErrorMessage("All fields are required.");
        //     return;
        // }

        setIsSubmitted(true);
        setStep(step + 1);
    };

    return (
        <div className="py-4">
            {errorMessage && (
                <p className="bg-red-200 text-red-900 text-sm px-3 py-2 rounded-md mb-4">
                    {errorMessage}
                </p>
            )}

            <form className="">
                <div className="flex flex-col gap-4 md:gap-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
                        {/* First Name */}
                        <div className="">
                            <label
                                htmlFor="firstName"
                                className="mb-[2px] block text-base font-medium text-neutral-700"
                            >
                                First Name{" "}
                                <small className="text-red-800">*</small>
                            </label>
                            <input
                                type="text"
                                name="firstName"
                                id="firstName"
                                value={formData.firstName}
                                onChange={(e) =>
                                    handleChange(e, setBiodataForm)
                                }
                                placeholder="First Name"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                required
                            />
                        </div>

                        {/* Last Name */}
                        <div className="">
                            <label
                                htmlFor="lastName"
                                className="mb-[2px] block text-base font-medium text-neutral-700"
                            >
                                Last Name{" "}
                                <small className="text-red-800">*</small>
                            </label>
                            <input
                                type="text"
                                name="lastName"
                                id="lastName"
                                value={formData.lastName}
                                onChange={(e) =>
                                    handleChange(e, setBiodataForm)
                                }
                                placeholder="Last Name"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
                        {/* Middle Name */}
                        <div className="">
                            <label
                                htmlFor="middleName"
                                className="mb-[2px] block text-base font-medium text-neutral-700"
                            >
                                Middle Name
                            </label>
                            <input
                                type="text"
                                name="middleName"
                                id="middleName"
                                value={formData.middleName}
                                onChange={(e) =>
                                    handleChange(e, setBiodataForm)
                                }
                                placeholder="Middle Name"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>

                        <div className="">
                            <label
                                htmlFor="gender"
                                className="mb-[2px] block text-base font-medium text-neutral-700"
                            >
                                Gender <small className="text-red-800">*</small>
                            </label>
                            <select
                                name="gender"
                                id="gender"
                                value={formData.gender}
                                onChange={(e) =>
                                    handleChange(e, setBiodataForm)
                                }
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-[10px] px-4 text-base font-medium text-[#6B7280] outline-none focus:shadow-md"
                            >
                                <option value="">--Select gender--</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
                        <div className="">
                            <label
                                htmlFor="dateOfBirth"
                                className="mb-[2px] block text-base font-medium text-neutral-700"
                            >
                                Date of Birth{" "}
                                <small className="text-red-800">*</small>
                            </label>
                            <input
                                type="date"
                                name="dateOfBirth"
                                id="dateOfBirth"
                                value={formData.dateOfBirth}
                                onChange={(e) =>
                                    handleChange(e, setBiodataForm)
                                }
                                placeholder="Date of Birth"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                required
                            />
                        </div>

                        <div className="">
                            <label
                                htmlFor="motherMaidenName"
                                className="mb-[2px] block text-base font-medium text-neutral-700"
                            >
                                Mother's Maiden Name{" "}
                                <small className="text-red-800">*</small>
                            </label>
                            <input
                                type="text"
                                name="motherMaidenName"
                                id="motherMaidenName"
                                value={formData.motherMaidenName}
                                onChange={(e) =>
                                    handleChange(e, setBiodataForm)
                                }
                                placeholder="Mother's Maiden Name"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
                        {/* NIN */}
                        <div className="">
                            <label
                                htmlFor="nin"
                                className="mb-[2px] block text-base font-medium text-neutral-700"
                            >
                                NIN <small className="text-red-800">*</small>
                            </label>
                            <input
                                type="text"
                                name="nin"
                                id="nin"
                                value={formData.nin}
                                onChange={(e) =>
                                    handleChange(e, setBiodataForm)
                                }
                                placeholder="NIN"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                required
                            />
                        </div>

                        {/* Driving School Certificate Number */}
                        <div className="">
                            <label
                                htmlFor="drivingCertificateNumber"
                                className="mb-[2px] block text-base font-medium text-neutral-700"
                            >
                                Driving School Certificate Number
                            </label>
                            <input
                                type="text"
                                name="drivingCertificateNumber"
                                id="drivingCertificateNumber"
                                value={formData.drivingCertificateNumber}
                                onChange={(e) =>
                                    handleChange(e, setBiodataForm)
                                }
                                placeholder="Driving School Certificate Number"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
                        <div className="">
                            <label
                                htmlFor="passportPhoto"
                                className="mb-[2px] block text-base font-medium text-neutral-700"
                            >
                                Passport Photo{" "}
                                <small className="text-red-800">*</small>
                            </label>
                            <input
                                type="file"
                                name="passportPhoto"
                                id="passportPhoto"
                                // value={formData.passportPhoto}
                                onChange={(e) =>
                                    handleChange(e, setBiodataForm)
                                }
                                placeholder="Passport Photo"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                required
                            />
                        </div>

                        {applicationType === "re-issue" && (
                            <div className="">
                                <label
                                    htmlFor="legalReportFile"
                                    className="mb-[2px] block text-base font-medium text-neutral-700"
                                >
                                    Affidavit/Police Report{" "}
                                    <small className="text-red-800">*</small>
                                </label>
                                <input
                                    type="file"
                                    name="legalReportFile"
                                    id="legalReportFile"
                                    // value={formData.legalReportFile}
                                    onChange={(e) =>
                                        handleChange(e, setBiodataForm)
                                    }
                                    placeholder="Affidavit/Police Report"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    required
                                />
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex justify-end mt-4">
                    <button
                        className="bg-custom-green hover:bg-green-600 px-4 py-2 text-white rounded-lg mt-4"
                        onClick={submit}
                    >
                        Continue
                    </button>
                </div>
            </form>
        </div>
    );
};

export default BiodataForm;
