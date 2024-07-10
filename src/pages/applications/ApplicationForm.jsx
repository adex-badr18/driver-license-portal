import React, { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import BiodataForm from "./components/BiodataForm";
import PaymentForm from "./components/PaymentForm";
import ContactForm from "./components/ContactForm";
import Review from "./components/Review";
import CustomModal from "./components/CustomModal";
// import CheckoutModal from "./components/CheckoutModal";
// import CheckoutSuccess from "./components/CheckoutSuccess";
// import CheckoutFailure from "./components/CheckoutFailure";
import { MdOutlinePersonOutline, MdOutlineContactPage } from "react-icons/md";
import {
    FaRectangleList,
    FaRegCreditCard,
    FaRegRectangleList,
} from "react-icons/fa6";
import SubmissionResponse from "./components/SubmissionResponse";

const ApplicationForm = () => {
    const { state } = useLocation();
    const { type } = state;
    const [step, setStep] = useState(1);
    const [isBiodataSubmitted, setIsBiodataSubmitted] = useState(false);
    const [isContactSubmitted, setIsContactSubmitted] = useState(false);
    const [isPaymentSubmitted, setIsPaymentSubmitted] = useState(false);
    const [isPaid, setIsPaid] = useState(false);
    const [isInfoReviewed, setIsInfoReviewed] = useState(false);
    const [isSubmittingApplication, setIsSubmittingApplication] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // console.log(type);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const [biodataForm, setBiodataForm] = useState({
        firstName: "",
        lastName: "",
        middleName: "",
        gender: "",
        motherMaidenName: "",
        dateOfBirth: "",
        passportPhoto: "",
        nin: "",
        drivingCertificateNumber: "",
        legalReportFile: "",
    });
    const [contactForm, setContactForm] = useState({
        email: "",
        phone: "",
        streetAddress: "",
        state: "",
        lga: "",
    });
    const [paymentForm, setPaymentForm] = useState({
        cardName: "",
        cardNumber: "",
        expiry: "",
        cvv: "",
        cardPin: "",
    });

    const handleFormChange = (e, setForm) => {
        const { name, value, type, checked } = e.target;
        const elementValue = type === "checkbox" ? checked : value;

        setForm((prev) => ({
            ...prev,
            [name]: elementValue,
        }));
    };

    const showBiodataForm = () => {
        if (isBiodataSubmitted) {
            setStep(1);
        }
    };

    const showContactForm = () => {
        if (isContactSubmitted) {
            setStep(2);
        }
    };

    const showReview = () => {
        if (isBiodataSubmitted && isContactSubmitted) {
            setStep(3);
        }
    };

    const showPaymentForm = () => {
        if (isPaid) {
            setStep(3);
        }
    };

    return (
        <div className="container p-10 max-w-[1280px] m-auto">
            <h1 className="text-3xl font-bold text-custom-green mb-8">
                {type === "new"
                    ? "New Driver's License Application"
                    : type === "renewal"
                    ? "Online Driver's License Renewal"
                    : "Driver's License Replacement/Re-Issue"}
            </h1>
            <div className="flex flex-col md:flex-row justify-between md:items-start gap-10">
                <div className="multistep-form-container flex-1">
                    <div className="multistep-form">
                        <div className="step-indicator">
                            <div className="flex items-center">
                                <div className="flex flex-col items-center gap-1">
                                    <div
                                        className={`icon p-2 ${
                                            isBiodataSubmitted
                                                ? "bg-custom-green"
                                                : "bg-gray-200"
                                        } rounded-md hover:cursor-pointer`}
                                        onClick={showBiodataForm}
                                    >
                                        <MdOutlinePersonOutline
                                            className={
                                                isBiodataSubmitted &&
                                                `text-neutral-200`
                                            }
                                        />
                                    </div>
                                    <span className="">Biodata</span>
                                </div>

                                <div
                                    className={`separator flex-1 h-[2px] ${
                                        isBiodataSubmitted
                                            ? "bg-custom-green"
                                            : "bg-neutral-200"
                                    } -mt-6`}
                                ></div>

                                <div className="flex flex-col items-center gap-1">
                                    <div
                                        className={`icon p-2 ${
                                            isContactSubmitted
                                                ? "bg-custom-green"
                                                : "bg-gray-200"
                                        } rounded-md hover:cursor-pointer`}
                                        onClick={showContactForm}
                                    >
                                        <MdOutlineContactPage
                                            className={
                                                isContactSubmitted &&
                                                `text-neutral-200`
                                            }
                                        />
                                    </div>
                                    <span className="">Contact</span>
                                </div>

                                <div
                                    className={`separator flex-1 h-[2px] ${
                                        isContactSubmitted
                                            ? "bg-custom-green"
                                            : "bg-neutral-200"
                                    } -mt-6`}
                                ></div>

                                <div className="flex flex-col items-center gap-1">
                                    <div
                                        className={`icon p-2 ${
                                            isPaymentSubmitted
                                                ? "bg-custom-green"
                                                : "bg-gray-200"
                                        } rounded-md hover:cursor-pointer`}
                                        onClick={showPaymentForm}
                                    >
                                        <FaRegCreditCard
                                            className={
                                                isPaymentSubmitted && isPaid &&
                                                `text-neutral-200`
                                            }
                                        />
                                    </div>
                                    <span className="">Payment</span>
                                </div>

                                <div
                                    className={`separator flex-1 h-[2px] ${
                                        isPaid
                                            ? "bg-custom-green"
                                            : "bg-neutral-200"
                                    } -mt-6`}
                                ></div>

                                <div className="flex flex-col items-center gap-1">
                                    <div
                                        className={`icon p-2 ${
                                            isInfoReviewed
                                                ? "bg-custom-green"
                                                : "bg-gray-200"
                                        } rounded-md hover:cursor-pointer`}
                                        onClick={showReview}
                                    >
                                        <FaRegRectangleList
                                            className={
                                                isInfoReviewed &&
                                                `text-neutral-200`
                                            }
                                        />
                                    </div>
                                    <span className="">Review</span>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-2xl font-medium pt-5 pb-5 text-center">
                            {step === 1
                                ? "Biodata"
                                : step === 2
                                ? "Contact Info"
                                : step === 3
                                ? "Payment"
                                : "Review Details"}
                        </h2>

                        <div className="body">
                            {step === 1 ? (
                                <BiodataForm
                                    formData={biodataForm}
                                    setBiodataForm={setBiodataForm}
                                    handleChange={handleFormChange}
                                    step={step}
                                    setStep={setStep}
                                    setIsSubmitted={setIsBiodataSubmitted}
                                    applicationType={type}
                                />
                            ) : step === 2 ? (
                                <ContactForm
                                    formData={contactForm}
                                    setContactForm={setContactForm}
                                    handleChange={handleFormChange}
                                    step={step}
                                    setStep={setStep}
                                    setIsSubmitted={setIsContactSubmitted}
                                />
                            ) : step === 3 ? (
                                <PaymentForm
                                    formData={paymentForm}
                                    setPaymentForm={setPaymentForm}
                                    isPaid={isPaid}
                                    setIsPaid={setIsPaid}
                                    handleChange={handleFormChange}
                                    step={step}
                                    setStep={setStep}
                                    setIsSubmitted={setIsPaymentSubmitted}
                                    applicationType={type}
                                />
                            ) : (
                                <Review
                                    biodata={biodataForm}
                                    contactData={contactForm}
                                    step={step}
                                    setStep={setStep}
                                    setIsReviewed={setIsInfoReviewed}
                                    openModal={openModal}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <CustomModal isOpen={isModalOpen}>
                <SubmissionResponse responseData={{biodata: biodataForm, contactData: contactForm}} />
            </CustomModal>
        </div>
    );
};

export default ApplicationForm;
