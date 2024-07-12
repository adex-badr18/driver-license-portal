import React, { useState } from "react";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { hasNoEmptyValue } from "../utils";
import CustomModal from "./CustomModal";
import PaymentSuccess from "./PaymentSuccess";

const PaymentForm = ({
    formData,
    setPaymentForm,
    handleChange,
    isPaid,
    setIsPaid,
    step,
    setStep,
    setIsSubmitted,
    applicationType,
}) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const licenseAmount =
        applicationType === "new"
            ? 35000
            : applicationType === "renewal"
            ? 40000
            : 50000;

    const serviceCharge = 155;
    console.log(isPaid);

    const openModal = () => setIsModalOpen(true);

    const submit = (e) => {
        e.preventDefault();

        setIsSubmitting(true);
        setErrorMessage("");

        if (!hasNoEmptyValue(formData)) {
            setErrorMessage("All fields are required.");
            return;
        }

        console.log(formData);

        setTimeout(() => {
            setIsSubmitted(true);
            setIsSubmitting(false);
            openModal();
            setIsSubmitting(false);

            // setIsPaid(true);
            // setStep(step + 1);
        }, 3000);
    };

    const goBack = (e) => {
        e.preventDefault();

        setStep(step - 1);
    };

    return isPaid ? (
        <div className="flex flex-col items-center gap-5">
            <div className="flex justify-center items-center self-center p-1 bg-neutral-100 rounded-full shadow-md h-20 w-20">
                <div className="flex justify-center items-center p-1 bg-neutral-200 rounded-full h-16 w-16">
                    <IoCheckmarkDoneCircle className="text-5xl text-green-700" />
                </div>
            </div>

            <div className="flex flex-col items-center">
                <h3 className="text-lg font-bold mb-5">
                    Your payment has been successfully processed!
                </h3>
                <p className="">
                    Please review your biodata and contact information
                </p>
                <p className="">before you submit your application.</p>
            </div>

            <button
                className=" bg-custom-green hover:bg-green-600 px-4 py-3 text-white font-medium tracking-widest rounded-lg"
                onClick={() => setStep(step + 1)}
            >
                Review Your Information
            </button>
        </div>
    ) : (
        <div className="flex flex-col-reverse md:flex-row gap-6 md:gap-10">
            <div className="py-4 flex-1">
                {errorMessage && (
                    <p className="bg-red-200 text-red-900 text-sm px-3 py-2 rounded-md mb-4">
                        {errorMessage}
                    </p>
                )}

                <form className="">
                    <div className="flex flex-col gap-4 md:gap-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
                            <div className="">
                                <label
                                    htmlFor="cardName"
                                    className="mb-[2px] block text-base font-medium text-neutral-700"
                                >
                                    Card Name{" "}
                                    <small className="text-red-800">*</small>
                                </label>
                                <input
                                    type="text"
                                    name="cardName"
                                    id="cardName"
                                    value={formData.cardName}
                                    onChange={(e) =>
                                        handleChange(e, setPaymentForm)
                                    }
                                    placeholder="Card Name"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    required
                                />
                            </div>

                            {/* card Number */}
                            <div className="">
                                <label
                                    htmlFor="cardNumber"
                                    className="mb-[2px] block text-base font-medium text-neutral-700"
                                >
                                    Card Number{" "}
                                    <small className="text-red-800">*</small>
                                </label>
                                <input
                                    type="text"
                                    name="cardNumber"
                                    id="cardNumber"
                                    value={formData.cardNumber}
                                    onChange={(e) =>
                                        handleChange(e, setPaymentForm)
                                    }
                                    placeholder="Card Number"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
                            <div className="">
                                <label
                                    htmlFor="expiry"
                                    className="mb-[2px] block text-base font-medium text-neutral-700"
                                >
                                    Card Expiry{" "}
                                    <small className="text-red-800">*</small>
                                </label>
                                <input
                                    type="date"
                                    name="expiry"
                                    id="expiry"
                                    value={formData.expiry}
                                    onChange={(e) =>
                                        handleChange(e, setPaymentForm)
                                    }
                                    placeholder="Card Expiry"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    required
                                />
                            </div>

                            <div className="">
                                <label
                                    htmlFor="cvv"
                                    className="mb-[2px] block text-base font-medium text-neutral-700"
                                >
                                    CVV{" "}
                                    <small className="text-red-800">*</small>
                                </label>
                                <input
                                    type="text"
                                    name="cvv"
                                    id="cvv"
                                    value={formData.cvv}
                                    onChange={(e) =>
                                        handleChange(e, setPaymentForm)
                                    }
                                    placeholder="CVV"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1">
                            {/* Card Pin */}
                            <div className="">
                                <label
                                    htmlFor="cardPin"
                                    className="mb-[2px] block text-base font-medium text-neutral-700"
                                >
                                    Card Pin{" "}
                                    <small className="text-red-800">*</small>
                                </label>
                                <input
                                    type="password"
                                    name="cardPin"
                                    id="cardPin"
                                    value={formData.cardPin}
                                    onChange={(e) =>
                                        handleChange(e, setPaymentForm)
                                    }
                                    placeholder="Card Pin"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    required
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            {/* Payment Summary */}
            <div className="payment-summary flex flex-col md:self-start md:mt-6 md:w-72 gap-2 border border-gray-200 rounded-md">
                <div className="flex justify-center p-4 bg-neutral-200">
                    <h1 className="font-bold text-grey">Payment Summary</h1>
                </div>

                <div className="flex justify-between gap-4 px-4">
                    <h1 className="">License Fee:</h1>
                    <h1 className="font-bold text-grey">{`₦${licenseAmount}.00`}</h1>
                </div>

                <div className="flex justify-between px-4">
                    <h1 className="">Service Charge:</h1>
                    <h1 className="font-bold text-grey">{`₦${serviceCharge}.00`}</h1>
                </div>

                <div className="flex justify-between border-y p-4">
                    <h1 className="">Grand Total:</h1>
                    <h1 className="font-bold text-grey">{`$${(
                        serviceCharge + licenseAmount
                    ).toFixed(2)}`}</h1>
                </div>

                <div className="px-4 pt-2 pb-4">
                    <button
                        className="w-full bg-custom-green hover:bg-green-600 px-4 py-3 text-white font-medium tracking-widest rounded-lg"
                        onClick={submit}
                    >
                        {isSubmitting ? (
                            <div className="flex justify-center gap-4">
                                <div className="w-6 h-6 rounded-full animate-spin border-y-4 border-solid border-white border-t-transparent shadow-md"></div>
                                <span>Processing...</span>
                            </div>
                        ) : (
                            "Pay"
                        )}
                    </button>
                </div>
            </div>

            {/* Payment Success Modal */}
            <CustomModal isOpen={isModalOpen}>
                <PaymentSuccess
                    step={step}
                    setStep={setStep}
                    setIsPaid={setIsPaid}
                />
            </CustomModal>
        </div>
    );
};

export default PaymentForm;
