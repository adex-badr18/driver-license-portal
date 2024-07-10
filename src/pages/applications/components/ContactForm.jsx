import React, { useState } from "react";
import NaijaStates from "naija-state-local-government";
import { hasNoEmptyValue } from "../utils";

const ContactForm = ({
    formData,
    setContactForm,
    handleChange,
    step,
    setStep,
    setIsSubmitted,
}) => {
    const [errorMessage, setErrorMessage] = useState("");
    const [state, setState] = useState("");

    const submit = (e) => {
        e.preventDefault();

        setErrorMessage("");

        console.log(formData);

        if (!formData.state && !formData.lga && !hasNoEmptyValue(formData)) {
            setErrorMessage("All fields are required.");
            return;
        }

        setIsSubmitted(true);
        setStep(step + 1);
    };

    const goBack = (e) => {
        e.preventDefault();

        setStep(step - 1);
    };

    return (
        <div className="px-10 py-4">
            {errorMessage && (
                <p className="bg-red-200 text-red-900 text-sm px-3 py-2 rounded-md mb-4">
                    {errorMessage}
                </p>
            )}

            <form className="">
                <div className="flex flex-col gap-4 md:gap-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
                        {/* Email */}
                        <div className="">
                            <label
                                htmlFor="email"
                                className="mb-[2px] block text-base font-medium text-neutral-700"
                            >
                                Email <small className="text-red-800">*</small>
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={(e) =>
                                    handleChange(e, setContactForm)
                                }
                                placeholder="Email"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                required
                            />
                        </div>

                        {/* Phone Number */}
                        <div className="">
                            <label
                                htmlFor="phone"
                                className="mb-[2px] block text-base font-medium text-neutral-700"
                            >
                                Phone Number{" "}
                                <small className="text-red-800">*</small>
                            </label>
                            <input
                                type="text"
                                name="phone"
                                id="phone"
                                value={formData.phone}
                                onChange={(e) =>
                                    handleChange(e, setContactForm)
                                }
                                placeholder="Phone Number"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1">
                        {/* Street Address */}
                        <div className="">
                            <label
                                htmlFor="streetAddress"
                                className="mb-[2px] block text-base font-medium text-neutral-700"
                            >
                                Street Address
                            </label>
                            <textarea
                                name="streetAddress"
                                id="streetAddress"
                                value={formData.streetAddress}
                                onChange={(e) =>
                                    handleChange(e, setContactForm)
                                }
                                placeholder="Street Address"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
                        <div className="">
                            <label
                                htmlFor="state"
                                className="mb-[2px] block text-base font-medium text-neutral-700"
                            >
                                State of Residence{" "}
                                <small className="text-red-800">*</small>
                            </label>
                            <select
                                name="state"
                                id="state"
                                value={formData.state}
                                onChange={(e) => {
                                    handleChange(e, setContactForm);
                                    // setState()
                                }}
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-[10px] px-4 text-base font-medium text-[#6B7280] outline-none focus:shadow-md"
                            >
                                <option value="">--Select state--</option>
                                {NaijaStates.states().map((state, index) => (
                                    <option key={index} value={state}>
                                        {state}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="">
                            <label
                                htmlFor="lga"
                                className="mb-[2px] block text-base font-medium text-neutral-700"
                            >
                                Local Govt. Area{" "}
                                <small className="text-red-800">*</small>
                            </label>
                            <select
                                name="lga"
                                id="lga"
                                value={formData.lga}
                                onChange={(e) =>
                                    handleChange(e, setContactForm)
                                }
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-[10px] px-4 text-base font-medium text-[#6B7280] outline-none focus:shadow-md"
                            >
                                <option value="">--Select LGA--</option>
                                {formData.state &&
                                    NaijaStates.lgas(formData.state).lgas.map((lga, index) => (
                                        <option key={index} value={lga}>
                                            {lga}
                                        </option>
                                    ))}
                            </select>
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
                        Continue
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
